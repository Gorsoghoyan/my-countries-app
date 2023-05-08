import { FOOT_TEXT, REGISTER_TEXT, LEFT_PART, FORGOT_PASSWORD } from "../../utils/constants";
import { login, register } from "../../configs/auth";
import { FiLogIn } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Fragment } from "react";
import Logo from "../../components/ui/Logo/Logo";
import AuthForm from "./AuthForm";
import s from "./styles.module.scss";

function Auth({ type }) {
  const current = type === "login" ? login : register;

  return (
    <main className={s.container}>
      <div className={s.left} style={current.styles}>
        <div className={s.description}>
          <h4><b>Countries</b> Admin App</h4>
          <p>{current.text}</p>
        </div>
      </div>
      <div className={s.right}>
        {type === "login" ? (
          <div className={s.wrapper}>
            <div className={s.leftPart}>
              <Logo svgFontSize={32} nameFontSize={28} />
              <p>{LEFT_PART}</p>
            </div>
            <FiLogIn className={s.loginIcon} />
          </div>
        ) : (
          <Fragment>
            <h2 className={s.registerTitle}>Sign Up</h2>
            <p className={s.registerText}>{REGISTER_TEXT}</p>
          </Fragment>
        )}
        <AuthForm
          type={type}
          inputs={current.inputs}
          initialData={current.initialData}
          btnText={current.btnText}
          btnVariant={current.btnVariant}
        />
        {type === "login" && (
          <Link to={FORGOT_PASSWORD.LINK} className={s.forgot}>
            Forgot password?
          </Link>
        )}
        <p className={s.linkText}>{current.linkContent}</p>
        <hr />
        <p className={s.footText}>{FOOT_TEXT}</p>
      </div>
    </main>
  );
}

export default Auth;