import { Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";
import PageLoading from "./components/ui/PageLoading/PageLoading";

export default function App() {
  return (
    <Suspense fallback={<PageLoading />}>
      <RouterProvider router={router} /> 
    </Suspense>
  );
}