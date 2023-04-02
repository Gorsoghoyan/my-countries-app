import { forwardRef } from "react";
import { AiOutlineUpload } from "react-icons/ai";
import { countryInputs } from "../../../../configs/modals";
import defaultPhoto from "../../../../assets/images/default-backdrop.png";
import useAddEditCountryModal from "./useAddEditCountryModal";
import FileUploadBtn from "../../FileUploadBtn/FileUploadBtn";
import Input from "../../../form/Input/Input";
import Button from "../../Button/Button";
import ImageDiv from "../../ImageDiv/ImageDiv";
import Modal from "../Modal";
import s from "./styles.module.scss";

const AddEditCountryModal = forwardRef(({ type, editIdRef }, ref) => {
  const { 
    error,
    loading,
    perc,
    photoURL,
    target,
    data, 
    handleFileChange,
    handleInputChange,
    handleSubmit
  } = useAddEditCountryModal(type, editIdRef, ref);

  return (
    <Modal className={s.modal} ref={ref} closeWithin>
      <h2>{target.title}</h2>
      <form onSubmit={handleSubmit}>
        {countryInputs.map(input => (
          <Input
            key={input.id}
            required
            variant={"r-f"}
            type={input.type}
            name={input.name}
            placeholder={input.placeholder}
            value={input.special ? data.name.common : data[input.name] || ""}
            onChange={(e) => handleInputChange(e, input.special)}
          />
        ))}
        {(photoURL || data.flags?.png) && (
          <ImageDiv 
            width={220} 
            height={150} 
            borderRadius={4}
            margin={"10px 0 0 0"}
            image={photoURL || data.flags?.png} 
            defaultImage={defaultPhoto}
          />
        )}
        <FileUploadBtn 
          variant={"modal"}
          disabled={perc !== null && perc < 100}
          handleFileChange={handleFileChange} 
        >
          Image <AiOutlineUpload />
        </FileUploadBtn>
        <Button 
          variant={"modal"}
          disabled={perc !== null && perc < 100} 
        >
          {target.btnText}
        </Button>
      </form>
    </Modal>
  );
});

export default AddEditCountryModal;