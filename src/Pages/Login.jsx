import React from 'react';
import { useState } from "react";
import TextInput from "../Components/TextInput";
import Buttons from "../Components/Buttons";
import { POST } from "../Services/Fetch.js";


const url = "login"
const Login =  () => {
    const [formData, setFormData] = useState({ Username: '', Password: '' });

    const login = async () => {
        event.preventDefault();
        if (!formData.Username ) {
            window.alert("Complete los campos para continuar.");
        }
        try {
            const response = await POST(url, formData); // Llama a la función POST con los datos del formulario
            
            localStorage.setItem('token', response?.accessToken); 
            if(localStorage.getItem('token')){
                window.location.replace("/inicio");
            }

        } catch (error) {
            console.error("Error al iniciar sesión:", error);
            window.alert("Ocurrió un error. Inténtalo de nuevo.");
        }

    }

    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
               
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    Sign in to your account
                </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form onSubmit={login}  className="space-y-6">
                    <div>
                        <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                            Username 
                        </label>
                        <div className="mt-2">
                            <TextInput
                                type={'text'}
                                //placeholder={'Username'}
                                callback={(e) => { setFormData({ ...formData, Username: e.target.value }) }}
                                id={'username'}
                            />
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                Password
                            </label>
                            <div className="text-sm">
                                <a  className="font-semibold text-stone-500 hover:text-indigo-500">
                                    Forgot password?
                                </a>
                            </div>
                        </div>
                        <div className="mt-2">
                            <TextInput
                                type={'password'}
                                //placeholder={'Password'}
                                callback={(e) => { setFormData({ ...formData, Password: e.target.value }) }}
                                id={'password'}
                            />
                        </div>
                    </div>

                    <div>
                        <Buttons
                            type="submit"
                            className={'flex w-full justify-center rounded-md bg-stone-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'}
                            callback={() => { login() }}
                            txt={'Login'}
                        />
                    </div>
                </form>

                <p className="mt-10 text-center text-sm text-gray-500">
                    Not a member?{' '}
                    <a href="#" className="font-semibold leading-6 text-stone-500 hover:text-indigo-500">
                        Sign Up!
                    </a>
                </p>
            </div>
        </div>
        // <div id="login" className="min-w-[100vw] min-h-[40vh] flex flex-col items-center justify-evenly">
        //             <div>
        //                 <TextInput
        //                     type={'text'}
        //                     placeholder={'Username'}
        //                     callback={(e) => { setFormData({ ...formData, name: e.target.value }) }}
        //                 />
        //                 <TextInput
        //                     type={'password'}
        //                     placeholder={'Password'}
        //                     callback={(e) => { setFormData({ ...formData, password: e.target.value }) }}
        //                 />
        //             </div>
        //             <div>
        //                 <Buttons
        //                     callback={() => { login() }}
        //                     txt={'Iniciar'}
        //                 />
        //             </div>

        // </div>
    );

}
export default Login;
