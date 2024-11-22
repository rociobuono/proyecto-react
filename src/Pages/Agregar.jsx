import React, { useState } from "react";
import Buttons from "../Components/Buttons";

const Agregar = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    descripcion: "",
    tiempo: "",
    ingredientes: "",
    porciones: "",
    dificultad: "Fácil", // Valor predeterminado
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const agregarReceta = (e) => {
    e.preventDefault();
    console.log("Datos de la receta:", formData);
    // Aquí podrías agregar una llamada a una API o lógica adicional para enviar los datos.
    alert("Receta agregada exitosamente!");
  };

  return (
    <div className="p-8 bg-gray-100 h-screen flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white p-6 rounded-lg shadow-md"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Agregar Receta</h2>

        {/* Campo Nombre */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Nombre de la receta:
          </label>
          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg"
            placeholder="Ej: Pastel de Chocolate"
            required
          />
        </div>

        {/* Campo Descripción */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Descripción:
          </label>
          <textarea
            name="descripcion"
            value={formData.descripcion}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg"
            placeholder="Descripción breve de la receta"
            required
          ></textarea>
        </div>

        {/* Campo Tiempo */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Tiempo (en minutos):
          </label>
          <input
            type="number"
            name="tiempo"
            value={formData.tiempo}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg"
            placeholder="Ej: 45"
            required
          />
        </div>

        {/* Campo Ingredientes */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Ingredientes (separados por comas):
          </label>
          <textarea
            name="ingredientes"
            value={formData.ingredientes}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg"
            placeholder="Ej: Harina, Azúcar, Huevos"
            required
          ></textarea>
        </div>

        {/* Campo Porciones */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Porciones:
          </label>
          <input
            type="number"
            name="porciones"
            value={formData.porciones}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg"
            placeholder="Ej: 4"
            required
          />
        </div>

        {/* Select Dificultad */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Dificultad:
          </label>
          <select
            name="dificultad"
            value={formData.dificultad}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg"
          >
            <option value="Fácil">Fácil</option>
            <option value="Intermedia">Intermedia</option>
            <option value="Difícil">Difícil</option>
          </select>
        </div>

        {/* Botón de Enviar */}
        <Buttons
            type="submit"
             className="w-full bg-stone-500 text-white font-medium py-2 rounded-lg hover:bg-stone-600"
             callback={() => { agregarReceta() }}
             txt={'Agregar Receta'}
        />   
      </form>
    </div>
  );
};

export default Agregar;
