import React, { useState } from 'react';
import QBank from './QBank';
import Question from './Question';

const AssessmentPage = () => {
    const [questionBank, setQuestionBank] = useState(QBank);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [score, setScore] = useState(0);
    const [quizEnd, setQuizEnd] = useState(false);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        checkAnswer();
        handleNextQuestion();
    };

    const checkAnswer = () => {
        if (selectedOption === questionBank[currentQuestion].answer) {
            setScore((prevScore) => prevScore + 1);
        }
    };

    const handleNextQuestion = () => {
        if (currentQuestion + 1 < questionBank.length) {
            setCurrentQuestion((prevQuestion) => prevQuestion + 1);
            setSelectedOption(null);
        } else {
            setQuizEnd(true);
        }
    };

    const restartQuiz = () => {
        setCurrentQuestion(0);
        setScore(0);
        setQuizEnd(false);
        setSelectedOption(null);
    };

    return (
        <div className="qbg h-screen flex flex-col justify-center items-center w-full">
            <div>
                <div >
                    <div className=" flex justify-center mb-3">
                        {questionBank.map((_, index) => (
                            <div
                                key={index}
                                className={`px-6 h-[10px] bg-[#8d8686] rounded-full mx-3 ${index === currentQuestion ? 'bg-green-500' : ''
                                    }`}
                            >

                            </div>
                        ))}
                    </div>
                    <h1 className="text-center font-bold text-3xl">
                        Answer assessment questions correctly.
                    </h1>
                    {!quizEnd ? (
                        <div>
                            <Question
                                question={questionBank[currentQuestion]}
                                selectedOption={selectedOption}
                                setSelectedOption={setSelectedOption}
                                onSubmit={handleFormSubmit}
                            />
                            
                        </div>
                    ) : (
                        <div className=" mx-auto rounded-md text-center p-4  h-[50vh] mt-9 ">
                            <div className="  rounded-sm my-4  text-4xl font-mono text-[#272525] font-bold  des">
                                Quiz completed! 
                            </div>
                            <div className='text-xl'>
                                Our Analysis using ml model
                            </div>
                            <button
                                onClick={restartQuiz}
                                className="bg-[#d65f1f] hover:bg-[#a83c3c] text-white font-semibold py-2 px-4 botttom-4 rounded-md my-4"
                            >
                                Restart Quiz
                            </button>
                        </div>
                    )}
                </div>
            </div>

        </div>
    );
};

export default AssessmentPage;
