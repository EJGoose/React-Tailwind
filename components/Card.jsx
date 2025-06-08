import React from "react";

//Takes properties from App.jsx and return a nicely styled card
const Card = ({ title, description, buttonText, imageUrl}) => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 hover:shadow-slate-50 hover:shadow-sm"> 
            <img className=" hover:scale-110 duration-500" src={imageUrl} alt={title} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{title}</div>
                <p className="text-gray-50 text-base">{description}</p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <button className="bg-blue-500 hover:bg-blue-700 text-white fobt-bold py-2 px-4 rounded">
                    {buttonText}
                </button>

            </div>
        </div>
    );
};

export default Card;