import { DARK_THEME, LIGHT_THEME } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";
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
