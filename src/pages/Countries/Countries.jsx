import AddEditCountryModal from "../../components/ui/Modals/AddEditCountryModal/AddEditCountryModal";
import PageTopPart from "../../components/ui/PageTopPart/PageTopPart";
import CountriesList from "./CountriesList";
import { selectCurrentUser } from "../../store/slices/userSlice";
import { contains } from "../../utils/contains";
import { useSelector } from "react-redux";
import { useRef } from "react";
import s from "./styles.module.scss";

function Countries() {
  const currentUser = useSelector(selectCurrentUser);
  const permissions = currentUser.permissions || null;
  
  const AddCountryModalRef = useRef(null);

  return (
    <div className={s.container}>
      <PageTopPart 
        title={"Countries"} 
        button={contains(permissions, "add")}
        btnText={"Add country"}
        variant={"a-c"}
        onClick={() => AddCountryModalRef.current.open()}
      />
      <CountriesList permissions={permissions} />
      {contains(permissions, "add") && (
        <AddEditCountryModal ref={AddCountryModalRef} type="add" />
      )}
    </div>
  );
}

export default Countries;