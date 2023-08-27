import React, { useState, useContext } from "react";
import './Carddetalles.css'
import { Contexto } from "../contexto/Contexto";

const Carddetalles = () => {
  const {cardData} = useContext(Contexto);

  const [selectedCategory, setSelectedCategory] = useState("Seleccionar");

  const filteredCards = selectedCategory === "Seleccionar" ? cardData
      : cardData.filter((card) => card.categoria === selectedCategory);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <div>
      <select value={selectedCategory} onChange={handleCategoryChange}>
        <option value="Seleccionar">Seleccionar</option>
        <option value="Futbol">Futbol</option>
        <option value="Carro">Carro</option>
        <option value="Mesa">Mesa</option>
      </select>

      <div className="card-container">
        {filteredCards.map((card, index) => (
          <div className="card" key={index}>
            <figure>
              <img src={card.image} alt="" />
            </figure>
            <div className="contenido">
              <h3>{card.titulo}</h3>
              <p>{card.descripcion}</p>
              <h4>Categoria: {card.categoria}</h4>
              <h4>Equipo 1: {card.equipo1}</h4>
              <h4>Equipo 2: {card.equipo2}</h4>
              <h4>Equipo 3: {card.equipo3}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
    
  );
};
export default Carddetalles;
