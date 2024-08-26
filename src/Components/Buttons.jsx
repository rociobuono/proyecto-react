import React from 'react';

function Buttons(props) {
    return (
        <>
            <button onClick={props.callback}  className="
                bg-white
                text-gray-800
                border
                border-gray-300
                rounded-md
                px-4
                py-1.5
                shadow-md
                hover:bg-gray-100
                hover:border-gray-400
                transition
                duration-150
                ease-in-out
                focus:outline-none
                focus:ring-2
                focus:ring-green-500
                focus:ring-opacity-50
            ">{props.txt}</button>
        </>
    );
}
export default Buttons;