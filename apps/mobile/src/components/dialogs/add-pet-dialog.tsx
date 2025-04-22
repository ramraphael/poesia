import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Dialog, Portal, TextInput, Button, Text } from "react-native-paper";
import { mutate } from "swr";
import { fetcher } from "@/lib/fetcher";
import { Controller, useForm } from "react-hook-form";
import MaskInput, { Masks } from "react-native-mask-input";
import { Dropdown } from "react-native-paper-dropdown";
import { router } from "expo-router";

interface AddPetDialogProps {
  visible: boolean;
  onDismiss: () => void;
}

interface AddPetFormValues {
  name: string;
  species: "DOG" | "CAT" | "BIRD";
  breed?: string;
  birthDate: string;
}

export const AddPetDialog: React.FC<AddPetDialogProps> = ({
  visible,
  onDismiss,
}) => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<AddPetFormValues>();

  const [error, setError] = useState<string | null>(null);

  const onAddPet = async (data: AddPetFormValues) => {
    try {
      setError(null);

      const [month, date, year] = data.birthDate.split("/");
      const formattedDate = [year, month, date].join("-");

      console.log(formattedDate);

      // Format the date to ISO string for the API
      const formattedData = {
        ...data,
        birthDate: formattedDate,
      };

      // Make the POST request to the API
      const response = await fetcher("/pets", {
        method: "POST",
        body: JSON.stringify(formattedData),
      });

      console.log("Response: ", response);

      // Update the SWR cache with the new pet
      // This will trigger a revalidation of the /pets endpoint
      await mutate("/pets");

      // Reset the form and dismiss dialog
      reset();
      onDismiss();
    } catch (err) {
      console.error("Error adding pet:", err);
      setError("Failed to add pet. Please try again.");
    }
  };

  return (
    <Portal>
      <Dialog visible={visible} onDismiss={onDismiss}>
        <Dialog.Title>Add Pet</Dialog.Title>

        <Dialog.Content>
          <View style={styles.form}>
            <Controller
              name="name"
              control={control}
              rules={{ required: true }}
              render={({ field: { value, onChange } }) => (
                <TextInput
                  label="Pet name"
                  value={value}
                  onChangeText={onChange}
                  style={styles.input}
                />
              )}
            />

            <Text style={styles.label}>Species</Text>
            <Controller
              name="species"
              control={control}
              rules={{ required: true }}
              render={({ field: { value, onChange } }) => (
                <Dropdown
                  onSelect={(value) => onChange(value)}
                  value={value}
                  options={[
                    { label: "Dog", value: "DOG" },
                    { label: "Cat", value: "CAT" },
                    { label: "Bird", value: "BIRD" },
                  ]}
                  label="Species"
                />
              )}
            />

            <Text style={styles.label}>Breed (optional)</Text>
            <Controller
              name="breed"
              control={control}
              rules={{ required: false }}
              render={({ field: { value, onChange } }) => (
                <TextInput
                  onChangeText={(value) => onChange(value)}
                  value={value}
                  style={{ flexDirection: "row" }}
                  label="Breed"
                />
              )}
            />

            <Text style={styles.label}>Date of birth</Text>
            <Controller
              name="birthDate"
              control={control}
              rules={{ required: false }}
              render={({ field: { value, onChange } }) => (
                <TextInput
                  label="Date of Birth"
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
            onPress={handleSubmit(onAddPet)}
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

export default AddPetDialog;
