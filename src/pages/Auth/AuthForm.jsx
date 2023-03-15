import InputLabel from "../../components/form/InputLabel/InputLabel";
import ErrorMessage from "../../components/ui/ErrorMessage/ErrorMessage";
import Button from "../../components/ui/Button/Button";
import Spinner from "../../components/ui/Spinner/Spinner";
import useAuthForm from "./useAuthForm";

function AuthForm({ type, inputs, initialData, btnText, btnVariant }) {
  const { 
    error, 
    loading, 
    userData, 
    handleChange, 
    handleSubmit 
  } = useAuthForm(type, initialData);

  return (
    <form onSubmit={handleSubmit}>
      {error && <ErrorMessage error={error} />}
      {inputs.map(input => (
        <InputLabel 
          key={input.id}
          id={input.id}
          type={input.type}
          name={input.name}
          value={userData[input.name] || ""}
          placeholder={input.placeholder}
          autoFocus={input.autoFocus}
          onChange={handleChange}
        />
      ))}
      <Button variant={btnVariant} disabled={loading}>
        {loading ? <Spinner /> : btnText}
      </Button>
    </form>
  );
}

export default AuthForm;