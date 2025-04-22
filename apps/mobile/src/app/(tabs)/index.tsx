import AddPetDialog from "@/components/dialogs/add-pet-dialog";
import { PetCard } from "@/components/cards/pet-card";
import { useAuth } from "@/hooks/use-auth";
import { fetcher } from "@/lib/fetcher";
import { formatDate } from "@/utils/format-date";
import { router } from "expo-router";
import { useState } from "react";
import { View, SafeAreaView, ScrollView } from "react-native";
import { ActivityIndicator, Button, Text } from "react-native-paper";
import useSWR from "swr";

export default function DashboardHome() {
  const { data: pets, isLoading, error } = useSWR("/pets", fetcher);
  const [showAddPetDialog, setShowAddPetDialog] = useState(false);
  const { logout } = useAuth();

  const handleAddPet = () => {
    setShowAddPetDialog(true);
  };

  const handleLogout = async () => {
    try {
      logout();
    } catch (error) {
      console.error("Logout failed.");
    }
  };

  if (isLoading) {
    return (
      <SafeAreaView
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        <ActivityIndicator />
      </SafeAreaView>
    );
  }

  if (error) {
    return (
      <SafeAreaView
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        <Text variant="headlineMedium">Error loading pets</Text>
        <Text variant="bodyMedium">{error.message}</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView>
      <ScrollView style={{ padding: 16 }}>
        <AddPetDialog
          visible={showAddPetDialog}
          onDismiss={() => setShowAddPetDialog(false)}
        />
        <View
          style={{
            marginLeft: 12,
            marginRight: 12,
            marginTop: 24,
            marginBottom: 24,
            gap: 12,
          }}
        >
          {!pets.length ? (
            <Text
              variant="headlineMedium"
              style={{ textAlign: "center", marginBottom: 14 }}
            >
              No pets added yet
            </Text>
          ) : null}
          {pets.map((pet: any) => {
            return (
              <PetCard
                key={pet.id}
                petName={pet.name}
                animalType={pet.species}
                dateOfBrth={formatDate(pet.birthDate)}
                onPress={() => router.push(`/(tabs)/pet/${pet.id}`)}
              />
            );
          })}
          <Button mode="contained-tonal" onPress={handleAddPet}>
            + ADD PET
          </Button>
          <Button mode="outlined" onPress={handleLogout}>
            LOGOUT
          </Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
