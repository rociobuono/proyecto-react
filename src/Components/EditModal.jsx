
import React, { useState, useEffect } from "react";
import { GET } from "../Services/Fetch";

const EditModal = ({ nombre, ingredientes, porciones, fk_dificultad, receta, onChange, onSave, onClose }) => {
  const [dificultades, setDificultades] = useState([]);
  useEffect(() => {
    const fetchDificultades = async () => {
      try {

        const data = await GET("Dificultades/Get");
        setDificultades(data.data);
      } catch (error) {
        console.error("Error en la petición:", error);
      }
    };
    fetchDificultades();
  }, []);
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white p-4 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-4">Editar Receta</h2>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Título</label>
          <input
            type="text"
            name="nombre"
            value={nombre}
            onChange={onChange}
            className="w-full px-3 py-2 border rounded-lg"
            required
            maxLength={20}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Descripción</label>
          <textarea
            name="receta"
            value={receta}
            onChange={onChange}
            className="w-full px-3 py-2 border rounded-lg"
            required
            maxLength={1000}
          ></textarea>

        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Ingredientes</label>
          <textarea
            type="number"
            name="ingredientes"
            value={ingredientes}
            onChange={onChange}
            className="w-full px-3 py-2 border rounded-lg"
            required
            maxLength={500}
          ></textarea>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Porciones</label>
          <input
            type="number"
            name="porciones"
            value={porciones}
            onChange={onChange}
            className="w-full px-3 py-2 border rounded-lg"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Dificultad</label>
          <select
            name="fk_dificultad"
            value={fk_dificultad}
            onChange={onChange}
            className="w-full px-3 py-2 border rounded-lg"
          >
            {dificultades.length === 0 ? (
              <option value="">Cargando dificultades...</option>
            ) : (
              dificultades.map((dificultad) => (
                <option key={dificultad.dificultad_id} value={dificultad.dificultad_id}> {dificultad.dificultad}
                </option>
              ))
            )}
          </select>
        </div>



        <div className="flex justify-end space-x-2">
          <button
            className="bg-red-500 hover:bg-red-700 text-white px-4 py-2 rounded-lg"
            onClick={onClose}
          >
            Cancelar
          </button>
          <button
            className="bg-green-500 hover:bg-green-700 text-white px-4 py-2 rounded-lg"
            onClick={onSave}
          >
            Guardar
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
