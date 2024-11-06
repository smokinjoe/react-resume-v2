import { createTheme } from "@mantine/core";

export const theme = createTheme({
  /** Put your mantine theme override here */
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
  },
});
