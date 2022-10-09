import "./App.css";
import { useEffect, useMemo, useState } from "react";
import Start from "./components/Start";
import Timer from "./components/Timer";
import Trivia from "./components/Trivia";

function App() {
  const [username, setUsername] = useState(null);
  const [timeOut, setTimeOut] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [earned, setEarned] = useState("$ 0");

  const data = [
    {
      id: 1,
      question: "Rolex is a company that specializes in what type of product?",
      answers: [
        {
          text: "Phone",
          correct: false,
        },
        {
          text: "Watches",
          correct: true,
        },
        {
          text: "Food",
          correct: false,
        },
        {
          text: "Cosmetic",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "When did the website `Facebook` launch?",
      answers: [
        {
          text: "2004",
          correct: true,
        },
        {
          text: "2005",
          correct: false,
        },
        {
          text: "2006",
          correct: false,
        },
        {
          text: "2007",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Who played the character of harry potter in movie?",
      answers: [
        {
          text: "Johnny Deep",
          correct: false,
        },
        {
          text: "Leonardo Di Caprio",
          correct: false,
        },
        {
          text: "Denzel Washington",
          correct: false,
        },
        {
          text: "Daniel Red Cliff",
          correct: true,
        },
      ],
    },
    {
      id: 4,
      question: "Where was the first Tamil Sangam held__?",
      answers: [
        {
          text: "Madurai",
          correct: true,
        },
        {
          text: "Kapadapuram",
          correct: false,
        },
        {
          text: "Kaveripoompatinam",
          correct: false,
        },
        {
          text: "Kural",
          correct: false,
        },
      ],
    },
    {
      id: 5,
      question: "What is the distance of the Sun from the Earth?",
      answers: [
        {
          text: "7 light minutes",
          correct: false,
        },
        {
          text: " 8 light minutes",
          correct: true,
        },
        {
          text: " 9 light minutes",
          correct: false,
        },
        {
          text: "10 light minutes",
          correct: false,
        },
      ],
    },
    {
      id: 6,
      question: "Who is known as the Father of Tamil literature?",
      answers: [
        {
          text: "Nakkirar",
          correct: false,
        },
        {
          text: "Pushyamitra",
          correct: false,
        },
        {
          text: "Thirumoolar",
          correct: false,
        },
        {
          text: "Agastayar",
          correct: true,
        },
      ],
    },
    {
      id: 7,
      question: "Who was the first Indian in independent India to have won a medal in an individual Olympic event ?",
      answers: [
        {
          text: "Dhyanchand",
          correct: false,
        },
        {
          text: "K D Jadhav",
          correct: true,
        },
        {
          text: " Prithipal Singh",
          correct: false,
        },
        {
          text: "Harishchandra Birajdar",
          correct: false,
        },
      ],
    },
    {
      id: 8,
      question: "Largest National park in North East India is located at?",
      answers: [
        {
          text: "Assam",
          correct: false,
        },
        {
          text: "Mizoram",
          correct: false,
        },
        {
          text: "Arunachal Pradesh",
          correct: true,
        },
        {
          text: "Nagaland",
          correct: false,
        },
      ],
    },
    {
      id: 9,
      question: "Which of the following was the capital of Chola dynasty?",
      answers: [
        {
          text: "Uraiyur",
          correct: true,
        },
        {
          text: "Kaveripatinam",
          correct: false,
        },
        {
          text: "Karur",
          correct: false,
        },
        {
          text: "Madurai",
          correct: false,
        },
      ],
    },
    {
      id: 10,
      question: "Who is the Father of AI ?",
      answers: [
        {
          text: "Alan Turing",
          correct: false,
        },
        {
          text: "Charles Babbage",
          correct: false,
        },
        {
          text: "John MacCarthy",
          correct: true,
        },
        {
          text: "None of the above",
          correct: false,
        },
      ],
    },
    {
      id: 11,
      question: "Which is the tallest tower in the world ?",
      answers: [
        {
          text: "Burj Khalifa, Dubai",
          correct: true,
        },
        {
          text: "Eiffel Tower, Paris",
          correct: false,
        },
        {
          text: "Tokyo Skytree, Japan",
          correct: false,
        },
        {
          text: "CN Tower, Canada",
          correct: false,
        },
      ],
    },
    {
      id: 12,
      question: " In which ocean 'Bermuda Triangle' region is located?",
      answers: [
        {
          text: "Pacific Ocean",
          correct: false,
        },
        {
          text: "Artic Ocean",
          correct: false,
        },
        {
          text: "Atlantic Ocean",
          correct: true,
        },
        {
          text: "Antartic Ocean",
          correct: false,
        },
      ],
    },
    {
      id: 13,
      question: "Which input device is used to scan cheque in banks?",
      answers: [
        {
          text: "OMR",
          correct: false,
        },
        {
          text: "OCR",
          correct: false,
        },
        {
          text: "Printer",
          correct: false,
        },
        {
          text: "MICR",
          correct: true,
        },
      ],
    },
    {
      id: 14,
      question: "Which of the following is the oldest test cricket playing country in the world?",
      answers: [
        {
          text: "South Africa",
          correct: false,
        },
        {
          text: "India",
          correct: false,
        },
        {
          text: "Australia",
          correct: true,
        },
        {
          text: "West Indies",
          correct: false,
        },
      ],
    },
    {
      id: 15,
      question: "Which of the following element is NOT an alkaline earth metal?",
      answers: [
        {
          text: "Magnesium",
          correct: false,
        },
        {
          text: "Strontium",
          correct: false,
        },
        {
          text: "Beryllium",
          correct: true,
        },
        {
          text: "Barium",
          correct: false,
        },
      ],
    }
  ];

  const moneyPyramid = useMemo(
    () =>
      [
        { id: 1, amount: "$ 100" },
        { id: 2, amount: "$ 200" },
        { id: 3, amount: "$ 300" },
        { id: 4, amount: "$ 500" },
        { id: 5, amount: "$ 1.000" },
        { id: 6, amount: "$ 2.000" },
        { id: 7, amount: "$ 4.000" },
        { id: 8, amount: "$ 8.000" },
        { id: 9, amount: "$ 16.000" },
        { id: 10, amount: "$ 32.000" },
        { id: 11, amount: "$ 64.000" },
        { id: 12, amount: "$ 125.000" },
        { id: 13, amount: "$ 250.000" },
        { id: 14, amount: "$ 500.000" },
        { id: 15, amount: "$ 1.000.000" }
      ].reverse(),
    []
  );

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [questionNumber, moneyPyramid]);

  return (
    <div className="app">
      {!username ? (
        <Start setUsername={setUsername} />
      ) : (
        <>
          <div className="main">
            {timeOut ? (
              <h1 className="endText">You earned: {earned}</h1>
            ) : (
              <>
                <div className="top">
                  <div className="timer">
                    <Timer
                      setTimeOut={setTimeOut}
                      questionNumber={questionNumber}
                    />
                  </div>
                </div>
                <div className="bottom">
                  <Trivia
                    data={data}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                    setTimeOut={setTimeOut}
                  />
                </div>
              </>
            )}
          </div>
          <div className="pyramid">
            <ul className="moneyList">
              {moneyPyramid.map((m) => (
                <li
                  className={
                    questionNumber === m.id
                      ? "moneyListItem active"
                      : "moneyListItem"
                  }
                >
                  <span className="moneyListItemNumber">{m.id}</span>
                  <span className="moneyListItemAmount">{m.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default App;

