
import Buttons from "../Components/Buttons";
import ButtonsLink from "../Components/ButtonsLink";
import React, { useState, useEffect } from "react";


let MENU_DATA = [

];




const Frontend = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    useEffect(() => {
        if (localStorage.getItem("token")) {
            MENU_DATA = [
                {
                    to: '/inicio',
                    text: 'Inicio'
                },
                {
                    to: '/nosotros',
                    text: 'Nosotros'
                },
                {
                    to: '/contacto',
                    text: 'Contacto'
                },
                {
                    to: '/recetas',
                    text: 'Recetas'
                }
            ]
            setIsLoggedIn(true);
        } else {
            setIsLoggedIn(false);
        }
    })


    const logOut = () => {
        localStorage.clear();
        window.location.replace("/");
    }
    return (
        <>
            <header
                id="header"
                className="w-[100vw] h-[3rem] bg-custom-gray flex items-center justify-between fixed top-0 left-0 z-50 px-8"
            >
                {/* Left side empty for spacing */}
                <div className="flex-1"></div>
    
                {/* Centered logo and buttons */}
                <div className="flex items-center space-x-8">
                    {/* Logo */}
                    <a href="#" className="p-1.5">
                        <span className="sr-only">Your Company</span>
                        <img className="h-8 w-auto" src="public\chef-hat.png" alt="Logo" />
                    </a>
    
                    {/* Buttons */}
                    <div className="flex space-x-4">
                        {MENU_DATA.length > 0 ? (
                            MENU_DATA.map((item, index) => (
                                <ButtonsLink txt={item.text} url={item.to} key={index} />
                            ))
                        ) : (
                            <span className="text-white">
                                Welcome! Please log in to access more features.
                            </span>
                        )}
                    </div>
                </div>
    
                {/* LogOut button aligned to the right */}
                {isLoggedIn && (
                    <div className="flex-1 flex justify-end mr-4"> {/* Added flex-1 to ensure proper spacing */}
                        <Buttons txt={'LogOut'} callback={logOut} />
                    </div>
                )}
            </header>
            {props.children}
        </>
    );
    



}

export default Frontend;