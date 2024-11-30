import React, { useState, useEffect } from "react";
import Buttons from "../Components/Buttons";
import { POST } from "../Services/Fetch";
import { data } from "autoprefixer";
import { GET } from "../Services/Fetch";
const url = "Recetas/post"

const Agregar = () => {

  const [dificultades, setDificultades] = useState([]);
  const [formData, setFormData] = useState({
    nombre: "",
    receta: "",
    ingredientes: "",
    porciones: "",
    fk_dificultad: 1,
  });
 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };


  const agregarReceta = async (e) => {
    e.preventDefault();
    if (!formData.nombre || !formData.receta || !formData.ingredientes || !formData.porciones) {
      window.alert("Complete los campos para continuar.");
      return;
    }
    const response = await POST(url, formData);
    console.log(response);
    if (response.success) {
      alert("Receta agregada exitosamente!");
      limpiarCampos();

    } else {
      alert("Hubo un problema al agregar la receta.");
    }
  };

  useEffect(() => {
    const fetchDificultades = async () => {
      try {

        const data = await GET("Dificultades/Get");
        console.log(data.data);
        setDificultades(data.data);
      } catch (error) {
        console.error("Error en la petición:", error);
      }
    };
    fetchDificultades();
  }, []);

  const limpiarCampos = () => {
    setFormData({
      nombre: "",
      receta: "",
      ingredientes: "",
      porciones: "",
      fk_dificultad: "",
    })
  }
  
  return (
    <div className="p-8 bg-gray-100 h-screen flex justify-center items-center">
      <form
        onSubmit={agregarReceta}
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
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg"
            placeholder="Ej: Pastel de Chocolate"
            required
            maxLength={20}
          />

        </div>

        {/* Campo Descripción */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Descripción:
          </label>
          <textarea
            name="receta"
            id="receta"
            value={formData.receta}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg"
            placeholder="Descripción breve de la receta"
            required
            maxLength={1000}
          ></textarea>
        </div>

        {/* Campo Ingredientes */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Ingredientes (separados por comas):
          </label>
          <textarea
            name="ingredientes"
            id="ingredientes"
            value={formData.ingredientes}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg"
            placeholder="Ej: Harina, Azúcar, Huevos"
            required
            maxLength={500}
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
            min= "1"
            max="100"
            required
          />
        </div>

        {/* Select Dificultad */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Dificultad:
          </label>
          <select
            name="fk_dificultad"
            value={formData.fk_dificultad}
            onChange={handleChange}
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

        {/* Botón de Enviar */}
        <Buttons
          type="submit"
          className="w-full bg-stone-500 text-white font-medium py-2 rounded-lg hover:bg-stone-600"
          //callback={() => { agregarReceta() }}
          txt={'Agregar Receta'}
        />
      </form>
    </div>
  );
};


export default Agregar;
