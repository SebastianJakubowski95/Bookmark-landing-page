import classes from "./Section_5.module.css";
import classNames from "classnames";
import Input from "./Input";
import Button from "../Button";
import { useState } from "react";

const Section_5 = () => {
  const [isInvalid, setIsInvalid] = useState(false);
  const [inputValue, setInputValue] = useState("");

  function onSubmitHandler(e) {
    e.preventDefault();
    if (inputValue.includes("@")) {
      setIsInvalid(false);
    } else {
      setIsInvalid(true);
    }
  }
  function onTypingHandler(e) {
    const newValue = e.target.value;
    setInputValue(newValue);
  }
  return (
    <div className={classes.main}>
      <div>
        <div>
          <h1>35,000+ ALREADY JOINED</h1>
          <h2>Stay up-to-date with what we’re doing</h2>
        </div>
        <div>
          <form onSubmit={onSubmitHandler} className={classes.form}>
            <div
              className={classNames(isInvalid && classes["input-wrong-div"])}>
              <Input
                isInvalid={isInvalid}
                onTyping={onTypingHandler}
                value={inputValue}
              />
              {isInvalid && <p>Whoops, make sure it’s an email</p>}
            </div>
            <Button type="contact-us" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Section_5;
