import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import '../style/Quiz.css';

const QuizApp = () => {
 
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [quizState, setQuizState] = useState("ongoing"); 

  
  const nextButtonRef = useRef(null);
  const totalQuestions = useRef(5); 
  const timerRef = useRef(null); 

  const questions = [
    {
      question: "What is 2 + 2?",
      options: ["3", "4", "5", "6"],
      correctAnswer: "4",
    },
    {
      question: "how many hours are there in a day?",
      options: ["20", "15", "24", "75"],
      correctAnswer: "24",
    },
    {
      question: "Rainbow consist of how many colors?",
      options: ["7", "1", "8", "10"],
      correctAnswer: "7",
    },
    {
      question: "Name the national bird in India?",
      options: ["crow", "parrot", "eagle", "peacock"],
      correctAnswer: "Peacock",
    },
    {
      question: "Sun rises in the...?",
      options: ["East", "west", "north", "south"],
      correctAnswer: "east",
    },
    {
      question: "who is the first prime minister in india?",
      options: ["nehru", "gandhiji", "periyar", "armstrong"],
      correctAnswer: "nehru",
    },
  ];

  useEffect(() => {
    if (quizState === "completed") {
      console.log("Quiz completed! Your score:", score);
    }

    if (quizState === "ongoing" && timerRef.current) {
      const timer = setTimeout(() => {
        setQuizState("completed");
      }, 60000); 
      return () => clearTimeout(timer); 
    }
  }, [quizState, score]);

  useEffect(() => {
    if (selectedAnswer !== null) {
      const correct = questions[currentQuestionIndex].correctAnswer;
      if (selectedAnswer === correct) {
        setScore((prevScore) => prevScore + 1);
      }
      setTimeout(() => {
        nextButtonRef.current?.focus();
      }, 300);
    }
  }, [selectedAnswer, currentQuestionIndex]);

  const handleAnswerSelect = (answer) => {
    setSelectedAnswer(answer);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      setSelectedAnswer(null);
    } else {
      setQuizState("completed");
    }
  };

  return (
    <div>
      {quizState === "ongoing" && (
        <>
          <h1>Quiz</h1>
          <p>
            Question {currentQuestionIndex + 1}/{questions.length}
          </p>
          <h2>{questions[currentQuestionIndex].question}</h2>
          <div>
            {questions[currentQuestionIndex].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerSelect(option)}
                disabled={selectedAnswer !== null}
                style={{
                  backgroundColor:
                    selectedAnswer === option
                      ? option === questions[currentQuestionIndex].correctAnswer
                        ? "green"
                        : "red"
                      : "",
                }}
              >
                {option}
              </button>
            ))}
          </div>
          <button
            ref={nextButtonRef}
            onClick={handleNextQuestion}
            disabled={selectedAnswer === null}
          >
            Next
          </button>
        </>
      )}

      {quizState === "completed" && (
        <div>
          <h1>Quiz Completed!</h1>
          <p>Your score: {score}/{questions.length}</p>
        </div>
      )}
    </div>
  );
};

export default QuizApp;
