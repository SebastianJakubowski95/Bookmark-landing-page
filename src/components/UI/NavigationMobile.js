import classes from "./NavigationMobile.module.css";
import logoDefault from "../../assets/logo-bookmark-blue.svg";
import logoBurger from "../../assets/logo-bookmark-burger.svg";
import burgerIcon from "../../assets/icon-hamburger.svg";
import closeIcon from "../../assets/icon-close.svg";
import fcbIcon from "../../assets/icon-facebook.svg";
import twitterIcon from "../../assets/icon-twitter.svg";
import Button from "../Button";
import { modalActions } from "../../store/modal-slice";
import { useSelector, useDispatch } from "react-redux";
import { createPortal } from "react-dom";

const NavigationMobile = () => {
  const dispatch = useDispatch();
  const isModalOpen = useSelector((state) => state.modal.isOpen);

  const onMenuClickHandler = () => {
    dispatch(modalActions.toggle());
  };

  const modalMenu = (
    <div className={classes.modal}>
      <div className={classes.main}>
        <img src={isModalOpen ? logoBurger : logoDefault} alt="logo" />
        <button onClick={onMenuClickHandler}>
          <img src={isModalOpen ? closeIcon : burgerIcon} alt="menu" />
        </button>
      </div>
      <div className={classes["main-content"]}>
        <nav className={classes.burgerNav}>
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
        <Button type="login-burger" />
      </div>
      <div className={classes.social}>
        <button className={classes.socialIcon}>
          <img src={fcbIcon} alt="facebook icon" />
        </button>
        <button className={classes.socialIcon}>
          <img src={twitterIcon} alt="twitter icon" />
        </button>
      </div>
    </div>
  );
  const defaultNav = (
    <div className={classes.main}>
      <img src={isModalOpen ? logoBurger : logoDefault} alt="logo" />
      <button onClick={onMenuClickHandler}>
        <img src={isModalOpen ? closeIcon : burgerIcon} alt="menu" />
      </button>
    </div>
  );
  return (
    <>
      {isModalOpen
        ? createPortal(modalMenu, document.getElementById("modal"))
        : defaultNav}
    </>
  );
};

export default NavigationMobile;
