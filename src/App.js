
import './App.css';
import React,{useState,useMemo, useEffect} from 'react'

import Quiz from './components/Quiz';
import Timer from './components/Timer';
import Start from './components/Start';
import {data} from './data'

function App() {
      const [username, setUsername] = useState(null) 
      const  [questionNumber, setQuestionNumber] = useState(1)
      const  [setTimeOut] = useState(false)
      const  [stop, setStop] = useState(false)
      const  [earnedMoney, setEarnedMoney] = useState("Rs 0")


      const moneyPyramid = useMemo(() => 
        [
          {id : 1 , amount : "Rs 1,000"},
          {id : 2 , amount : "Rs 2,000"},
          {id : 3 , amount : "Rs 3,000"},
          {id : 4 , amount : "Rs 5,000"},
          {id : 5 , amount : "Rs 10,000"},
          {id : 6 , amount : "Rs 20,000"},
          {id : 7 , amount : "Rs 40,000"},
          {id : 8 , amount : "Rs 80,000"},
          {id : 9 , amount : "Rs 1,60,000"},
          {id : 10 , amount : "Rs 3,20,000"},
          {id : 11 , amount : "Rs 6,40,000"},
          {id : 12 , amount : "Rs 12,50,000"},
          {id : 13 , amount : "Rs 25,00,000"},
          {id : 14 , amount : "Rs 50,00,000"},
          {id : 15 , amount : "Rs 1 Crore"},
          {id : 16 , amount : "Rs 7 Crore"},
        ].reverse(),
      []
      );
       

  useEffect(() =>{
      questionNumber > 1 &&
      setEarnedMoney(moneyPyramid.find((m) => m.id === questionNumber -1).amount);
  },[moneyPyramid,questionNumber]);
  return (
    <div className="App">
      {
        username ? (
          <>
             <div className="main">

                {
                  stop ? <h1 className="endText">You earned :  {earnedMoney}</h1>  : (
                  
                    <>
                      <div className="top">
                        <div className="timer">
                          <Timer setTimeOut={setTimeOut} questionNumber={questionNumber}/>
                        </div>
                    </div>
                    <div className="bottom">
                      <Quiz data={data} setQuestionNumber={setQuestionNumber} questionNumber={questionNumber}
                      setTimeOut={setTimeOut} setStop={setStop}/>
                    </div>
                    </>
                  
                  )
                }
                  </div>

                      <div className="pyramid">
                          <ul className="moneyList">
                            {
                              moneyPyramid.map((m) =>(
                                <li className={questionNumber === m.id  ? "moneyListItem active" : "moneyListItem"}>
                                <span className="moneyListNumber">{m.id}</span>
                                <span className="moneyListAmount">{m.amount}</span>
                              </li>
                              ))
                            }
                          </ul>
                      </div>
               </>
        ) : (<Start setUsername={setUsername}/>)
      }
       
    </div>
  );
}

export default App;
