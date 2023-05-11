import classes from "./CardExtension.module.css";
import dotsIcon from "../../assets/bg-dots.svg";
import Button from "../Button";

const CardExtension = (props) => {
  return (
    <li className={classes.main}>
      <img src={props.icon} alt="browser logo" />
      <div className={classes.text}>
        <h3>{props.title}</h3>
        <p>{props.para}</p>
      </div>
      <img className={classes.dots} src={dotsIcon} alt="pattern" />
      <Button type="card-extension" />
    </li>
  );
};

export default CardExtension;
