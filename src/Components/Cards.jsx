import React from "react";
import Modal from "./Modal";
import { useState } from 'react'
import EditModal from "./EditModal";
import { PATCH } from "../Services/Fetch";
const Cards = (props) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [editedData, setEditedData] = useState({
        title: props.title,
        description: props.description,
        ingredients: props.ingredients,
        servings: props.servings,
        difficulty: props.difficulty
    });
    const openModal = () => {
        setIsModalOpen(true);
    }

    const closeModal = () => {
        setIsModalOpen(false);
    }

    const openEditModal = () => {
        setIsEditModalOpen(true);
    };
    const closeEditModal = () => {
        setIsEditModalOpen(false);
        setEditedData({
            title: props.title,
            ingredients: props.ingredients,
            servings: props.servings,
            difficulty: props.difficulty,
            description: props.description
        });
    };
    const handleEditChange = (e) => {
        const { name, value } = e.target;
        setEditedData((prevState) => ({
            ...prevState, [name]: value,

        }));
    };
    const saveEdit = async () => {
        const url = `Recetas/Patch/${props.id}`;
        const response = await PATCH(url, editedData);
        if (response.ok) {
            alert("Receta editada exitosamente!");
            closeEditModal();
        }
        else {
            alert("Hubo un problema al editar la receta.");
        }
    };
    const deleteRecipe = async () => {
        const url = `Recetas/Delete/${props.id}`;
        const confirmDelete = window.confirm("¿Estás seguro de que quieres eliminar esta receta?");
        if (confirmDelete) {
          try {
            const response = await DELETE(url); // 
            if (response.ok) {
              alert("Receta eliminada exitosamente!");
              props.onDelete(props.id); 
            } else {
              alert("Hubo un problema al eliminar la receta.");
            }
          } catch (error) {
            console.error("Error eliminando la receta:", error);
            alert("Ocurrió un error al eliminar la receta.");
          }
        }
      };
      
    return (
        <div className="bg-white rounded-md overflow-hidden relative shadow-md">
            {/*
             <div>
                <img class="w-full" src={props.img} alt={props.title} />
            </div>*/}
            <div className="p-4">
                <h2 className="text-2xl text-stone-600">{props.title}</h2>
                <div className="flex justify-between mt-4 mb-4 text-gray-500">
                    <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                            <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                        </svg>
                        <span className="ml-1 lg:text-xl">{props.ingredients}</span>
                    </div>
                    <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                        </svg>
                        <span className="ml-1 lg:text-xl">{props.servings}</span>
                    </div>
                </div>

                <button
                    className="text-white bg-stone-400 hover:bg-stone-600 p-4 rounded-md w-full uppercase"
                    onClick={openModal}
                >Instrucciones</button>
                <div className="flex space-x-2 mt-4">
                    <button className="text-white bg-gray-600 hover:bg-gray-700 p-2 rounded-md w-full uppercase" onClick={openEditModal} > Editar </button>
                    <button className="text-white bg-gray-600 hover:bg-gray-700 p-2 rounded-md w-full uppercase"  onClick={deleteRecipe} > Eliminar </button>
                </div>
            </div>
            <div className="absolute top-0 right-0 mt-4 mr-4 bg-stone-500 text-white rounded-full pt-1 pb-1 pl-4 pr-5 text-xs uppercase">
                <span>{props.difficulty}</span>
            </div>
            {/* Modal Component */}
            {isModalOpen && (
                <Modal
                    title={props.title}
                    description={props.description}
                    closeModal={closeModal}
                />
            )}
            {/* Edit Modal Component */}
            {isEditModalOpen && (
                <EditModal
                    title={editedData.title}
                    ingredients={editedData.ingredients}
                    servings={editedData.servings}
                    difficulty={editedData.difficulty}
                    description={editedData.description}
                    onChange={handleEditChange}
                    onSave={saveEdit}
                    onClose={closeEditModal}
                />
            )}
        </div>
    );

}
export default Cards;