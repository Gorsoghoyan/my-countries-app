import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

import { Fragment } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { BACK_TO_LOGIN, LOGIN } from "../../utils/constants";

import ImageDiv from "../../components/ui/ImageDiv";
import Spinner from "../../components/ui/Spinner";
import useForgotReset from "./useForgotReset";
import Input from "../../components/form/Input";
import Button from "../../components/ui/Button";
import ErrorMessage from "../../components/ui/ErrorMessage";

import v from "../../assets/sass/_variables.scss";
import s from "./styles.module.scss";

function ForgotResetPassword({ type }) {
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
            <IoIosArrowBack />
            {BACK_TO_LOGIN}
          </Link>
        </form>
      </main>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        limit={1}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </Fragment>
  );
}

export default ForgotResetPassword;