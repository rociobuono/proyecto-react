import React from 'react';

function Buttons(props) {
    return (
        <>
            <button onClick={props.callback}  className={props.className}>{props.txt}</button>
        </>
    );
}
export default Buttons;