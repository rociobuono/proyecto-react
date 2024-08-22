import React from 'react';

function Buttons(props){
    return (
        <>
            <Button onClick={props.callback}>{props.txt}</Button>
        </> 
    );
}
export default Buttons;