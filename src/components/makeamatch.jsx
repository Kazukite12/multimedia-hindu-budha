

import makeamatch from "../assets/makeamatch.png"
import petunjuk from "../assets/petunjuk.png"
import mulai from "../assets/mulaimakeamatch.png"
import greenlayout from "../assets/green-layout.png"
import MakeAMatchs from "../data/makeamatch"

import next from "../assets/next button.png"
import "./styling.css"
import { useState } from "react"
import { useNavigate } from "react-router"
const MakeAMatch =()=> {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [isCorrect, setIsCorrect] = useState(null);
    const [draggedIndex, setDraggedIndex] = useState(null);

    // Handle drag (for desktop)
    const handleDragStart = (event, index) => {
        event.dataTransfer.setData("answerIndex", index);
        setDraggedIndex(index);
    };

    // Handle drop (for desktop)
    const handleDrop = (event) => {
        event.preventDefault();
        const droppedIndex = event.dataTransfer.getData("answerIndex");
        checkAnswer(parseInt(droppedIndex));
    };

    // Handle touch start (for mobile)
    const handleTouchStart = (event, index) => {
        setDraggedIndex(index);
    };

    // Handle touch end (for mobile)
    const handleTouchEnd = (event) => {
        if (draggedIndex !== null) {
            checkAnswer(draggedIndex);
            setDraggedIndex(null);
        }
    };

    // Check if the answer is correct
    const checkAnswer = (index) => {
        const correctIndex = MakeAMatchs[currentQuestion].answer_id;
        if (index === correctIndex) {
            setIsCorrect(true);
        } else {
            setIsCorrect(false);
        }
        setSelectedAnswer(index);
    };

    const navigate =useNavigate()

    const handleNext = () => {
        if (currentQuestion < MakeAMatchs.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
            setSelectedAnswer(null);
            setIsCorrect(null);
        } else {
            navigate('/evaluasi')
        }
    };
    return (
        <div className="menu-container main-container">
{/*        
            <img className="materi-title" src={makeamatch}/>
            <img  className="materi" src={petunjuk}/>
            <div className="button-wrapper">

             <img className="next-button" src={mulai}/> 
        </div> */}

        <div className="makeamatch">

        <div className="answer-container">
        <div className="question-wrapper">
            <img className="nomor" src={MakeAMatchs[currentQuestion].nomor}/>
            <img className="question" src={MakeAMatchs[currentQuestion].question}/>
        </div>

        <div className="drop-wrapper">

        <div
        className="drop-zone-container"
                onDragOver={(e) => e.preventDefault()}
                onDrop={handleDrop}
                onTouchEnd={handleTouchEnd} // Handle touch drop
            >
                {selectedAnswer !== null ? (
                    <img
                 className="drop-answer"
                        src={MakeAMatchs[currentQuestion].answers[selectedAnswer]}
                        alt="Selected Answer"
                
                    />
                ) : (
                    <div className="drop-zone"></div>
                )}
        </div>
        </div>

        <div className="match-button-wrapper">
            <img onClick={handleNext} src={next} alt="next"/>
        </div>


        </div>
           
        <div className="options-container">
                {MakeAMatchs[currentQuestion].answers.map((option, index) => (
                    <img
                        key={index}
                        src={option}
                        alt={`Option ${index}`}
                        draggable
                        onDragStart={(event) => handleDragStart(event, index)} // Desktop
                        onTouchStart={(event) => handleTouchStart(event, index)} // Mobile
                
                    />
                ))}
            </div>
        </div>
        
        </div>
    )
}

export default MakeAMatch