
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
            <header id="header" className="w-[100vw] h-[3rem] bg-custom-gray flex items-center justify-around fixed top-0 left-0 z-50">
                <a href="#" class="-m-1.5 p-1.5">
                    <span class="sr-only">Your Company</span>
                    <img class="h-8 w-auto" src="public\granos-de-cafe.png" alt=""/>
                </a>
                <div className="flex">
                    {
                        // Mapea y renderiza los botones solo si MENU_DATA tiene elementos
                        MENU_DATA.length > 0 ? (
                            MENU_DATA.map((item, index) => (
                                <ButtonsLink
                                    txt={item.text}
                                    url={item.to}
                                    key={index}
                                />

                            ))
                        ) : (
                            // Muestra un mensaje si MENU_DATA está vacío
                            <span className="text-white">Welcome! Please log in to access more features.</span>
                        )
                    }
                </div>
<div></div>
                {isLoggedIn && (
                    <div>
                        <Buttons
                            txt={'LogOut'}
                            callback={logOut}
                        />
                    </div>
                )}
            </header>
            {props.children}
        </>
    );




}

export default Frontend;