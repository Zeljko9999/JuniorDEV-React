import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import stil from './App.module.css'
import { useState, useEffect } from "react";
import Pitanje from './components/Pitanje';
 
function App() {
  const [pitanja, postaviPitanja] = useState([]);
  const [trenutnoPitanjeIndex, setTrenutnoPitanjeIndex] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [pocetak, setPocetak] = useState(false);
  const [categories, setCategories] = useState([]);
  const [categoryData, setCategoryData] = useState({category:"",questionsNumber:"", difficulty:"" })

//start page - category section

  useEffect(() => {
    fetch('https://opentdb.com/api_category.php')
      .then(res => res.json())
      .then(data => {setCategories(data.trivia_categories)})
      .catch(error => {console.error('Error fetching categories:', error)});
  }, []);

  const handleQuestionsNumber = event => {
    let novi = {...categoryData}
    novi.questionsNumber = event.target.value;
    setCategoryData(novi);
  };

  const handleDifficultyChange = event => {
    let novi = {...categoryData}
    novi.difficulty = event.target.value;
    setCategoryData(novi);
  };

  const handleCategoryChange = event => {
    let novi = {...categoryData}
    novi.category = event.target.value;
    setCategoryData(novi);
  };

  
  const getResponse = () => {
    let url = " ";
    if (categoryData.questionsNumber === "") {
      url = `https://opentdb.com/api.php?amount=5&category=${categoryData.category}&difficulty=${categoryData.difficulty}`;
    } else {
      url = `https://opentdb.com/api.php?amount=${categoryData.questionsNumber}&category=${categoryData.category}&difficulty=${categoryData.difficulty}`
    }

    fetch(url)
      .then(res => res.json())
      .then(data => postaviPitanja(data.results))
      .catch((error) => console.error('Error fetching data:', error));
  }

  const handleNextQuestion = () => {
    setTrenutnoPitanjeIndex(prevIndex => prevIndex + 1);
  };

  const handleBeginClick = () => {
    getResponse();    
  }

  useEffect(() => {
    if (trenutnoPitanjeIndex >= pitanja.length) {
      setPocetak(false);
      postaviPitanja([]);
      setTrenutnoPitanjeIndex(0);
      setCorrectAnswers(0);
    } 
  }, [trenutnoPitanjeIndex]);

  useEffect(() => {
    if(pitanja.length > 0) {
      setPocetak(true);
    }
  }, [pitanja]);

  return (
    <>
    {pocetak && trenutnoPitanjeIndex < pitanja.length && (
      <div className={stil.pitanja}>
        <Pitanje
          key={trenutnoPitanjeIndex}
          question={pitanja[trenutnoPitanjeIndex].question}
          correct_answer={pitanja[trenutnoPitanjeIndex].correct_answer}
          incorrect_answers={pitanja[trenutnoPitanjeIndex].incorrect_answers}
          onNextQuestion={handleNextQuestion}
          trenutnoPitanjeIndex={trenutnoPitanjeIndex}
          ukupnoPitanja={pitanja.length}
          setCorrectAnswers={setCorrectAnswers}
          correctAnswers={correctAnswers}
        /> 
      </div>
      )}
      
    {!pocetak && (
    <div className={stil.start}>
      <label className={stil.labelaStart} htmlFor="broj">Number of Questions: </label>
      <input
        onChange={handleQuestionsNumber}
        type='number'
        min={1}
        max={20}
        value={categoryData.questionsNumber}
        id="broj"
      />
      <label className={stil.labelaStart} htmlFor="kategorija">Select a Category: </label>
      <select value={categoryData.category} onChange={handleCategoryChange} id='kategorija'>
        <option value="">Any category</option>
        {categories.map(category => (
          <option key={category.id} value={category.id}>
            {category.name}
          </option>
        ))}
      </select>
      <label className={stil.labelaStart} htmlFor="tezina">Select Difficulty: </label>
      <select value={categoryData.difficulty} onChange={handleDifficultyChange} id='tezina'>
        <option value="">Any Difficulty</option>
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>    
      </select>
      <button className={stil.startBotun}
      onClick={ handleBeginClick} >
        Započni kviz</button>   
    </div>
     )}
  
 </>
  );
}

export default App;
