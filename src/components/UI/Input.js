import classes from "./Input.module.css";
import icon from "../../assets/icon-error.svg";

const Input = (props) => {
  return (
    <div
      className={classes.main}
      style={props.isInvalid ? { top: "0", left: "0" } : {}}>
      <input
        className={classes.input}
        type="text"
        placeholder="Enter your email address"
        value={props.value}
        onChange={props.onTyping}
      />
      {props.isInvalid && <img src={icon} />}
    </div>
  );
};

export default Input;
