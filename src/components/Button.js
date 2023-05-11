import classes from "./Button.module.css";
// type: login, login-burger, hero-full, hero-outline, more-info, card-extension, contact-us
const Button = (props) => {
  const loginClasses = `${classes.btn} ${classes.login} `;
  const loginBurgerClasses = `${classes.btn} ${classes["login-burger"]} `;
  const heroFullClasses = `${classes.btn} ${classes.hero} ${classes["hero-full"]} `;
  const heroOutlineClasses = `${classes.btn} ${classes.hero} ${classes["hero-outline"]} `;
  const moreInfoClasses = `${classes.btn} ${classes["more-info"]} `;
  const cardExtensionClasses = `${classes.btn} ${classes["card-extension"]} `;
  const contactUsClasses = `${classes.btn} ${classes["contact-us"]} `;
  switch (props.type) {
    case "login":
      return <button className={loginClasses}>LOGIN</button>;
    case "login-burger":
      return <button className={loginBurgerClasses}>LOGIN</button>;
    case "hero-full":
      return <button className={heroFullClasses}>Get it on Chrome</button>;
    case "hero-outline":
      return <button className={heroOutlineClasses}>Get it on Firefox</button>;
    case "more-info":
      return <button className={moreInfoClasses}>More info</button>;
    case "card-extension":
      return (
        <button className={cardExtensionClasses}>
          Add & Install Extension
        </button>
      );
    case "contact-us":
      return <button className={contactUsClasses}>Contact us</button>;
  }
};
export default Button;
