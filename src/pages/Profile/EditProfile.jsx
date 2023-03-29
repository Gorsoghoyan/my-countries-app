import Input from "../../components/form/Input/Input";
import Button from "../../components/ui/Button/Button";
import ErrorMessage from "../../components/ui/ErrorMessage/ErrorMessage";
import Spinner from "../../components/ui/Spinner/Spinner";
import useEditProfile from "./useEditProfile";
import { personalInfoInputs, authInfoInputs } from "../../configs/profile";
import s from "./styles.module.scss";

function EditProfile() {
  const { 
    error, 
    loading, 
    userData, 
    handleReset,
    handleChange, 
    handleSubmit
  } = useEditProfile();

  return (
    <form onSubmit={handleSubmit} className={s.form}>
      <h2>Edit profile</h2>
      {error && <ErrorMessage error={error} textAlign={"left"} />}
      <hr />
        <h3>Personal</h3>
      <hr className={s.hrBottom} />
      {personalInfoInputs.map(input => (
        <Input 
          variant={"p"}
          key={input.id}
          type={input.type}
          name={input.name}
          placeholder={input.placeholder}
          required={true}
          value={userData[input.name]}
          onChange={handleChange}
        />
      ))}
      <hr className={s.hrTop} />
        <h3>Auth</h3>
      <hr className={s.hrBottom} />
      {authInfoInputs.map(input => (
        <Input
          variant={"p"} 
          key={input.id}
          type={input.type}
          name={input.name}
          placeholder={input.placeholder}
          required={true}
          value={userData[input.name]}
          onChange={handleChange}
        />
      ))}
      <hr className={s.hrTop} />
      <Button variant={"p-s"}>
        {loading ? <Spinner size={18} /> : "Update"}
      </Button>
      <Button 
        type={"reset"} 
        variant={"p-c"} 
        onClick={handleReset}
      >Cancel</Button>  
      <hr />
    </form>
  );
}

export default EditProfile;