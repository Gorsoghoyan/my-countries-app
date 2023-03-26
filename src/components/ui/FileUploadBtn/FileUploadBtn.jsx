import Input from "../../form/Input/Input";
import s from "./styles.module.scss";
import c from "classnames";

function FileUploadBtn({ handleFileChange, children, variant, disabled }) {
  return (
    <label 
      className={c(s.fileUpload, s[variant])}
      style={{ cursor: disabled ? "wait" : "pointer" }}
    >
      <Input
        type="file"
        disabled={disabled}
        onChange={(e) => handleFileChange(e.target.files[0])}
      />
      {children}
    </label>
  );
}

export default FileUploadBtn;