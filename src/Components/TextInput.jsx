import React from 'react';

function TextInput(props) {
    return (
        <input
            type={props.type}
            placeholder={props.placeholder}
            onChange={props.callback}
            className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${props.className}`}
        />
    );
}

export default TextInput;