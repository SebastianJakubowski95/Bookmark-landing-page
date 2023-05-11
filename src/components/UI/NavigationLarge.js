import classes from "./NavigationLarge.module.css";
import Button from "../Button";
import logo from "../../assets/logo-bookmark-blue.svg";

const NavigationLarge = () => {
  return (
    <div className={classes.main}>
      <img src={logo} alt="logo" />
      <div className={classes.cta}>
        <nav>
          <ul className={classes.ul}>
            <li>
              <a href="#">FEATURES</a>
            </li>
            <li>
              <a href="#">PRICING</a>
            </li>
            <li>
              <a href="#">CONTACT</a>
            </li>
          </ul>
        </nav>
        <Button type="login" />
      </div>
    </div>
  );
};
export default NavigationLarge;
