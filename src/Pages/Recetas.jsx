import React, { useEffect } from "react";
import SearchBar from "../Components/SearchBar";
import Cards from "../Components/Cards";
import { GET } from '../Services/Fetch';
import { useState } from "react";
const Recetas = () => {
    const [recFilter, setRecFilter] = useState({
        apiKey: "6227a910824b42c0987f8d0f95decfeb",
        query: ""
    });

    const [recipes, setRecipes] = useState([]);

    let back = "https://api.spoonacular.com";
    let uri = "/recipes/complexSearch";

    const getRecipe = async () => {
        if (!recFilter.query) return;  // No hacer la búsqueda si la consulta está vacía
        try {
            const rsp = await GET(uri, recFilter, back);
            setRecipes(rsp.results || []); // Ajusta según tu respuesta
            console.log(rsp.results);
        } catch (error) {
            console.error("Error fetching recipes:", error);
        }
    };

    useEffect(() => {
        getRecipe()
    }, [recFilter.query]);

    const handleSearch = (query) => {
        setRecFilter({
            apiKey: recFilter.apiKey,  // Mantiene el apiKey
            query: query.trim()  // Actualiza la query con el valor del input
        });
    };

    function getNumber(min, max){
        return Math.floor(Math.random() * (max - min) + min);
    }
    function getRandomString(array) {
        const randomIndex = Math.floor(Math.random() * array.length);
        return array[randomIndex];
    }
    
    // Ejemplo de uso:
    const stringsArray = ["easy", "medium", "difficult"];
    return (
        <>
            <div className="container px-6 pt-20 pb-5 mx-auto">
                <h1 className="text-center text-yellow-950 text-5xl font-bold tracking-wide">Buscar recetas</h1>
            </div>
            <SearchBar
                onSearch={handleSearch}
            />
            <div className="container mx-auto p-4">
                <div className="grid gap-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
                    {recipes.map((recipe) => (
                        <Cards
                            img={recipe.image}
                            title={recipe.title}
                            time={getNumber(15, 60)}
                            ingredients={getNumber(5,10)}
                            servings={getNumber(1,4)}
                            difficulty={getRandomString(stringsArray)}
                        />
                    ))}

                </div>
            </div>
        </>

    );

}
export default Recetas;