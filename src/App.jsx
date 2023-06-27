import { useState, useEffect } from "react";
import First from "./components/First.jsx";
import Second from "./components/Second.jsx";
import Confetti from "react-confetti";
import useWindowSize from "react-use/lib/useWindowSize";
import "./App.css";

function App() {
  const [hasStarted, setHasStarted] = useState(false);
  const [questionStore, setQuestionStore] = useState([]);
  const [triggerConfetti, setTriggerConfetti] = useState(false);

  function startQuiz() {
    setHasStarted(true);
  }

  useEffect(() => {
    function createQuestionArray(data) {
      let tempArr = [];

      for (let i = 0; i < data.results.length; i++) {
        let { question, incorrect_answers, correct_answer } = data.results[i];

        tempArr.push({
          question: question,
          incorrectAnswer: incorrect_answers,
          correctAnswer: correct_answer,
        });
      }

      setQuestionStore(tempArr);
    }

    async function fetchData() {
      let res = await fetch(
        "https://opentdb.com/api.php?amount=5&category=15&difficulty=easy&type=multiple"
      );
      let data = await res.json();
      createQuestionArray(data);
    }

    fetchData();
  }, []);

  function trigger() {
    setTriggerConfetti(true);
  }

  const { width, height } = useWindowSize();

  return (
    <div className="app-div">
      {triggerConfetti && <Confetti width={width} height={height} />}
      {hasStarted ? (
        <Second trigger={trigger} questionStore={questionStore} />
      ) : (
        <First onClick={startQuiz} />
      )}
    </div>
  );
}

export default App;
