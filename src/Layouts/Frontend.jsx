
import Buttons from "../Components/Buttons";
import ButtonsLink from "../Components/ButtonsLink";
import React, { useState, useEffect } from "react";


let MENU_DATA = [
    
];

 if(localStorage.getItem("usrData")){
     MENU_DATA = [
        {
            to: '/inicio',
            text: 'Inicio'
        },
        {
            to: '/nosotros',
            text: 'Nosotros'
        }
     ]
 }


const Frontend = (props) => {
    const [usrData, setUsrData] = useState(false);
    
    const logOut = () => {
        localStorage.clear();
        window.location.replace("/");
    }

    useEffect(() => {
        let tmp = localStorage.getItem("usrData");

        if(tmp)
        {
            setUsrData(JSON.parse(tmp));
        }
    }, []);

    return(
        <>
            <header id="header"className="w-[100vw] h-[3rem] bg-custom-gray flex items-center justify-around fixed top-0 left-0 z-50">
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
                {
                usrData && (
                    <div>   
                        <span className="text-white">
                            Usr: {usrData.name}
                        </span>
                        &nbsp;
                        &nbsp;
                        <span className="text-white">
                            LogIn at: {usrData.time}
                        </span>
                        &nbsp;
                        &nbsp;
                        <Buttons 
                            txt={'LogOut'}
                            callback={() => {logOut()}}
                        />
                    </div>
                    )
                }
            </header>
            {props.children}
        </>
    );




}

export default Frontend;