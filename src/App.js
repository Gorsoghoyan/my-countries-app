import { Fragment } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";

function App() {
  return (
    <Fragment>
      <RouterProvider 
        router={router} 
        // fallbackElement={}
      />  
    </Fragment>
  );
}

export default App;
