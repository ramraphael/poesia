import { useAuth } from "@/hooks/use-auth";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { View, TouchableOpacity } from "react-native";
import { Button, Text, TextInput, useTheme } from "react-native-paper";

interface LoginFormValues {
  email: string;
  password: string;
}

export default function LoginScreen() {
  const theme = useTheme();

  const [error, setError] = useState<string | null>(null);

  const { control, handleSubmit } = useForm<LoginFormValues>();

  const { loginUser, isAuthenticated } = useAuth();

  const handleLogin = async (values: LoginFormValues) => {
    setError(null);

    const { response } = await loginUser(values);

    if (response.error) {
      setError(response.error);
    } else {
      router.push("/(tabs)");
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      router.replace("/(tabs)");
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
      <Text variant="headlineLarge">Login</Text>

      {error && <Text style={{ color: "red", marginTop: 8 }}>{error}</Text>}

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
            onChangeText={(value) => onChange(value)}
            value={value}
            style={{ flexDirection: "row" }}
            label="Password"
            secureTextEntry={true}
          />
        )}
      />

      <Button mode="contained" onPress={handleSubmit(handleLogin)}>
        Login
      </Button>
      <View style={{ flexDirection: "row", marginTop: 4 }}>
        <Text>Don't have an account? </Text>
        <TouchableOpacity onPress={() => router.replace("/register")}>
          <Text
            style={{
              fontWeight: "bold",
              color: theme.colors.primary,
            }}
          >
            Sign up
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
