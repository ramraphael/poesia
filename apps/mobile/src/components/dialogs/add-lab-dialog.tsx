import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Dialog, Portal, TextInput, Button, Text } from "react-native-paper";
import { mutate } from "swr";
import { fetcher } from "@/lib/fetcher";
import { Controller, useForm } from "react-hook-form";
import MaskInput, { Masks } from "react-native-mask-input";

interface AddLabDialogProps {
  visible: boolean;
  onDismiss: () => void;
  petId: string;
}

interface AddLabFormValues {
  name: string;
  dosage: string;
  instructions: string;
}

export const AddLabDialog: React.FC<AddLabDialogProps> = ({
  visible,
  onDismiss,
  petId,
}) => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<AddLabFormValues>();

  const [error, setError] = useState<string | null>(null);

  const onAddLab = async (values: AddLabFormValues) => {
    const { name, dosage, instructions } = values;

    setError(null);

    try {
      const response = await fetcher(`/medical-records/pets/${petId}/labs`, {
        method: "POST",
        body: JSON.stringify({
          name,
          dosage,
          instructions,
        }),
      });

      // Invalidate the pet data to refresh it
      await mutate(`/pets/${petId}`);

      // Reset form and close dialog
      reset();
      onDismiss();
    } catch (err) {
      console.error("Error adding Lab:", err);
      setError("Failed to add Lab. Please try again.");
    }
  };

  return (
    <Portal>
      <Dialog visible={visible} onDismiss={onDismiss}>
        <Dialog.Title>Add Lab</Dialog.Title>
        <Dialog.Content>
          <View style={styles.form}>
            <Controller
              name="name"
              control={control}
              rules={{ required: true }}
              render={({ field: { value, onChange } }) => (
                <TextInput
                  label="Lab name"
                  value={value}
                  onChangeText={onChange}
                  style={styles.input}
                />
              )}
            />

            <Text style={styles.label}>Dosage</Text>
            <Controller
              name="dosage"
              control={control}
              rules={{ required: true }}
              render={({ field: { value, onChange } }) => (
                <TextInput
                  label="Dosage"
                  value={value}
                  onChangeText={onChange}
                  style={styles.input}
                />
              )}
            />

            <Text style={styles.label}>Instructions</Text>
            <Controller
              name="instructions"
              control={control}
              rules={{ required: true }}
              render={({ field: { value, onChange } }) => (
                <TextInput
                  label="Instructions"
                  value={value}
                  onChangeText={onChange}
                  style={styles.input}
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
            onPress={handleSubmit(onAddLab)}
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

export default AddLabDialog;
