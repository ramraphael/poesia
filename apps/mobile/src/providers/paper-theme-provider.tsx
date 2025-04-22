import { DARK_THEME, LIGHT_THEME } from "@/constants/Theme";
import { useColorScheme } from "@/hooks/useColorScheme";
import { PropsWithChildren } from "react";
import { PaperProvider } from "react-native-paper";

export const PaperThemeProvider = ({ children }: PropsWithChildren) => {
  const colorScheme = useColorScheme();

  return (
    <PaperProvider theme={colorScheme === "dark" ? DARK_THEME : LIGHT_THEME}>
      {children}
    </PaperProvider>
  );
};
