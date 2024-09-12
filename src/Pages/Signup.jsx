import React from 'react';
import { useState } from "react";
import TextInput from "../Components/TextInput";
import Buttons from "../Components/Buttons";
import { POST } from "../Services/Fetch.js";

const url = "signup";

const Signup = () => {
    const [formData, setFormData] = useState({ Username: '', Password: '' });
    const signup = async() => {
        event.preventDefault();
        if (!formData.Username ) {
            window.alert("Complete los campos para continuar.");
        }
        try {
            const response = await GET(url, formData); 
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
                    Create an Account!
                </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form onSubmit={signup}  className="space-y-6">
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
                            callback={() => { signup() }}
                            txt={'Sign up'}
                        />
                    </div>
                </form>
            </div>
        </div>
    );
}
export default Signup;