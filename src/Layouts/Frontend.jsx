import { useState } from "react";
import Buttons from "../Components/Buttons";
import ButtonsLink from "../Components/ButtonsLink";
import TextInput from "../Components/TextInput";


const MENU_DATA = [
    {
        to: '/inicio',
        text: 'Inicio'
    },
    {
        to: '/noticias',
        text: 'Noticias'
    }
]

const Frontend = (props) => {
    const [inputData, setInputData] = useState({ username: '', password: '' })
    const login = () => {

    }
    return (
        <>
            <header className="w-[100vw] h-[3rem] bg-pink-100 flex items-center justify-around fixed top-0 left-0 z-50">
                <div className="flex">
                    {
                        MENU_DATA.map((item, index) => {
                            return (
                                <>
                                    <ButtonsLink
                                        txt={item.text}
                                        url={item.to}
                                        key={index}
                                    />
                                    {props.children}
                                </>
                            );
                        })
                    }
                </div>
                <div className="flex items-center space-x-2">
                    <div>
                        <TextInput
                            type={'text'}
                            placeholder={'Username'}
                            callback={(e) => { setInputData({ ...inputData, username: e.target.value }) }}
                        />
                        <TextInput
                            type={'password'}
                            placeholder={'Password'}
                            callback={(e) => { setInputData({ ...inputData, password: e.target.value }) }}
                        />
                    </div>
                    <div>
                        <Buttons
                            callback={() => { login() }}
                            txt={'Iniciar'}
                        />
                    </div>
                </div>

            </header>
            <main className="pt-[3rem]">
                {props.children}
            </main>
        </>
    );


}

export default Frontend;