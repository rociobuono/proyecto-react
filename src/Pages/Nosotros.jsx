import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Nosotros = () => {
    return (
        <>
            <section className="bg-white">
                <div className="container px-6 py-10 mx-auto">
                    <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl">Nuestro Equipo</h1>

                    <p className="max-w-2xl mx-auto my-6 text-center text-gray-500">
                        Somos un equipo de Programadores conformado por Rocío y Kevin, dos estudiantes avanzados de la carrera Analista de Sistemas en el Instituto HILET. 
                    </p>

                    <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-2 justify-center items-center">
                        <div className="flex flex-col items-center p-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-stone-500">
                            <img className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300" src="public\IMG_5048.jpg" alt="" />

                            <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize group-hover:text-white">Rocio Buono</h1>

                            <p className="mt-2 text-gray-500 capitalize group-hover:text-gray-300">FullStack Developer</p>

                            <div className="flex mt-3 -mx-2">
                                <a href="https://www.linkedin.com/in/rociobelenbuono/" className="mx-2 text-gray-600 hover:text-gray-500 group-hover:text-white" aria-label="Github">
                                    <i className="bi bi-linkedin" style={{ fontSize: '2rem' }}></i>
                                </a>
                                <a href="https://github.com/rociobuono" className="mx-2 text-gray-600 hover:text-gray-500 group-hover:text-white" aria-label="Github">
                                    <i className="bi bi-github" style={{ fontSize: '2rem' }}></i>
                                </a>
                            </div>
                        </div>

                        <div className="flex flex-col items-center p-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-stone-500">
                            <img className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300" src="public\WhatsApp Image 2024-11-28 at 4.48.47 PM.jpeg" alt="" />

                            <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize group-hover:text-white">Kevin Quikuen</h1>

                            <p className="mt-2 text-gray-500 capitalize group-hover:text-gray-300">Fullstack Developer</p>

                            <div className="flex mt-3 -mx-2">
                                <a href="https://www.linkedin.com/in/kevinquikuen/" className="mx-2 text-gray-600 hover:text-gray-500 group-hover:text-white" aria-label="Github">
                                    <i className="bi bi-linkedin" style={{ fontSize: '2rem' }}></i>
                                </a>
                                <a href="https://github.com/ThaielQuikuen" className="mx-2 text-gray-600 hover:text-gray-500 group-hover:text-white" aria-label="Github">
                                    <i className="bi bi-github" style={{ fontSize: '2rem' }}></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-white ">
                <div className="container px-6 py-12 mx-auto">
                    <div className="text-center">
                        <h1 className="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl ">Contactanos!</h1>


                    </div>

                    <div className="grid grid-cols-1 gap-12 mt-10 md:grid-cols-2 lg:grid-cols-3">
                        <div className="flex flex-col items-center justify-center text-center">
                            <span className="p-3 text-blue-500 rounded-full bg-blue-100/80 ">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                </svg>
                            </span>

                            <h2 className="mt-4 text-lg font-medium text-gray-800 ">Email</h2>
                            <p className="mt-2 text-gray-500 ">Nuestro equipo esta aquí para ayudarte.</p>
                            <p className="mt-2 text-blue-500 ">rociobuono@hotmail.com <span>kevinquikuen@hotmail.com</span></p>
                        </div>

                        <div className="flex flex-col items-center justify-center text-center">
                            <span className="p-3 text-blue-500 rounded-full bg-blue-100/80 ">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                </svg>
                            </span>

                            <h2 className="mt-4 text-lg font-medium text-gray-800 ">Oficina</h2>
                            <p className="mt-2 text-gray-500">Ven a visitarnos a nuestra oficina.</p>
                            <p className="mt-2 text-blue-500 ">25 de Mayo 2809, Mar del Plata, Provincia de Buenos Aires</p>
                        </div>

                        <div className="flex flex-col items-center justify-center text-center">
                            <span className="p-3 text-blue-500 rounded-full bg-blue-100/80 ">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                </svg>
                            </span>

                            <h2 className="mt-4 text-lg font-medium text-gray-800 ">Telefono</h2>
                            <p className="mt-2 text-gray-500 ">Lun-Vie de 8am a 12:20 pm.</p>
                            <p className="mt-2 text-blue-500 ">0223 493-2525</p>
                        </div>
                    </div>
                </div>
            </section>
        </>


    );

}
export default Nosotros;