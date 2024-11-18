import "@mantine/core/styles.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MantineProvider } from "@mantine/core";

import { theme } from "./theme";
// import Vite from "./components/Vite/Vite";
import Resume from "./components/Resume/Resume";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Resume />,
  },
  {
    path: "/resume",
    element: <Resume />,
  },
]);

function App() {
  return (
    <MantineProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </MantineProvider>
  );
}

export default App;
