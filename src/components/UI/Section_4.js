import classes from "./Section_4.module.css";
import FaqCell from "../FaqCell";
import Button from "../Button";
import { useState } from "react";

const faqData = [
  {
    id: 0,
    title: "What is Bookmark?",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.",
  },
  {
    id: 1,
    title: "How can I request a new browser?",
    body: "Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.",
  },
  {
    id: 2,
    title: "Is there a mobile app?",
    body: "Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex et ultricies bibendum.",
  },
  {
    id: 3,
    title: "What about other Chromium browsers?",
    body: "Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit.",
  },
];

const Section_4 = () => {
  const [openedAnswerId, setOpenedAnswerId] = useState(null);
  function onAnswerSwiftHandler(id) {
    if (openedAnswerId === id) {
      setOpenedAnswerId((prev) => null);
    } else {
      setOpenedAnswerId((prev) => id);
    }
  }
  const listOfItems = faqData.map((item, index) => (
    <FaqCell
      key={index}
      isOpen={item.id === openedAnswerId}
      answerSwift={onAnswerSwiftHandler}
      id={item.id}
      title={item.title}
      body={item.body}
    />
  ));
  return (
    <div className={classes.main}>
      <div className={classes.text}>
        <h2>Frequently Asked Questions</h2>
        <p>
          Here are some of our FAQs. If you have any other questions you’d like
          answered please feel free to email us.
        </p>
      </div>
      <ul className={classes.ul}>{listOfItems}</ul>
      <Button type="more-info" />
    </div>
  );
};
export default Section_4;
