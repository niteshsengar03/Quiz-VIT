'use client'

import React, { useState } from 'react'
import PropTypes from 'prop-types'

const QuestionCard = ({ question, onAnswer, currentQuestion, totalQuestions }) => {
    const [selectedOption, setSelectedOption] = useState(null)
    const [isAnswered, setIsAnswered] = useState(false)
  
    const handleAnswer = () => {
      if (selectedOption) {
        setIsAnswered(true)
        setTimeout(() => {
          onAnswer(selectedOption === question.answer, question, selectedOption)
          setSelectedOption(null)
          setIsAnswered(false)
        }, 900)
      }
    }
  
    const getOptionClass = (option) => {
      const baseClass = "w-full p-4 text-left transition-colors border rounded-md"
      if (!isAnswered) return selectedOption === option ? `${baseClass} bg-blue-100 border-blue-500` : `${baseClass} bg-white`
      if (option === question.answer) return `${baseClass} bg-green-100 border-green-500`
      return selectedOption === option ? `${baseClass} bg-red-100 border-red-500` : `${baseClass} bg-white`
    }
  
    return (
      <div className="w-full max-w-lg mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-center">
            Question {currentQuestion} of {totalQuestions}
          </h2>
        </div>
        <div className="p-6">
          <h3 className="text-xl mb-4">{question.question}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {question.options.map((opt, index) => (
              <button
                key={index}
                className={getOptionClass(opt)}
                onClick={() => !isAnswered && setSelectedOption(opt)}
                disabled={isAnswered}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
        <div className="p-6 bg-gray-50 flex justify-center">
          <button 
            onClick={handleAnswer}
            disabled={!selectedOption || isAnswered}
            className={`mt-4 w-full md:w-auto px-6 py-2 text-white font-semibold rounded-md transition-colors ${
              !selectedOption || isAnswered 
                ? 'bg-gray-300 cursor-not-allowed' 
                : 'bg-blue-600 hover:bg-blue-700'
            }`}
          >
            {isAnswered ? 'Next Question' : 'Submit Answer'}
          </button>
        </div>
      </div>
    )
  }
  
  QuestionCard.propTypes = {
    question: PropTypes.shape({
      question: PropTypes.string.isRequired,
      options: PropTypes.arrayOf(PropTypes.string).isRequired,
      answer: PropTypes.string.isRequired,
    }).isRequired,
    onAnswer: PropTypes.func.isRequired,
    currentQuestion: PropTypes.number.isRequired,
    totalQuestions: PropTypes.number.isRequired,
  }
  


export default QuestionCard













