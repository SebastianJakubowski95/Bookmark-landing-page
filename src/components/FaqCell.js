import classes from "./FaqCell.module.css";
import classNames from "classnames";
import arrowBlue from "../assets/icon-arrow-blue.svg";
import arrowRed from "../assets/icon-arrow-red.svg";
import { useRef } from "react";

const FaqCell = (props) => {
  function onClickHandler() {
    props.answerSwift(props.id);
  }
  const contentRef = useRef();

  return (
    <li style={{ width: "100%" }}>
      <button onClick={onClickHandler} className={classes.li}>
        <div
          ref={contentRef}
          className={classNames(classes.content)}
          style={
            props.isOpen
              ? { height: contentRef.current.scrollHeight + "px" }
              : {}
          }>
          <h3>{props.title}</h3>
          <p>{props.body}</p>
        </div>
        <img
          style={{ paddingTop: "6px" }}
          src={props.isOpen ? arrowRed : arrowBlue}
          className={classNames(
            classes.arrow,
            props.isOpen && classes.animation
          )}
          alt="close / open answer"
        />
      </button>
    </li>
  );
};

export default FaqCell;
