import { useLoaderData, useNavigation } from "react-router-dom";
import { db } from "../../lib/firebase";

function Accounts() {
  const barev = useLoaderData();
  const navigation = useNavigation();


  return (
    <h2>Accounts</h2>
  );
}

export default Accounts;