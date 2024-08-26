import React from 'react';

function Inicio(props) {
    return (
        <div className="relative bg-gray-50 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                {/* Welcome Section */}
                <div className="text-center">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                        Welcome to Our Website
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Discover our features and services that can help you achieve your goals. Explore our website to learn more.
                    </p>
                    <div className="mt-8 flex justify-center gap-x-6">
                        <a href="#services" className="text-lg font-semibold text-indigo-600 hover:text-indigo-700">
                            Learn More
                            <span aria-hidden="true"> &rarr;</span>
                        </a>
                        <a href="#contact" className="text-lg font-semibold text-indigo-600 hover:text-indigo-700">
                            Contact Us
                            <span aria-hidden="true"> &rarr;</span>
                        </a>
                    </div>
                </div>
                </div>
                </div>

    );
}

export default Inicio;
