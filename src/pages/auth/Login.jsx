import { Link } from "react-router-dom";
import Button from "../../components/button/Button";
import Input from "../../components/input/Input";
import "./Auth.scss";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <form  className="auth-form">
      <Input label={"email"} type="email" autoComplete="email" />

      <div className="auth-form__input-wrapper">
        <Input
          label="password"
          type={showPassword ? "text" : "password"}
          autoComplete="current-password"
        />
        <button type="button" onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </button>
      </div>
      <div className="auth-form__buttons">
        <Button>увійти</Button>
        <Link className="auth-form__link" to={"/register"}>
          Ще не маєш акаунта?
        </Link>
      </div>
    </form>
  );
};

export default Login;
