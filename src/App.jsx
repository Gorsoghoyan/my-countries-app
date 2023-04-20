import { Suspense, useEffect, useRef } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";
import PageLoading from "./components/ui/PageLoading/PageLoading";
import AddEditCountryModal from "./components/ui/Modals/AddEditCountryModal/AddEditCountryModal";

function App() {
  const ModalRef = useRef(null)

  useEffect(() => {
    ModalRef.current.open()
  }, [])

  return (
    // <Suspense fallback={<PageLoading />}>
    //   <RouterProvider router={router} />
    // </Suspense>
    <AddEditCountryModal ref={ModalRef} type="add" />
  );
}

export default App;
