import "./Input.scss";

const Input = ({ label, ...props }) => {
  return (
    <div className="input">
      <label>{label}</label>
      <input {...props} />
    </div>
  );
};

export default Input;
