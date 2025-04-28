import { MD3DarkTheme, MD3LightTheme, MD3Theme } from "react-native-paper";
import {
  DARK_COLORS,
  LIGHT_COLORS,
  NAVIGATION_DARK_COLORS,
  NAVIGATION_LIGHT_COLORS,
} from "./colors";
import { DarkTheme, DefaultTheme, Theme } from "@react-navigation/native";

export const DARK_THEME: MD3Theme = {
  ...MD3DarkTheme,
  colors: {
    ...MD3DarkTheme.colors,
    ...DARK_COLORS,
  },
};

export const LIGHT_THEME: MD3Theme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    ...LIGHT_COLORS,
  },
};

export const NAVIGATION_LIGHT_THEME: Theme = {
  ...DefaultTheme,
  colors: NAVIGATION_LIGHT_COLORS,
};

export const NAVIGATION_DARK_THEME: Theme = {
  ...DarkTheme,
  colors: NAVIGATION_DARK_COLORS,
};
