import { forwardRef } from "react";
import { accountInputs, permissions } from "../../../../configs/modals";
import { AiOutlineUpload } from "react-icons/ai";
import Modal from "../Modal";
import Button from "../../Button/Button";
import Input from "../../../form/Input/Input";
import Spinner from "../../Spinner/Spinner";
import ImageDiv from "../../ImageDiv/ImageDiv";
import ErrorMessage from "../../ErrorMessage/ErrorMessage";
import useAddEditSubUserModal from "./useAddEditSubUserModal";
import FileUploadBtn from "../../FileUploadBtn/FileUploadBtn";
import InputLabel from "../../../form/InputLabel/InputLabel";
import defaultPhoto from "../../../../assets/images/default-backdrop.png";
import s from "./styles.module.scss";

const AddEditSubUserModal = forwardRef(({ type }, ref) => {
  const {
    error,
    loading,
    perc,
    photoURL,
    ModalRef,
    userData,
    target,
    handleChange,
    handleSubmit,
    handleFileChange,
    onChangePermissions
  } = useAddEditSubUserModal(type, ref);

  return (
    <Modal
      ref={ModalRef}
      closeWithin
      className={s.container}
    >
      <h2>{target.title}</h2>
      <form onSubmit={handleSubmit}>
        {accountInputs.map(input => (
          <InputLabel
            key={input.id}
            id={input.id}
            type={input.type}
            name={input.name}
            variant={"modal"}
            value={userData[input.name]}
            placeholder={input.placeholder}
            inpPlaceholder={input.inpPlaceholder}
            onChange={handleChange}
          />
        ))}
        <h3>Permissions</h3>
        {permissions.map(permission => (
          <PermissionItem  
            key={permission.id}
            type={permission.type}
            text={permission.text}
            name={permission.name}
            permissions={userData.permissions}
            onChange={onChangePermissions}
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

function PermissionItem({ type, permissions, name, text, onChange }) {
  return (
    <label className={s.permissionItem}> 
      <Input 
        type={type} 
        checked={permissions.indexOf(name) !== -1}   
        onChange={(e) => onChange(e, name)}
      />
      <span>{text}</span>
    </label>
  );
}

export default AddEditSubUserModal;