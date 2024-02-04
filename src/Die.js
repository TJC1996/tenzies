import React from "react";
import './Die.css';

export default function Die(props) {
    const renderDots = () => {
        switch (props.value) {
            case 1:
                return <div className="dot center"></div>;
            case 2:
                return (
                    <>
                        <div className="dot top-left"></div>
                        <div className="dot bottom-right"></div>
                    </>
                );
            case 3:
                return (
                    <>
                        <div className="dot top-left"></div>
                        <div className="dot center"></div>
                        <div className="dot bottom-right"></div>
                    </>
                );
            case 4:
                return (
                    <>
                        <div className="dot top-left"></div>
                        <div className="dot top-right"></div>
                        <div className="dot bottom-left"></div>
                        <div className="dot bottom-right"></div>
                    </>
                );
            case 5:
                return (
                    <>
                        <div className="dot top-left"></div>
                        <div className="dot top-right"></div>
                        <div className="dot center"></div>
                        <div className="dot bottom-left"></div>
                        <div className="dot bottom-right"></div>
                    </>
                );
            case 6:
                return (
                    <>
                        <div className="dot top-left"></div>
                        <div className="dot top-right"></div>
                        <div className="dot middle-left"></div>
                        <div className="dot middle-right"></div>
                        <div className="dot bottom-left"></div>
                        <div className="dot bottom-right"></div>
                    </>
                );
            default:
                return null;
        }
    };

    const styles = {
        backgroundColor: props.isHeld ? "#59E391" : "white"
    };

    return (
        <div className="die-face" style={styles} onClick={props.holdDice}>
            {renderDots()}
        </div>
    );
}
