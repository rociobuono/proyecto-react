import React, { useEffect } from "react";
import Cards from "../Components/Cards";
import { GET } from '../Services/Fetch';
import { useState } from "react";

const Recetas = () => {

    const [recetas, setRecetas] = useState([]);
    const [dificultades, setDificultades] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {

                const dificultadesData = await GET("Dificultades/Get");
                setDificultades(dificultadesData.data);
                const recetasData = await GET("Recetas/Get");
                setRecetas(recetasData.data);
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
        setRecetas((prevRecetas) => { //Este metodo filtra q solo se muestren las recetas que el id sea dif al q se acaba d eliminar
            const recetasActualizadas = prevRecetas.filter((receta) => receta.receta_id !== id)
            return recetasActualizadas;
        });

    };

    // const handleEdit = (editedRecipe) => {
    //     setRecetas((prevRecetas) => { 
    //         const recipeIndex = recetas.findIndex(receta => receta.receta_id === editedRecipe.id);
    //         if(recipeIndex === -1){
    //             return recetas;
    //         }
    //         const recetasActualizadas = prevRecetas;
    //         recetasActualizadas[recipeIndex] = {...recetasActualizadas[recipeIndex], ...editedRecipe };
    //         return recetasActualizadas;
    //     });
    // };

    return (
        <>
            <div className="container px-6 pt-20 pb-5 mx-auto">
                <h1 className="text-center text-yellow-950 text-5xl font-bold tracking-wide">Mis recetas</h1>
            </div>

            <div className="grid gap-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
                {recetas && recetas.length > 0 ? (
                    recetas.map((receta, receta_id) => (
                        <div key={receta_id}>
                            <Cards
                                id={receta.receta_id}
                                title={receta.nombre}
                                ingredients={receta.ingredientes}
                                servings={receta.porciones}
                                difficulty={getDificultad(receta.fk_dificultad)}
                                fk_dificultad={receta.fk_dificultad}
                                description={receta.receta}
                                onDelete={handleDelete}
                                // onEdit ={handleEdit}
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