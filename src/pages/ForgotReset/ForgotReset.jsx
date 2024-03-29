import { Fragment } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { LOGIN } from "../../utils/constants";
import useForgotReset from "./useForgotReset";
import Input from "../../components/form/Input/Input";
import Button from "../../components/ui/Button/Button";
import Spinner from "../../components/ui/Spinner/Spinner";
import ImageDiv from "../../components/ui/ImageDiv/ImageDiv";
import ErrorMessage from "../../components/ui/ErrorMessage/ErrorMessage";
import Toast from "../../components/ui/Toast/Toast";
import v from "../../assets/sass/_variables.scss";
import s from "./styles.module.scss";

function ForgotReset({ type }) {
  const { current, inputRef, loading, error, handleSubmit } = useForgotReset(type);

  return (
    <Fragment>
      <main className={s.container}>
        <form className={s.form} onSubmit={handleSubmit}>
          <ImageDiv width={200} height={200} image={current.image} />
          <h2>{current.title}</h2>
          <p className={s.text}>{current.text}</p>
          <Input
            variant="r-f"
            type={current.input.type}
            ref={inputRef}
            required={true}
            autoFocus={true}
            defaultValue={inputRef.current?.value || ""}
            placeholder={current.input.placeholder}
          />
          {error && <ErrorMessage error={error} margin="10px 0 0 0" />}
          <Button 
            variant="a-r" 
            background={v.forgotResetBlue} 
            disabled={loading}
          >
            {loading ? <Spinner /> : current.button.text}
          </Button>
          <Link to={LOGIN.LINK} className={s.loginLink}>
            <IoIosArrowBack />Back to login
          </Link>
        </form>
      </main>
      <Toast type="success" />
    </Fragment>
  );
}

export default ForgotReset;