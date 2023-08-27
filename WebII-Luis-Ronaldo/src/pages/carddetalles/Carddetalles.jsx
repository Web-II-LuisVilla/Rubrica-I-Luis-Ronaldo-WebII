import React, { useState, useContext } from "react";
import './Carddetalles.css'
import { Contexto } from "../contexto/Contexto";

const Carddetalles = () => {
  const {cards} = useContext(Contexto);

  // const [selectedCategory, setSelectedCategory] = useState("Seleccionar");
  
  // const filteredCards = selectedCategory === "Seleccionar" ? cards
  // : cards.filter((card) => card.categoria === selectedCategory);



  const cardData = [
    {
      image:"https://imageneschidas.mx/wp-content/uploads/fotos-del-real-madrid.jpg",
      titulo: "Titulo",
      descripcion: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident, impedit! Laudantium ratione culpa ipsum quidem! Error maiores magni accusamus minus illo tenetur. Animi quisquam reiciendis cupiditate facilis dolorum? Consequatur, placeat?",
      categoria: "Futbol",
      equipo1: "equipo1",
      equipo2: "equipo2",
      equipo3: "equipo3",
    },

    {
      image: "https://www.lifequestalliance.com/wp-content/uploads/2021/05/2022-Alfa-Romeo-Tonale-spy-for-sale-giulia-how-much-will-the-cost--768x462.jpg",
      titulo: "Titulo",
      descripcion: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident, impedit! Laudantium ratione culpa ipsum quidem! Error maiores magni accusamus minus illo tenetur. Animi quisquam reiciendis cupiditate facilis dolorum? Consequatur, placeat?",
      categoria: "Carro",
      equipo1: "equipo1",
      equipo2: "equipo2",
      equipo3: "equipo3",
    },

    {
      image: "https://i2.wp.com/consolaytablero.com/wp-content/uploads/2017/12/Domino.jpg",
      titulo: "Titulo",
      descripcion: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident, impedit! Laudantium ratione culpa ipsum quidem! Error maiores magni accusamus minus illo tenetur. Animi quisquam reiciendis cupiditate facilis dolorum? Consequatur, placeat?",
      categoria: "Mesa",
      equipo1: "equipo1",
      equipo2: "equipo2",
      equipo3: "equipo3",
    },

    {
      image: "https://futbolete.com/wp-content/uploads/2020/11/Seleccion-Colombia-tambien-desmiente-agresiones-en-el-equipo.jpg",
      titulo: "Titulo",
      descripcion: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident, impedit! Laudantium ratione culpa ipsum quidem! Error maiores magni accusamus minus illo tenetur. Animi quisquam reiciendis cupiditate facilis dolorum? Consequatur, placeat?",
      categoria: "Futbol",
      equipo1: "equipo1",
      equipo2: "equipo2",
      equipo3: "equipo3",
    },

    {
      image: "https://motorshow.com.br/wp-content/uploads/sites/2/2019/03/nota-bugatti-la-voiture-noir-4.jpg",
      titulo: "Titulo",
      descripcion: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident, impedit! Laudantium ratione culpa ipsum quidem! Error maiores magni accusamus minus illo tenetur. Animi quisquam reiciendis cupiditate facilis dolorum? Consequatur, placeat?",
      categoria: "Carro",
      equipo1: "equipo1",
      equipo2: "equipo2",
      equipo3: "equipo3",
    },

    {
      image: "https://cdn.20m.es/img2/recortes/2017/12/06/595411-736-432.jpg",
      titulo: "Titulo",
      descripcion: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident, impedit! Laudantium ratione culpa ipsum quidem! Error maiores magni accusamus minus illo tenetur. Animi quisquam reiciendis cupiditate facilis dolorum? Consequatur, placeat?",
      categoria: "Mesa",
      equipo1: "equipo1",
      equipo2: "equipo2",
      equipo3: "equipo3",
    },

    {
      image: "https://besthqwallpapers.com/Uploads/12-5-2018/52275/thumb2-club-deportivo-popular-junior-atletico-junior-fc-4k-logo-colombian-football-club.jpg",
      titulo: "Titulo",
      descripcion: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident, impedit! Laudantium ratione culpa ipsum quidem! Error maiores magni accusamus minus illo tenetur. Animi quisquam reiciendis cupiditate facilis dolorum? Consequatur, placeat?",
      categoria: "Futbol",
      equipo1: "equipo1",
      equipo2: "equipo2",
      equipo3: "equipo3",
    },

    {
      image: "http://3.bp.blogspot.com/-nIQl0upTpXU/Ud33_LiajOI/AAAAAAAAAGI/2LdQtALBOfs/s1600/corvette-stingray-detroit-5.jpg",
      titulo: "Titulo",
      descripcion: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident, impedit! Laudantium ratione culpa ipsum quidem! Error maiores magni accusamus minus illo tenetur. Animi quisquam reiciendis cupiditate facilis dolorum? Consequatur, placeat?",
      categoria: "Carro",
      equipo1: "equipo1",
      equipo2: "equipo2",
      equipo3: "equipo3",
    },

    {
      image: "http://blog.redbus.pe/wp-content/uploads/2020/03/cuatrocartas-5b23ebee3de423003604fb01-scaled.jpg",
      titulo: "Titulo",
      descripcion: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident, impedit! Laudantium ratione culpa ipsum quidem! Error maiores magni accusamus minus illo tenetur. Animi quisquam reiciendis cupiditate facilis dolorum? Consequatur, placeat?",
      categoria: "Mesa",
      equipo1: "equipo1",
      equipo2: "equipo2",
      equipo3: "equipo3",
    },
  ];

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
