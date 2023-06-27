import he from "he";
import "./styles/Quiz.css";
import { nanoid } from "nanoid";

export default function Quiz(props) {
  let answers = props.answerArray.map((ele) => {
    let id = nanoid();

    let style = getStyle();

    function getStyle() {
      if (!props.correctionMode) {
        if (props.clickedOption === ele) {
          return { backgroundColor: "#1b1b1b" };
        } else return {};
      } else {
        if (
          props.clickedOption === ele &&
          props.clickedOption !== props.correctOption
        ) {
          return { backgroundColor: "#FF1B1C", color: "black" };
        } else if (
          props.clickedOption === ele &&
          props.clickedOption === props.correctOption
        ) {
          return { backgroundColor: "#28FD7F", color: "black" };
        }
      }
    }

    return (
      <div
        key={id}
        style={style}
        className="answer"
        onClick={() => props.isClicked(props.id, ele)}
      >
        <p>{he.decode(ele)}</p>
      </div>
    );
  });

  return (
    <section className="quiz">
      <div className="question">{he.decode(props.question)}</div>
      <div className="answers-container">{answers}</div>
    </section>
  );
}
