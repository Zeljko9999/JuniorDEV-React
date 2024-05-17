import {memo} from 'react'
import { useState, useEffect  } from 'react';
import stil from './Pitanje.module.css'

const PitanjeMemo = memo(Pitanje)

function shuffleArray(array) {
    // Fisher-Yates shuffle algorithm
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    } 
    return array;
  }
 

  function Pitanje(props) {
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [showResult, setShowResult] = useState(false);
    const [answers, setAnswers] = useState([]);
    const [Indexes, setIndex] = useState({correctIndex: 100, selectedIndex: null});
  
    useEffect(() => {
      const allAnswers = [...props.incorrect_answers, props.correct_answer];
      const shuffledAnswers = shuffleArray(allAnswers);
      setAnswers(shuffledAnswers);
    }, [props.correct_answer, props.incorrect_answers]);
  
    //click akcija
    const handleAnswerClick = (event, answer, index) => {
      setSelectedAnswer(answer);
      setSelectedIndex(index);
      if (answer == props.correct_answer) { 
        let novi = {...Indexes}
        novi.correctIndex = index;
        setIndex(novi);
      }
      const button = event.target;
      button.classList.add(stil.clicked);
      setShowResult(true);
      setTimeout(() => {
         props.onNextQuestion();
      }, 3000);

    };

    const setSelectedIndex = index  => {
      let novi = {...Indexes}
      novi.selectedIndex = index;
      setIndex(novi);
    }
  
    const isCorrect = () => {
      return selectedAnswer === props.correct_answer;
    };

    useEffect(() => {
      if (isCorrect()) {
        props.setCorrectAnswers(value => value + 1 );
      } 
    }, [selectedAnswer]);
  
    return (
      <>
      <div className={stil.containerOdgovori}>
        <div className={stil.naslovPitanje}>
          <h1 >Pitanje {props.trenutnoPitanjeIndex + 1}:</h1>
          <h3 dangerouslySetInnerHTML={{ __html: props.question }} />
        </div>
        <div className={stil.odgovori}>
          {answers.map((answer, index) => (
            <div className={stil.odgovor}>
              <button
                key={index}
                onClick={(event) => handleAnswerClick(event, answer, index)}
                disabled={showResult}
                className={stil.odgovorButton}
                dangerouslySetInnerHTML={{ __html: answer }}
              />
            {(Indexes.correctIndex == index) && <span className={stil.zelenakvacica}>&#10004;</span> }
            {(Indexes.correctIndex != index && Indexes.selectedIndex == index) && <span className={stil.crveniiks}>&#10006;</span> }
            </div>
          ))}
        </div>
        {showResult && (<p>{isCorrect() ? 'Correct!' : `Correct answer is: ${props.correct_answer}` }</p> )}
      </div>
      <div className={stil.stats}>
      <h2 >Pitanje: </h2>
      <h2 >{props.trenutnoPitanjeIndex + 1}/{props.ukupnoPitanja}</h2>
      <h2 >Rezultat: </h2>
      <h2> {props.correctAnswers} </h2>
      </div>
      </>
    );
  }
 
export default PitanjeMemo