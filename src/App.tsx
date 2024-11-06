import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Vite from "./components/Vite/Vite";
import Resume from "./components/Resume/Resume";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Vite />,
  },
  {
    path: "/resume",
    element: <Resume />,
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
