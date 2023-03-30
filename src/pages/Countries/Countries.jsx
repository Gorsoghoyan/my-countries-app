import { useState } from "react";
import Modal from "../../components/ui/Modals/Modal";
import PageTopPart from "../../components/ui/PageTopPart/PageTopPart";
import CountriesList from "./CountriesList";
import s from "./styles.module.scss";

function Countries() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className={s.container}>
      <PageTopPart 
        title={"Countries"} 
        button={true}
        btnText={"Add country"}
        variant={"a-c"}
        onClick={() => setShowModal(true)}
      />
      <CountriesList />
      <Modal 
        show={showModal}
        onClose={() => setShowModal(false)}
      >
        <h2>Add country</h2>
        <p>nanannanannanna</p>
      </Modal>
    </div>
  );
}

export default Countries;