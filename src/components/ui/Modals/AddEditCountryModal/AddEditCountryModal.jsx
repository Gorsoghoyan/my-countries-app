import { forwardRef } from "react";
import { countryInputs } from "../../../../configs/modals";
import useAddEditCountryModal from "./useAddEditCountryModal";
import InputLabel from "../../../form/InputLabel/InputLabel";
import Button from "../../Button/Button";
import Modal from "../Modal";
import s from "./styles.module.scss";

const AddEditCountryModal = forwardRef(({ type }, ref) => {
  const { 
    ModalRef, 
    handleChange, 
    handleSubmit 
  } = useAddEditCountryModal(type, ref);

  return (
    <Modal  
      ref={ModalRef} 
      closeWithin
      className={s.container} 
    >
      <h2>Add country</h2>
      <form onSubmit={handleSubmit}>
        {countryInputs.map(input => (
          <InputLabel 
            key={input.id}
            id={input.id}
            type={input.type}
            name={input.name}
            variant={"countryModal"}
            placeholder={input.placeholder}
            inpPlaceholder={input.inpPlaceholder}
            onChange={(e) => handleChange(e, input.special)}
          />
        ))}
        <Button variant={"a-r"} margin={"20px 0 0 0"}>
          Add
        </Button>
      </form>
    </Modal>
  );
});

export default AddEditCountryModal;