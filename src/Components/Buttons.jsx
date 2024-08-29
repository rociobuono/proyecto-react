import React from 'react';

function Buttons(props) {
    return (
        <>
            <button onClick={props.callback}  >{props.txt}</button>
        </>
    );
}
export default Buttons;