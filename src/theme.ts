import { createTheme } from "@mantine/core";

export const theme = createTheme({
  /** Put your mantine theme override here */
  fontFamily: "Merriweather, Georgia, serif;",
  components: {
    Text: {
      styles: {
        root: {
          textAlign: "left",
        },
      },
    },
    Title: {
      styles: {
        root: {
          textAlign: "left",
        },
      },
    },
    List: {
      styles: {
        root: {
          textAlign: "left",
        },
      },
    },
  },
});
