import Quiz from './Quiz.jsx'
import { nanoid } from 'nanoid'
import './styles/Second.css'
import { useState } from "react"

export default function Second(props) {

    let [correctAnswersSelected,setCorrectAnswersSelected] = useState(0)
    
    let [correctionMode, setCorrectionMode] = useState(false)
    let [answersArray, setAnswersArray] = useState(() => {

        return (props.questionStore).map(obj => {

            let {incorrectAnswer, correctAnswer, question} = obj 

            let options = incorrectAnswer
            options.push(correctAnswer)
            options = shuffle(options)

            return {
                question: question,
                options: options,
                correctOption: correctAnswer,
                clickedOption: "",
                id: nanoid()
            }
        })

        function shuffle(array) {
            let currentIndex = array.length, randomIndex;
            while (currentIndex != 0) {
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex--;
                [array[currentIndex], array[randomIndex]] = [
                    array[randomIndex], array[currentIndex]];
            }
            return array;
        }
    })

    function handleClick(id, clickedOption) {

        setAnswersArray(prevValue => {
            return prevValue.map(obj => {
                if (id === obj.id) {
                    return {
                        ...obj,
                        clickedOption: clickedOption
                    }
                } else {
                    return obj
                }
            })
        })

    }

    function checkAnswers(){
        for(let  i = 0; i < answersArray.length; i++){
            if(answersArray[i].correctOption === answersArray[i].clickedOption){
                setCorrectAnswersSelected(preValue => preValue + 1)
            }
        }
        setCorrectionMode(true)
        props.trigger()
    }


    let allQuizes = answersArray.map(ele => {
        let { question, options, correctOption, clickedOption, id } = ele

        return (
            <Quiz
                question={question}
                answerArray={options}
                correctOption={correctOption}
                clickedOption={clickedOption}
                isClicked={handleClick}
                correctionMode = {correctionMode}
                key={id}
                id={id} />)
    })


    return (
        <section className="quizes-container">
            {allQuizes}
            <div className="cta">
                {correctionMode && <p>{`You scored ${correctAnswersSelected}/5 correct answers`}</p>}
                <button 
                className="check-answer" 
                onClick={checkAnswers} 
                disabled={correctionMode}>{correctionMode ? "🎉" : "Check answer"}</button>
            </div>
        </section>
    )
}