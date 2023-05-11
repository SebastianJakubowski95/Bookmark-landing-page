import classes from "./Section_3.module.css";
import chromeIcon from "../../assets/logo-chrome.svg";
import firefoxIcon from "../../assets/logo-firefox.svg";
import operaIcon from "../../assets/logo-opera.svg";
import CardExtension from "./CardExtension";

const Section_3 = () => {
  let w = window.innerWidth;
  const largeScreen = classes.large;
  const mobileScreen = classes.small;
  return (
    <div className={classes.main}>
      <div className={classes.text}>
        <h2>Download the extension</h2>
        <p>
          We’ve got more browsers in the pipeline. Please do let us know if
          you’ve got a favourite you’d like us to prioritize.
        </p>
      </div>
      <ul className={w < 768 ? mobileScreen : largeScreen}>
        <CardExtension
          icon={chromeIcon}
          title="Add to Chrome"
          para="Minimum version 62"
        />
        <CardExtension
          icon={firefoxIcon}
          title="Add to Firefox"
          para="Minimum version 55"
        />
        <CardExtension
          icon={operaIcon}
          title="Add to Opera"
          para="Minimum version 46"
        />
      </ul>
    </div>
  );
};
export default Section_3;
