
import Button from "../../components/button/Button";
import Input from "../../components/input/Input";
import "./Login.scss";

const Login = () => {
  return (
    <form className="login">
      <Input label={'імя'} />
      <Input label={'пароль'} />
      <Button>підтвердитиb</Button>
    </form>
  );
};

export default Login;
