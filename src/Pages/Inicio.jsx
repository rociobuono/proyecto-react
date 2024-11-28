import React from 'react';

const Inicio = () => {
    return (
        <div className="relative bg-gray-50 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                {/* Welcome Section */}
                <div className="text-center">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                        Bienvenido a Tu Recetario
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-gray-600">

                        El lugar donde podrás guardar, organizar y compartir tus recetas más preciadas. Aquí encontrarás un espacio personal para almacenar todas tus creaciones culinarias y acceder a ellas cuando más las necesites. Ya sea que busques inspiración o desees revivir tus platos favoritos, Tu Recetario te acompañará en cada paso de tu aventura gastronómica.                 </p>
                    <div className="mt-8 flex justify-center gap-x-6">
                        <a href="/recetas" className="text-lg font-semibold text-stone-500 hover:text-stone-700">
                            Tus Recetas
                            <span aria-hidden="true"> &rarr;</span>
                        </a>
                        <a href="/contacto" className="text-lg font-semibold text-stone-500 hover:text-stone-700">
                            Contactanos
                            <span aria-hidden="true"> &rarr;</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Inicio;
