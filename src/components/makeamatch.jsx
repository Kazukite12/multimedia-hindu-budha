

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

    const [isDragging, setIsDragging] = useState(false);
const [touchPosition, setTouchPosition] = useState({ x: 0, y: 0 });
const [draggedElement, setDraggedElement] = useState(null);

    const [selectedOption, setSelectedOption] = useState(null);

    // Handle touch start
const handleTouchStart = (event, index) => {
    const touch = event.touches[0];
    setDraggedIndex(index);
    setIsDragging(true);
    setDraggedElement(event.currentTarget); // Store the dragged element
    setTouchPosition({ x: touch.clientX, y: touch.clientY });
};

// Handle touch move
const handleTouchMove = (event) => {
    if (isDragging) {
        const touch = event.touches[0];
        setTouchPosition({ x: touch.clientX, y: touch.clientY });
    }
};

// Handle touch end
const handleTouchEnd = (event) => {
    if (isDragging) {
        setIsDragging(false);
        setDraggedElement(null);

        // Check if the touch ended over the drop zone
        const dropZone = document.querySelector('.drop-zone-container');
        const dropZoneRect = dropZone.getBoundingClientRect();
        const touch = event.changedTouches[0];

        if (
            touch.clientX >= dropZoneRect.left &&
            touch.clientX <= dropZoneRect.right &&
            touch.clientY >= dropZoneRect.top &&
            touch.clientY <= dropZoneRect.bottom
        ) {
            checkAnswer(draggedIndex);
        }
    }
};

    const handleOptionSelect = (index) => {
        setSelectedOption(index);
    };
    // Handle drag (for desktop)
    const handleDragStart = (event, index) => {
        event.dataTransfer.setData("answerIndex", index);
        setDraggedIndex(index);
    };

    // Handle drop (for desktop)
    const handleDrop = (event) => {
        event.preventDefault();
        if (selectedOption !== null) {
            checkAnswer(selectedOption);
            setSelectedOption(null); // Reset selected option after drop
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
            <div className="makeamatch">
                <div className="answer-container">
                    <div className="question-wrapper">
                        <img className="nomor" src={MakeAMatchs[currentQuestion].nomor} alt="Question Number"/>
                        <img className="question" src={MakeAMatchs[currentQuestion].question} alt="Question"/>
                    </div>
    
                    <div className="drop-wrapper">
                        <div
                            className="drop-zone-container"
                            onDragOver={(e) => e.preventDefault()}
                            onDrop={handleDrop}
                            onTouchEnd={handleTouchEnd}
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
                   
                            onDragStart={(event) => handleDragStart(event, index)} // Desktop
                            onTouchStart={(event) => handleTouchStart(event, index)} // Mobile
                            onTouchMove={handleTouchMove} // Mobile
                            onTouchEnd={handleTouchEnd} // Mobile
                            style={{
                                position: isDragging && draggedIndex === index ? 'fixed' : 'static',
                                left: isDragging && draggedIndex === index ? touchPosition.x - 50 : 'auto', // Adjust offset
                                top: isDragging && draggedIndex === index ? touchPosition.y - 50 : 'auto', // Adjust offset
                                pointerEvents: isDragging && draggedIndex === index ? 'none' : 'auto', // Prevent interference
                            }}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default MakeAMatch