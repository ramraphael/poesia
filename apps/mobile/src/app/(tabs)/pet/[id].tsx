import { useLocalSearchParams } from "expo-router";
import {
  View,
  ScrollView,
  SafeAreaView,
  ActivityIndicator,
} from "react-native";
import { Text, Divider, Button } from "react-native-paper";
import useSWR from "swr";
import { fetcher } from "@/lib/fetcher";
import { formatDate } from "@/utils/format-date";
import AddAllergiesDialog from "@/components/dialogs/add-allergies-dialog";
import { PropsWithChildren, useState } from "react";
import { AddVaccineDialog } from "@/components/dialogs/add-vaccine-dialog";
import { AddLabDialog } from "@/components/dialogs/add-lab-dialog";
import { titleCase } from "@/utils/title-case";
import { VaccineCard } from "@/components/cards/vaccine-card";
import { AllergyCard } from "@/components/cards/allergy-card";
import { LabCard } from "@/components/cards/lab-card";

// TODO (Raph) Move these types to a shared directory or package for all sub-repos
interface Pet {
  id: string;
  name: string;
  species: "DOG" | "CAT" | "BIRD";
  breed?: string;
  birthDate: string;
  accountId: string;
  allergies: Allergy[];
  vaccines: Vaccine[];
  labs: Lab[];
}

interface Allergy {
  id: string;
  name: string;
  severity: string;
  reactions: string[];
  createdAt: string;
  updatedAt: string;
  petId: string;
}

interface Vaccine {
  id: string;
  name: string;
  date: string;
  nextDueDate: string;
  createdAt: string;
  updatedAt: string;
  petId: string;
}

interface Lab {
  id: string;
  name: string;
  dosage: string;
  instructions: string;
  createdAt: string;
  updatedAt: string;
  petId: string;
}

export default function PetDetail() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { data: pet, error, isLoading } = useSWR<Pet>(`/pets/${id}`, fetcher);

  // Dialog show state
  const [showAddAllergyDialog, setShowAddAllergyDialog] = useState(false);
  const [showAddVaccinesDialog, setShowAddVaccinesDialog] = useState(false);
  const [showAddLabDialog, setShowAddLabDialog] = useState(false);

  if (error) {
    return (
      <SafeAreaView
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        <Text variant="headlineMedium">Error loading pet details</Text>
        <Text variant="bodyMedium">{error.message}</Text>
      </SafeAreaView>
    );
  }

  if (!pet) {
    return (
      <SafeAreaView
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        <Text variant="headlineMedium">Pet not found</Text>
      </SafeAreaView>
    );
  }

  if (isLoading) {
    return (
      <SafeAreaView
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        <ActivityIndicator size="large" />
      </SafeAreaView>
    );
  }

  // Show dialog handlers
  const handleAddVaccine = () => {
    setShowAddVaccinesDialog(true);
  };

  const handleAddAllergy = () => {
    setShowAddAllergyDialog(true);
  };

  const handleAddLab = () => {
    setShowAddLabDialog(true);
  };

  console.log(pet.allergies);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={{ padding: 16 }}>
        {/* Dialogs to add medical records */}
        <AddVaccineDialog
          visible={showAddVaccinesDialog}
          onDismiss={() => setShowAddVaccinesDialog(false)}
          petId={pet.id}
        />
        <AddAllergiesDialog
          visible={showAddAllergyDialog}
          onDismiss={() => setShowAddAllergyDialog(false)}
          petId={pet.id}
        />
        <AddLabDialog
          visible={showAddLabDialog}
          onDismiss={() => setShowAddLabDialog(false)}
          petId={pet.id}
        />

        {/* Pet Details  */}
        <Text variant="headlineMedium" style={{ marginBottom: 4 }}>
          {pet.name}
        </Text>
        <Text variant="titleMedium" style={{ marginBottom: 4 }}>
          Species: {titleCase(pet.species)}
          {pet.breed ? ` - ${pet.breed}` : ""}
        </Text>
        <Text variant="titleMedium" style={{ marginBottom: 16 }}>
          Birth Date: {formatDate(pet.birthDate)}
        </Text>

        <Divider style={{ marginVertical: 16 }} />

        {/* Vaccines */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 8,
          }}
        >
          <Text variant="titleLarge">Vaccines</Text>
          <Button mode="contained-tonal" onPress={handleAddVaccine}>
            Add Vaccine
          </Button>
        </View>
        {pet.vaccines.length > 0 ? (
          pet.vaccines.map(({ id, name, date }) => (
            <VaccineCard key={id} name={name} date={date} />
          ))
        ) : (
          <EmptyText>No vaccines recorded</EmptyText>
        )}

        <Divider style={{ marginVertical: 16 }} />

        {/* Allergies */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 8,
          }}
        >
          <Text variant="titleLarge">Allergies</Text>
          <Button mode="contained-tonal" onPress={handleAddAllergy}>
            Add Allergy
          </Button>
        </View>
        {pet.allergies.length > 0 ? (
          pet.allergies.map(({ id, name, severity, reactions }) => (
            <AllergyCard
              key={id}
              name={name}
              severity={severity}
              reactions={reactions}
            />
          ))
        ) : (
          <EmptyText>No allergies recorded</EmptyText>
        )}

        <Divider style={{ marginVertical: 16 }} />

        {/* Labs  */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 8,
          }}
        >
          <Text variant="titleLarge">Lab Results</Text>
          <Button mode="contained-tonal" onPress={handleAddLab}>
            Add Lab
          </Button>
        </View>
        {pet.labs.length > 0 ? (
          pet.labs.map(({ id, name, dosage, instructions }) => (
            <LabCard
              key={id}
              name={name}
              dosage={dosage}
              instructions={instructions}
            />
          ))
        ) : (
          <EmptyText>No lab results recorded</EmptyText>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const EmptyText = ({ children }: PropsWithChildren) => {
  return (
    <Text
      variant="bodyMedium"
      style={{ marginTop: 8, marginBottom: 16, fontStyle: "italic" }}
    >
      {children}
    </Text>
  );
};
