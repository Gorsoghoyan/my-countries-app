import { useEffect } from "react";
import { useRouteError } from "react-router-dom";

function Error() {
  const error = useRouteError();

  useEffect(() => {
    console.log(error.data)
  }, [error]);

  return (
    <h2>Error</h2>
  );
}

export default Error;