import { forwardRef } from "react";
import { countryInputs } from "../../../../configs/modals";
import { AiOutlineUpload } from "react-icons/ai";
import Modal from "../Modal";
import Button from "../../Button/Button";
import Spinner from "../../Spinner/Spinner";
import ImageDiv from "../../ImageDiv/ImageDiv";
import ErrorMessage from "../../ErrorMessage/ErrorMessage";
import FileUploadBtn from "../../FileUploadBtn/FileUploadBtn";
import useAddEditCountryModal from "./useAddEditCountryModal";
import InputLabel from "../../../form/InputLabel/InputLabel";
import defaultPhoto from "../../../../assets/images/default-backdrop.png";
import s from "./styles.module.scss";

const AddEditCountryModal = forwardRef(({ type }, ref) => {
  const {
    error,
    loading,
    perc,
    photoURL,
    ModalRef,
    countryData,
    target,
    handleChange,
    handleSubmit,
    handleFileChange
  } = useAddEditCountryModal(type, ref);

  return (
    <Modal
      ref={ModalRef}
      closeWithin
      className={s.container}
    >
      <h2>{target.title}</h2>
      <form onSubmit={handleSubmit}>
        {countryInputs.map(input => (
          <InputLabel
            key={input.id}
            id={input.id}
            type={input.type}
            name={input.name}
            variant={"modal"}
            value={
              input.special === "name"
                ? countryData.name.common
                : input.special === "capital"
                  ? countryData.capital[0]
                  : countryData[input.name] || ""
            }
            autoFocus={input.autoFocus}
            placeholder={input.placeholder}
            inpPlaceholder={input.inpPlaceholder}
            onChange={(e) => handleChange(e, input.special)}
          />
        ))}
        {photoURL && (
          <ImageDiv
            width={300}
            height={150}
            borderRadius={4}
            margin={"20px auto 0 auto"}
            image={photoURL}
            defaultImage={defaultPhoto}
          />
        )}
        <FileUploadBtn
          variant={"m"}
          disabled={perc !== null && perc < 100}
          handleFileChange={handleFileChange}
        >
          Choose a photo
          <AiOutlineUpload />
        </FileUploadBtn>
        {error && <ErrorMessage margin={"20px 0 0 0"} error={error} />}
        <Button variant={"a-r"} margin={"20px 0 0 0"}>
          {loading ? <Spinner /> : target.btnText}
        </Button>
      </form>
    </Modal>
  );
});

export default AddEditCountryModal;