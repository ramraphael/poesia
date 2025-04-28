import { Controller, useForm } from "react-hook-form";
import { View, TouchableOpacity } from "react-native";
import { Button, Text, TextInput, useTheme } from "react-native-paper";
import { useAuth } from "@/hooks/use-auth";
import { router } from "expo-router";
import { useEffect, useState } from "react";

interface RegisterFormValues {
  name: string;
  email: string;
  password: string;
}

export default function RegisterScreen() {
  const theme = useTheme();

  const [error, setError] = useState<string | null>(null);

  const { control, handleSubmit } = useForm<RegisterFormValues>();

  const { registerAccount, isAuthenticated } = useAuth();

  const handleRegister = async (values: RegisterFormValues) => {
    setError(null);

    const { response } = await registerAccount(values);

    if (response.error) {
      setError(response.error);
    } else {
      router.push("/(tabs)");
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      router.push("/(tabs)");
    }
  }, [isAuthenticated]);

  return (
    <View
      style={{
        height: "100%",
        width: "80%",
        display: "flex",
        flexDirection: "column",
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
        gap: "12",
      }}
    >
      <Text variant="headlineLarge">Create Account</Text>

      {error && <Text style={{ color: "red", marginTop: 8 }}>{error}</Text>}

      <Controller
        name="name"
        control={control}
        rules={{ required: true }}
        render={({ field: { value, onChange } }) => (
          <TextInput
            onChangeText={(value) => onChange(value)}
            value={value}
            style={{ flexDirection: "row" }}
            label="Name"
          />
        )}
      />

      <Controller
        name="email"
        control={control}
        rules={{ required: true }}
        render={({ field: { value, onChange } }) => (
          <TextInput
            autoCapitalize="none"
            onChangeText={(value) => onChange(value)}
            value={value}
            style={{ flexDirection: "row" }}
            label="Email"
          />
        )}
      />

      <Controller
        name="password"
        control={control}
        rules={{ required: true }}
        render={({ field: { value, onChange } }) => (
          <TextInput
            autoCapitalize="none"
            onChangeText={(value) => onChange(value)}
            value={value}
            style={{ flexDirection: "row" }}
            label="Password"
            secureTextEntry={true}
          />
        )}
      />

      <Button mode="contained" onPress={handleSubmit(handleRegister)}>
        Sign Up
      </Button>
      <View style={{ flexDirection: "row", marginTop: 4 }}>
        <Text>Already have an account? </Text>
        <TouchableOpacity onPress={() => router.replace("/login")}>
          <Text
            style={{
              fontWeight: "bold",
              color: theme.colors.primary,
            }}
          >
            Log In
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
