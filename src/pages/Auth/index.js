import {
  ADMIN_APP,
  BOLD_TEXT,
  FOOT_TEXT,
  LEFT_PART,
  REGISTER_TEXT,
  FORGOT_PASSWORD_LINK,
  REGISTER_TITLE,
  FORGOT_PASSWORD,
} from "../../utils/constants";
import { login, register } from "./config";
import { FiLogIn } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Fragment } from "react";
import AuthForm from "./AuthForm";
import Logo from "../../components/ui/Logo";
import s from "./styles.module.scss";

function Auth({ type }) {
  const current = type === "login" ? login : register;

  return (
    <main className={s.container}>
      <div className={s.left} style={current.styles}>
        <div className={s.description}>
          <h4><b>{BOLD_TEXT}</b> {ADMIN_APP}</h4>
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
            <h2 className={s.registerTitle}>{REGISTER_TITLE}</h2>
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
            {FORGOT_PASSWORD_LINK}
          </Link>
        )}
        {current.linkText} <hr />
        <p className={s.footText}>{FOOT_TEXT}</p>
      </div>
    </main>
  );
}

export default Auth;