import { useAuth } from "@/hooks/use-auth";
import { router } from "expo-router";
import { useEffect } from "react";
import { View } from "react-native";
import { SvgUri } from "react-native-svg";
import { Text, Button, Icon } from "react-native-paper";

export default function HomeScreen() {
  const { isAuthenticated } = useAuth();

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
      <SvgUri uri="https://novellia.com/images/newLogo.svg" />
      <Text
        variant="headlineLarge"
        style={{ marginTop: 4, fontWeight: "bold" }}
      >
        Poesia*
      </Text>
      <Text variant="bodyLarge" style={{ marginTop: 4 }}>
        Manage your pet's health records
      </Text>
      <View style={{ gap: 12, marginTop: 12 }}>
        <Button mode="contained" onPress={() => router.push("/login")}>
          Login
        </Button>
        <Button mode="outlined" onPress={() => router.push("/register")}>
          Sign Up
        </Button>
      </View>
      <Text variant="bodySmall" style={{ marginTop: 12 }}>
        *A Novellia Company
      </Text>
    </View>
  );
}
