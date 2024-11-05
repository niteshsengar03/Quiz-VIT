import React, { useState } from 'react';
import { useParams,useNavigate, Navigate } from 'react-router-dom';
import QuestionCard from './QuestionCard';
import { midtermque } from '../midterm'; // Import your questions


const QuizPage = () => {
    const { level } = useParams();
    const navigate = useNavigate();
    const levelIndex = parseInt(level) - 1;
    const [currentIndex, setCurrentIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [quizCompleted, setQuizCompleted] = useState(false);
    const [wrongAnswers, setWrongAnswers] = useState([]);
  
    const questionList = midtermque;
  
    const handleAnswer = (isCorrect, question, selectedOption) => {
      if (isCorrect) {
        setScore(score + 1);
      } else {
        setWrongAnswers([...wrongAnswers, { question, selectedOption }]);
      }
      if (currentIndex + 1 < questionList.length) {
        setCurrentIndex(currentIndex + 1);
      } else {
        setQuizCompleted(true);
      }
    };
  
    const restartQuiz = () => {
      setCurrentIndex(0);
      setScore(0);
      setQuizCompleted(false);
      setWrongAnswers([]);
    };
  
    const goToLevels = () => {
      navigate('/');
    };
  
    if (quizCompleted) {
      return (
        <div className="container mx-auto px-4 py-8">
          <div className="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-3xl font-bold text-center text-gray-800">Quiz Completed!</h2>
            </div>
            <div className="p-6">
              <p className="text-2xl mb-6 text-center text-gray-700">Your Score: <span className="font-bold text-blue-600">{score}</span> out of <span className="font-bold">{questionList.length}</span></p>
              
              {wrongAnswers.length > 0 && (
                <div className="mt-8">
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">Questions You Missed:</h3>
                  {wrongAnswers.map((item, index) => (
                    <div key={index} className="mb-6 p-4 bg-gray-50 rounded-lg">
                      <p className="font-medium text-gray-800 mb-2">{item.question.question}</p>
                      <p className="text-red-500 mb-1">Your answer: {item.selectedOption}</p>
                      <p className="text-green-500">Correct answer: {item.question.answer}</p>
                    </div>
                  ))}
                </div>
              )}
              
              <div className="flex flex-col sm:flex-row justify-center mt-8 space-y-4 sm:space-y-0 sm:space-x-4">
                <button 
                  onClick={restartQuiz}
                  className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors"
                >
                  Restart Quiz
                </button>
                <button 
                  onClick={goToLevels}
                  className="px-6 py-2 bg-gray-600 text-white font-semibold rounded-md hover:bg-gray-700 transition-colors"
                >
                  Back to Levels
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    }
  
    return (
      <div className="container mx-auto px-4 py-8">
        <QuestionCard
          question={questionList[currentIndex]}
          onAnswer={handleAnswer}
          currentQuestion={currentIndex + 1}
          totalQuestions={questionList.length}
        />
      </div>
    );
  };
  
  export default QuizPage;