import React, { useEffect } from "react";
import SearchBar from "../Components/SearchBar";
import Cards from "../Components/Cards";
import { GET } from '../Services/Fetch';
import { useState } from "react";
import Modal from "../Components/Modal";

const Recetas = () => {

    const [recetas, setRecetas] = useState([]);
    const [dificultades, setDificultades] = useState([]);

    const [hasSearched, setHasSearched] = useState(false);
    useEffect(() => {
        const fetchData = async () => {
            try {

                const dificultadesData = await GET("Dificultades/Get");
                setDificultades(dificultadesData.data);
                const recetasData = await GET("Recetas/Get");
                //setRecetas(recetasData.data.filter((receta) => receta.fk_usuario === userId)); // Filtra las recetas por el usuario autenticado
                setRecetas(recetasData.data);
                console.log("Recetas recibidas desde la API:", recetasData);
            } catch (error) {
                console.error("Error en la petición:", error);
            }
        };
        fetchData();
    }, []);

    const getDificultad = (fk_dificultad) => {
        const dificultad = dificultades.find(d => d.dificultad_id === fk_dificultad);
        return dificultad ? dificultad.dificultad : "Desconocida";
    };

    const handleDelete = (id) => {
        setRecipes((prevRecipes) => prevRecipes.filter((recipe) => recipe.id !== id));
      };
    return (
        <>
            <div className="container px-6 pt-20 pb-5 mx-auto">
                <h1 className="text-center text-yellow-950 text-5xl font-bold tracking-wide">Mis recetas</h1>
            </div>
            {/*
            <SearchBar
                onSearch={handleSearch}
            />
            {!hasSearched && (
                <>
                    <div className="grid gap-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
                        {recetas.map((recetas) => (
                            <Cards
                                title={recetas.nombre}
                                time={recetas.tiempo}
                                ingredients={recetas.ingredientes}
                                servings={recetas.porciones}
                                difficulty={dificultad.dificultad}
                            />
                        ))}
                    </div>
                </>
            )}
            */}
            <div className="grid gap-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
                {recetas.length > 0 ? (
                    recetas.map((receta,index) => (
                        <div key={index}>
                            <Cards  
                                id={receta.receta_id}
                                title={receta.nombre}
                                ingredients={receta.ingredientes}
                                servings={receta.porciones}
                                difficulty={getDificultad(receta.fk_dificultad)}
                                description={receta.receta}
                                onDelete={handleDelete}
                            />
                        </div>
                    ))
                ) : (
                    <p>No hay recetas disponibles.</p>
                )}
            </div>

        </>

    );

}
export default Recetas;