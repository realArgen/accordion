import React from "react";
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { useState } from "react";

const Questions = ({ title, info }) => {

    const [showInfo, setShowInfo] = useState(false);


    return (
        <div>
            <div>
                <h4>{title}</h4>
                <button
                    className="btn"
                    onClick={() => setShowInfo(!showInfo)}
                >
                    {
                        showInfo === true ? <AiOutlineMinus /> : <AiOutlinePlus />
                    }
                    {/* <AiOutlineMinus />
                    <AiOutlinePlus/> */}
                </button>
            </div>
            {
                showInfo && <p>{info}</p>
            }
        </div>
    )
}

export default Questions;