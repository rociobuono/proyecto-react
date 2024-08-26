import React from 'react';
import { Link } from 'react-router-dom';

function ButtonsLink(props){
    return (
        <>
            <Link to={props.url} className='btn'>{props.txt}</Link>
        </> 
    );
}
export default ButtonsLink;