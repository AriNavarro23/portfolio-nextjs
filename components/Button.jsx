import React from "react";

const Button = () => {

    const handleButton = () => {
        console.log("Button clicked!");
        alert("Button clicked!");
    }

    return (
        <button onClick={handleButton} className="bg-blue-500 hover:bg-green-600 focus:bg-blue-700 text-white font-bold py-2 px-4 rounded-md shadow-md">
            Click me!
        </button>
    );
};

export default Button;