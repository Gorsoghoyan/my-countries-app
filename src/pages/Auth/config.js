import { Link } from "react-router-dom";
import loginImage from "../../assets/images/loginImage.jpg"
import registerImage from "../../assets/images/registerImage.jpg"
import { LOGIN, REGISTER } from "../../utils/constants";
import s from "./styles.module.scss";

export const register = {
  text: "As a Countries Admin app administrator, you use the Countries Admin console to manage your organization’s account, such as add new users, manage security settings, and turn on the services you want your team to access.",
  linkContent: `Already a member? Click ${<Link to={LOGIN.LINK}>here</Link>} to login.`,
  styles: {
    backgroundImage: `url(${registerImage})`,
    backgroundPosition: "50%",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
  initialData: {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  },
  btnText: "Sign up",
  btnVariant: "a-r",
  inputs: [
    {
      id: "input_1212",
      type: "text",
      name: "firstName",
      placeholder: "First name",
      autoFocus: true,
    },
    {
      id: "input_121232e",
      type: "text",
      name: "lastName",
      placeholder: "Last name",
    },
    {
      id: "input_1we23",
      type: "email",
      name: "email",
      placeholder: "Email address",
    },
    {
      id: "input_12asd2",
      type: "password",
      name: "password",
      placeholder: "Password",
    },
  ],
};

export const login = {
  text: "Download the Countries Admin app for iPhone®, iPad®, and Android™. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  linkContent: `Not a member yet? Click ${<Link to={REGISTER.LINK}>here</Link>} to register.`,
  styles: {
    backgroundImage: `url(${loginImage})`,
    backgroundPosition: "50%",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
  initialData: {
    email: "",
    password: "",
  },
  btnText: "Sign in",
  btnVariant: "a-l",
  inputs: [
    {
      id: "aosjdo002",
      type: "email",
      name: "email",
      placeholder: "Email Adress",
      autoFocus: true,
    },
    {
      id: "asdasd9je",
      type: "password",
      name: "password",
      placeholder: "Password",
    },
  ],
};
