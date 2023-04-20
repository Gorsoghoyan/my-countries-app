import useAddEditCountryModal from "./useAddEditCountryModal";
import InputLabel from "../../../form/InputLabel/InputLabel";
import Modal from "../Modal";
import { forwardRef } from "react";
import s from "./styles.module.scss";
import { countryInputs } from "../../../../configs/modals";

const AddEditCountryModal = forwardRef(({ type }, ref) => {
  const { ModalRef } = useAddEditCountryModal(type, ref);

  return (
    <Modal  
      ref={ModalRef} 
      closeWithin
      className={s.container} 
    >
      <h2>Add Country</h2>
      <form>
        {countryInputs.map(input => (
          <InputLabel 
            key={input.id}
            id={input.id}
            type={input.type}
            name={input.name}
            variant={"countryModal"}
            placeholder={input.placeholder}
            inpPlaceholder={input.inpPlaceholder}
          />
        ))}
      </form>
    </Modal>
  );
});

export default AddEditCountryModal;