import React from 'react';
import ButtonsLink from './ButtonsLink';
import Buttons from './Buttons';

// [].map(() => {

// })
function Menu(props){
    const handleClick = () => {
          alert("Hello!")
    }
    return(
        <header>
            <h1>{props.title}</h1>
            <nav>
                <ButtonsLink url={"https://server-terciario.hilet.com/gitlab/algoritmos-3-2024/actividad-2208/-/commit/67f8cf40398a63e11bfd391c9b891e1674a0ded1"} txt={"Consignas"}/>
                {/* <Buttons onClick={handleClick} txt={"Documentacion"}/> */}
            </nav>
        </header>
    );
}
export default Menu;