import "@mantine/core/styles.css";
import { Provider as JotaiProvider } from "jotai";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MantineProvider } from "@mantine/core";

import { theme } from "./theme";
import { ResumeContainer } from "./components/Resume/ResumeContainer";

import "./print.css";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <ResumeContainer />,
  },
  {
    path: "/resume",
    element: <ResumeContainer />,
  },
]);

function App() {
  return (
    <MantineProvider theme={theme}>
      <JotaiProvider>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </JotaiProvider>
    </MantineProvider>
  );
}

export default App;
