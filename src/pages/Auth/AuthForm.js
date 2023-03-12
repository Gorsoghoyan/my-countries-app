import InputLabel from "../../components/form/InputLabel";
import ErrorMessage from "../../components/ui/ErrorMessage";
import Button from "../../components/ui/Button";
import Spinner from "../../components/ui/Spinner";
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