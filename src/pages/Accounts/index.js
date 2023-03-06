import { useLoaderData, useNavigation } from "react-router-dom";

function Accounts() {
  const barev = useLoaderData();
  const navigation = useNavigation();

  // if (navigation)

  return (
    <h2>Accounts</h2>
  );
}

export default Accounts;

export const dataLoader = async () => {
  await setTimeout(() => {

  }, [4000]);

  return "Barev";
}