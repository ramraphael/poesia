import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import {
  Dialog,
  Portal,
  TextInput,
  Button,
  Text,
  SegmentedButtons,
} from "react-native-paper";
import { mutate } from "swr";
import { fetcher } from "@/lib/fetcher";
import { Controller, useForm } from "react-hook-form";

interface AddAllergiesDialogProps {
  visible: boolean;
  onDismiss: () => void;
  petId: string;
}

type AllergySeverity = "MILD" | "SEVERE";
type AllergyReaction = "HIVES" | "RASH" | "SWELLING";

interface AddAllergyFormValues {
  name: string;
  severity: AllergySeverity;
  reactions: AllergyReaction[];
}

export const AddAllergiesDialog: React.FC<AddAllergiesDialogProps> = ({
  visible,
  onDismiss,
  petId,
}) => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<AddAllergyFormValues>({
    defaultValues: { reactions: [] },
  });

  const [error, setError] = useState<string | null>(null);

  const onAddAllergy = async (values: AddAllergyFormValues) => {
    const { name, severity, reactions } = values;

    setError(null);

    try {
      const response = await fetcher(
        `/medical-records/pets/${petId}/allergies`,
        {
          method: "POST",
          body: JSON.stringify({
            name,
            severity,
            reactions,
          }),
        }
      );

      // Invalidate the pet data to refresh it
      await mutate(`/pets/${petId}`);

      // Reset form and close dialog
      reset();
      onDismiss();
    } catch (err) {
      console.error("Error adding allergy:", err);
      setError("Failed to add allergy. Please try again.");
    }
  };

  return (
    <Portal>
      <Dialog visible={visible} onDismiss={onDismiss}>
        <Dialog.Title>Add Allergy</Dialog.Title>
        <Dialog.Content>
          <View style={styles.form}>
            <Controller
              name="name"
              control={control}
              rules={{ required: true }}
              render={({ field: { value, onChange } }) => (
                <TextInput
                  label="Allergy Name"
                  value={value}
                  onChangeText={onChange}
                  style={styles.input}
                />
              )}
            />

            <Text style={styles.label}>Severity</Text>
            <Controller
              name="severity"
              control={control}
              rules={{ required: true }}
              render={({ field: { value, onChange } }) => (
                <SegmentedButtons
                  value={value}
                  onValueChange={(value) => onChange(value as AllergySeverity)}
                  buttons={[
                    { value: "MILD", label: "Mild" },
                    { value: "SEVERE", label: "Severe" },
                  ]}
                  style={styles.segmentedButtons}
                />
              )}
            />

            <Text style={styles.label}>Reactions</Text>

            <Controller
              name="reactions"
              control={control}
              rules={{ required: true }}
              render={({ field: { value, onChange } }) => (
                <SegmentedButtons
                  multiSelect
                  onValueChange={onChange}
                  value={value}
                  style={styles.segmentedButtons}
                  buttons={[
                    {
                      value: "HIVES",
                      label: "Hives",
                      showSelectedCheck: true,
                    },
                    {
                      value: "RASH",
                      label: "Rash",
                      showSelectedCheck: true,
                    },
                    {
                      value: "SWELLING",
                      label: "Swelling",
                      showSelectedCheck: true,
                    },
                  ]}
                />
              )}
            />

            {error && <Text style={styles.error}>{error}</Text>}
          </View>
        </Dialog.Content>
        <Dialog.Actions>
          <Button onPress={onDismiss} disabled={isSubmitting}>
            Cancel
          </Button>
          <Button
            mode="contained"
            onPress={handleSubmit(onAddAllergy)}
            loading={isSubmitting}
            disabled={isSubmitting}
          >
            Add
          </Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
};

const styles = StyleSheet.create({
  form: {
    gap: 12,
  },
  input: {
    marginBottom: 8,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  segmentedButtons: {
    marginBottom: 16,
  },
  reactionsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginBottom: 16,
  },
  reactionButton: {
    marginRight: 8,
  },
  error: {
    color: "red",
    marginTop: 8,
  },
});

export default AddAllergiesDialog;
