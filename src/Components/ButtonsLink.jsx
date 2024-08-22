import React from 'react';
import { Link } from 'react-router-dom';

function ButtonsLink(props){
    return (
        <>
            <Link to={props.url}>{props.txt}</Link>
        </> 
    );
}
export default ButtonsLink;