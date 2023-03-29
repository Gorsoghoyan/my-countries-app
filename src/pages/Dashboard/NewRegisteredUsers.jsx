import { Link } from "react-router-dom";
import { ACCOUNTS } from "../../utils/constants";
import useNewRegisteredUsers from "./useNewRegisteredUsers";
import GridItem from "../../components/ui/GridItem/GridItem";
import HorizontalItem from "./HorizontalItem";
import s from "./styles.module.scss";

function NewRegisteredUsers() {
  const { error, loading, badgeText, users } = useNewRegisteredUsers();

  return (
    <GridItem 
      className={s.newUsersContainer} 
      variant={"d-i-column"} 
      bg={"d-i-bg-1"}
    >
      <HorizontalItem 
        title={"New registered sub-users"}
        bgVariant={"v-1"}
        badge={badgeText}
        badgeBgVariant={"v-1"}
      />
      <div className={s.wrapper}>
        {users.map(user => (
          <p key={user.id}>{user.displayName}</p>
        ))}
      </div>
      <Link to={ACCOUNTS.LINK}>View All</Link>
    </GridItem>
  );
}

export default NewRegisteredUsers;