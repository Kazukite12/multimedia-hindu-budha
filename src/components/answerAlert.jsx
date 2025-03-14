import { useEffect, useState } from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { FaCheck } from "react-icons/fa6";

const AnswerAlert = ({ isCorrect, onComplete }) => {
    const [showIcon, setShowIcon] = useState(false);
    const [hideIcon, setHideIcon] = useState(false);
    const [hideBackground, setHideBackground] = useState(false);

    useEffect(() => {
        const iconTimer = setTimeout(() => setShowIcon(true), 200); // Show icon after 0.3s
        const hideIconTimer = setTimeout(() => setHideIcon(true), 1500); // Hide icon after 1.2s
        const hideBgTimer = setTimeout(() => {
            setHideBackground(true);
            onComplete && onComplete(); // Call callback when animation ends
        }, 200); // Hide background after 1.5s

        return () => {
            clearTimeout(iconTimer);
            clearTimeout(hideIconTimer);
            clearTimeout(hideBgTimer);
        };
    }, []);

    return (
        <div className="alert-container">
            <div
                style={{ background: isCorrect ? "green" : "red" }}
                className={`alert-background ${hideBackground ? "popout-bg" : "popup-bg"}`}
            >
                {showIcon && !hideIcon && (
                    isCorrect ? (
                        <FaCheck className="icon popup-icon popout-icon" color="white" />
                    ) : (
                        <IoMdCloseCircleOutline className="icon popup-icon popout-icon" color="white" />
                    )
                )}
            </div>
        </div>
    );
};

export default AnswerAlert;
