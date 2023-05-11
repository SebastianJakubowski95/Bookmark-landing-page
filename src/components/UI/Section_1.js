import classes from "./Section_1.module.css";
import screenImg from "../../assets/illustration-hero.svg";
import Button from "../Button";

const Section_1 = () => {
  return (
    <div className={classes.main}>
      <div className={classes["hero-text"]}>
        <h1>A Simple Bookmark Manager</h1>
        <p>
          A clean and simple interface to organize your favourite websites. Open
          a new browser tab and see your sites load instantly. Try it for free.
        </p>
        <div className={classes.buttons}>
          <Button type="hero-full" />
          <Button type="hero-outline" />
        </div>
      </div>
      <div className={classes["image-div"]}>
        <img src={screenImg} alt="hero image" />
        <div />
      </div>
    </div>
  );
};

export default Section_1;
