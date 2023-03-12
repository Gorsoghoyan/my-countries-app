import { useLoaderData, useNavigation } from "react-router-dom";
import { db } from "../../lib/firebase";

function Accounts() {
  const barev = useLoaderData();
  const navigation = useNavigation();

  // if (navigation)

  return (
    <h2>Accounts</h2>
  );
}

export default Accounts;

export const loader = async () => {
  try {
  } catch {

  }
}

export const action = async () => {

}