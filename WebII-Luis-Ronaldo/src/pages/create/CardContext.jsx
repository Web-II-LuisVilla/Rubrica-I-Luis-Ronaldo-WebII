import React, { useContext, useState } from "react";
import './Cardcontext.css'
import { Contexto } from "../contexto/Contexto";
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as Yup from "yup"

// const CardSchema = Yup.object().shape({
//     image: Yup.string()
//     .min(10, "El link de la imagen debe tener al menos 10 caracteres")
//     .max(200, "El link de la imagen debe tener al menos 50 caracteres")
//     .required("El campo imagen es requerida"),
//     titulo: Yup.string()
//     .min(3, "El título debe tener al menos 3 caracteres")
//     .max(20, "El título no debe tener más de 20 caracteres")
//     .required("El campo título es requerido"),
//     descripcion: Yup.string()
//     .min(50, "La descripción debe tener al menos 50 caracteres")
//     .max(200, "La descripción no debe tener más de 200 caracteres")
//     .required("El campo descripción es requerida"),
//     categoria: Yup.string().required("La categoría es requerida"),
//     equipo1: Yup.string()
//     .min(3, "El equipo 1 debe tener al menos 3 caracteres")
//     .max(15, "El equipo 1 no debe tener más de 15 caracteres")
//     .required("El campo equipo 1 es requerido"),
//     equipo2: Yup.string()
//     .min(3, "El equipo 2 debe tener al menos 3 caracteres")
//     .max(15, "El equipo 2 no debe tener más de 15 caracteres")
//     .required("El campo equipo 2 es requerido"),
//     equipo3: Yup.string()
//     .min(3, "El equipo 3 debe tener al menos 3 caracteres")
//     .max(15, "El equipo 3 no debe tener más de 15 caracteres")
//     .required("El campo equipo 3 es requerido"),
    
// })

const CardContext = () => {

const {cardData, setCardData} = useContext(Contexto)

const addCard = (newCard) => {
    const updatedCardData = [...cardData, newCard];
    setCardData(updatedCardData);
};

// const initialValues = {
//     image: "",
//     titulo: "",
//     descripcion: "",
//     categoria: "",
//     equipo1: "",
//     equipo2: "",
//     equipo3: "",
// }

const [formData, setFormData] = useState({
    image: "",
    titulo: "",
    descripcion: "",
    categoria: "",
    equipo1: "",
    equipo2: "",
    equipo3: "",
});

const handleInputChange = (event) => {
    const {value,name } = event.target;
    setFormData({
    ...formData,
    [name]: value,
    });
};

const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(formData)

    addCard(formData)

    setFormData({
    image: "",
    titulo: "",
    descripcion: "",
    categoria: "",
    equipo1: "",
    equipo2: "",
    equipo3: "",
    });
};

return (
    <div>
    <h2>Crear Nueva Tarjeta</h2>

    {/* <Formik 
    initialValues={initialValues}
    validationSchema={CardSchema}
    onSubmit={handleSubmit}
    > */}
    {/* {({ errors, touched }) => ( */}

    <form onSubmit={handleSubmit}>
        
        <div className="form-group">
        <label htmlFor="image">Imagen:</label>
        <input
            type="text"
            id="image"
            name="image"
            // className={errors.image && touched.image ? "error" : ""}
            value={formData.image}
            onChange={handleInputChange}
            />
            {/* <ErrorMessage name="image" component="div" className="error" /> */}
        </div>

        <div className="form-group">
        <label htmlFor="titulo">Título:</label>
        <input
            type="text"
            id="titulo"
            name="titulo"
            // className={errors.titulo && touched.titulo ? "error" : ""}
            value={formData.titulo}
            onChange={handleInputChange}
            />
            {/* <ErrorMessage name="titulo" component="div" className="error" /> */}
        </div>

        <div className="form-group">
        <label htmlFor="descripcion">Descripción:</label>
        <textarea
            id="descripcion"
            name="descripcion"
            // className={errors.descripcion && touched.descripcion ? "error" : ""}
            value={formData.descripcion}
            onChange={handleInputChange}
            />
            {/* <ErrorMessage name="descripcion" component="div" className="error" /> */}
        </div>

        <div className="form-group">
        <label htmlFor="categoria">Categoría:</label>
        <select
            id="categoria"
            name="categoria"
            // className={errors.categoria && touched.categoria ? "error" : ""}
            value={formData.categoria}
            onChange={handleInputChange}
            >
            <option value="Seleccionar">Seleccionar</option>
            <option value="Futbol">Futbol</option>
            <option value="Carro">Carro</option>
            <option value="Mesa">Mesa</option>
        </select>
        {/* <ErrorMessage name="categoria" component="div" className="error" /> */}
        </div>

        <div className="form-group">
        <label htmlFor="equipo1">Equipo 1:</label>
        <input
            type="text"
            id="equipo1"
            name="equipo1"
            // className={errors.equipo1 && touched.equipo1 ? "error" : ""}
            value={formData.equipo1}
            onChange={handleInputChange}
            />
            {/* <ErrorMessage name="equipo1" component="div" className="error" /> */}
        </div>

        <div className="form-group">
        <label htmlFor="equipo2">Equipo 2:</label>
        <input
            type="text"
            id="equipo2"
            name="equipo2"
            // className={errors.equipo2 && touched.equipo2 ? "error" : ""}
            value={formData.equipo2}
            onChange={handleInputChange}
            />
            {/* <ErrorMessage name="equipo2" component="div" className="error" /> */}
        </div>

        <div className="form-group">
        <label htmlFor="equipo3">Equipo 3:</label>
        <input
            type="text"
            id="equipo3"
            name="equipo3"
            // className={errors.equipo3 && touched.equipo3 ? "error" : ""}
            value={formData.equipo3}
            onChange={handleInputChange}
            />
            {/* <ErrorMessage name="equipo3" component="div" className="error" /> */}
        </div>

        <button type="submit">Crear Tarjeta</button>
    </form>
            {/* // )} */}
             {/* </Formik> */}
    </div>
);
};

export default CardContext;
