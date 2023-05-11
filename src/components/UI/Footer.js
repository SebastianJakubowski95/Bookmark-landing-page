import classes from "./Footer.module.css";
import fcbIcon from "../../assets/icon-facebook.svg";
import twitterIcon from "../../assets/icon-twitter.svg";
import logo from "../../assets/logo-bookmark-white.svg";

const Footer = () => {
  return (
    <footer>
      <div>
        <img src={logo} alt="logo" />
        <nav>
          <ul>
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
      </div>
      <div>
        <button className={classes.social}>
          <img src={fcbIcon} alt="fcb" />
        </button>
        <button className={classes.social}>
          <img src={twitterIcon} alt="twitter" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
