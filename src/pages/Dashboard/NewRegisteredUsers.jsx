import { Link } from "react-router-dom";
import { ACCOUNTS } from "../../utils/constants";
import defaultPhoto from "../../assets/images/profile.png";
import useNewRegisteredUsers from "./useNewRegisteredUsers";
import GridItem from "../../components/ui/GridItem/GridItem";
import ImageDiv from "../../components/ui/ImageDiv/ImageDiv";
import HorizontalItem from "./HorizontalItem";
import s from "./styles.module.scss";
import ComponentLoading from "../../components/ui/ComponentLoading/ComponentLoading";
import ErrorMessage from "../../components/ui/ErrorMessage/ErrorMessage";

function NewRegisteredUsers() {
  const { error, loading, users } = useNewRegisteredUsers();

  return (
    <GridItem 
      className={s.newUsersContainer} 
      variant={"d-i-column"} 
      bg={"d-i-bg-1"}
    >
      <HorizontalItem 
        title={"New registered sub-users"}
        bgVariant={"v-1"}
        badge={`The last ${users.length} sub-users`}
        badgeBgVariant={"v-1"}
      />
      <div className={s.body}>
        <div className={s.usersWrapper}>
          {!!users.length && users.map(user => (
            <UserItem 
              key={user.id}
              name={user.displayName} 
              photoURL={user.photoURL}  
            />
          ))}
        </div>
        {((!users.length || error) && !loading) && (
          <ErrorMessage 
            variant={"d-center"} 
            error={error || "There are no sub-users"} 
          />
        )}
        {loading && (
          <ComponentLoading size={40} />
        )}
      </div>
      <hr />
      <Link to={ACCOUNTS.LINK}>View All</Link>
    </GridItem>
  );
}

function UserItem({ name, photoURL }) {
  return (
    <div className={s.userItem}>
      <ImageDiv 
        width={"100%"}
        height={"80%"}
        borderRadius={"4px 4px 0 0"}
        image={photoURL}
        defaultImage={defaultPhoto}
      />
      <p>{name}</p>
    </div>
  );
}

export default NewRegisteredUsers;