import AddEditCountryModal from "../../components/ui/Modals/AddEditCountryModal/AddEditCountryModal";
import PageTopPart from "../../components/ui/PageTopPart/PageTopPart";
import CountriesList from "./CountriesList";
import { useRef } from "react";
import s from "./styles.module.scss";

function Countries() {
  const AddCountryModalRef = useRef(null);

  return (
    <div className={s.container}>
      <PageTopPart 
        title={"Countries"} 
        button={true}
        btnText={"Add country"}
        variant={"a-c"}
        onClick={() => AddCountryModalRef.current.open()}
      />
      <CountriesList />
      <AddEditCountryModal ref={AddCountryModalRef} type="add" />
    </div>
  );
}

export default Countries;