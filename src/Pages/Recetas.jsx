import React from "react";
import SearchBar from "../Components/SearchBar";
import Cards from "../Components/Cards";
const Recetas = () => {
    return (
        <>
            <div className="container px-6 pt-20 pb-5 mx-auto">
                <h1 className="text-center text-yellow-950 text-5xl font-bold tracking-wide">Buscar recetas</h1>
            </div>
            <SearchBar/>
            <div className="container mx-auto p-4">
                <div className="grid gap-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
                    <Cards
                        img={'public/ipizza.jpg'}
                        title={'Pizza'}
                        time={'30'}
                        ingredients={'5'}
                        servings={'3'}
                        description={'Delicious pizza'}
                        difficulty={'Easy'}
                    />
                </div>
            </div>
        </>

    );
}
export default Recetas;