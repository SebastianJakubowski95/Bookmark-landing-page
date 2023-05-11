import classes from "./CellOption.module.css";

const CellOption = (props) => {
  function onClickHandler() {
    props.onClick(props.id);
  }
  const selected = `${classes.cell} ${classes.selected}`;
  const notSelected = `${classes.cell}`;
  return (
    <button
      className={props.isSelected ? selected : notSelected}
      onClick={onClickHandler}>
      {props.text}
    </button>
  );
};

export default CellOption;
