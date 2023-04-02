import { useSelector } from "react-redux";
import { Navigate  } from "react-router-dom";
import { selectCurrentUser } from "../../store/slices/userSlice";
import { DASHBOARD } from "../../utils/constants";
import PageTopPart from "../../components/ui/PageTopPart/PageTopPart";
import AccountsList from "./AccountsList";
import s from "./styles.module.scss";

function Accounts() {
  const currentUser = useSelector(selectCurrentUser);

  if (currentUser && currentUser.permissions) {
    return <Navigate to={DASHBOARD.LINK} />
  }

  return (
    <div className={s.container}>
      <PageTopPart title={"Accounts"} />
      <AccountsList />
    </div>
  );
}

export default Accounts;