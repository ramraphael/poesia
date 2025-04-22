import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Dialog, Portal, TextInput, Button, Text } from "react-native-paper";
import { mutate } from "swr";
import { fetcher } from "@/lib/fetcher";
import { Controller, useForm } from "react-hook-form";
import MaskInput, { Masks } from "react-native-mask-input";

interface AddVaccineDialogProps {
  visible: boolean;
  onDismiss: () => void;
  petId: string;
}

interface AddVaccineFormValues {
  name: string;
  date: string;
}

export const AddVaccineDialog: React.FC<AddVaccineDialogProps> = ({
  visible,
  onDismiss,
  petId,
}) => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<AddVaccineFormValues>();

  const [error, setError] = useState<string | null>(null);

  const onAddVaccine = async (values: AddVaccineFormValues) => {
    const { name, date } = values;

    setError(null);

    try {
      const [month, day, year] = date.split("/");
      const formattedDate = [year, month, day].join("-");

      const response = await fetcher(
        `/medical-records/pets/${petId}/vaccines`,
        {
          method: "POST",
          body: JSON.stringify({
            name,
            date: formattedDate,
          }),
        }
      );

      // Invalidate the pet data to refresh it
      await mutate(`/pets/${petId}`);

      // Reset form and close dialog
      reset();
      onDismiss();
    } catch (err) {
      console.error("Error adding vaccine:", err);
      setError("Failed to add vaccine. Please try again.");
    }
  };

  return (
    <Portal>
      <Dialog visible={visible} onDismiss={onDismiss}>
        <Dialog.Title>Add Vaccine</Dialog.Title>
        <Dialog.Content>
          <View style={styles.form}>
            <Controller
              name="name"
              control={control}
              rules={{ required: true }}
              render={({ field: { value, onChange } }) => (
                <TextInput
                  label="Vaccine name"
                  value={value}
                  onChangeText={onChange}
                  style={styles.input}
                />
              )}
            />

            <Text style={styles.label}>Date vaccine was given</Text>
            <Controller
              name="date"
              control={control}
              rules={{ required: true }}
              render={({ field: { value, onChange } }) => (
                <TextInput
                  label="Date vaccine was given"
                  onChangeText={(value) => onChange(value)}
                  value={value}
                  style={{ flexDirection: "row" }}
                  render={(props) => (
                    <MaskInput {...props} mask={Masks.DATE_MMDDYYYY} />
                  )}
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
            onPress={handleSubmit(onAddVaccine)}
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

export default AddVaccineDialog;
