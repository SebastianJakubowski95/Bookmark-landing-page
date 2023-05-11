import classes from "./Section_2.module.css";
import CellOption from "../CellOption";
import img_0 from "../../assets/illustration-features-tab-1.svg";
import img_1 from "../../assets/illustration-features-tab-2.svg";
import img_2 from "../../assets/illustration-features-tab-3.svg";
import Button from "../Button";
import { useState } from "react";

const optionsData = [
  {
    id: 0,
    cellName: "Simple Bookmarking",
    title: "Bookmark in one click",
    body: "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
    img: img_0,
  },
  {
    id: 1,
    cellName: "Speedy Searching",
    title: "Intelligent search",
    body: "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
    img: img_1,
  },
  {
    id: 2,
    cellName: "Easy Sharing",
    title: "Share your bookmarks",
    body: " Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
    img: img_2,
  },
];

const Section_2 = () => {
  const [currentOption, setCurrentOption] = useState(0);
  let w = window.innerWidth;
  const switchOptionHandler = (option) => {
    setCurrentOption(option);
  };
  const options = optionsData.map((item, index) => (
    <li className={classes.li}>
      <CellOption
        key={index}
        text={item.cellName}
        id={item.id}
        isSelected={item.id === currentOption}
        onClick={switchOptionHandler}
      />
    </li>
  ));
  return (
    <div className={classes.main}>
      <div className={classes.text}>
        <h2>Features</h2>
        <p>
          Our aim is to make it quick and easy for you to access your favourite
          websites. Your bookmarks sync between your devices so you can access
          them on the go.
        </p>
      </div>
      <div>
        <ul className={classes.options}>{options}</ul>
      </div>
      <div>
        <div className={classes.imgDiv}>
          <img src={optionsData[currentOption].img} alt="img" />
          <div className={classes.imgBg} />
        </div>
        <div className={classes["more-info"]}>
          <h2>{optionsData[currentOption].title}</h2>
          <p>{optionsData[currentOption].body}</p>
          {w >= 768 && <Button type="more-info" />}
        </div>
      </div>
    </div>
  );
};

export default Section_2;
