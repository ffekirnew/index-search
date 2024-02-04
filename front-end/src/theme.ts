import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
};

const theme = extendTheme({
  fonts: {
    heading: `'Lora', sans-serif`,
    body: `'Inter', sans-serif`,
  },
  config,
  colors: {
    gray: {
      50: "#fff",
      100: "#dcdcdc",
      200: "#bfbfbf",
      300: "#a3a3a3",
      400: "#888888",
      500: "#6e6e6e",
      600: "#545454",
      700: "#3a3a3a",
      800: "#202020",
      900: "#000000",
    },
    brand: {
      primary: "#8c52ff",
      secondary: "#cb6ce6",
      tertiary: "#ff66c4",
    },
  },
});

export default theme;
