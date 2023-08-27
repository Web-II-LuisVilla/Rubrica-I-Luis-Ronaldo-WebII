import React, { useState, useEffect } from "react";
import "./Cardoverview.css";

const Cardoverview = () => {
  const cardData = [
    {
      image:
        "https://media.vidaenyucatan.com/wp-content/uploads/2019/11/11093354/barbara-zandoval-lPUD8oldJvE-unsplash-scaled.jpg",
      titulo: "Titulo 1",
      descripcion: "Descripcion 1",
    },
    {
      image:
        "https://www.palabrabcs.com/wp-content/uploads/2020/09/Presentan-lluvias.jpg", // Replace with an actual image URL
      titulo: "Titulo 2",
      descripcion: "Descripcion 2",
    },
    {
      image:
        "http://3.bp.blogspot.com/-vVWjvo7XLe8/UeW-PWgThmI/AAAAAAAAcWU/QiTatlKxwEI/s1600/imagenes-de-paisajes+(5).jpg", // Replace with an actual image URL
      titulo: "Titulo 3",
      descripcion: "Descripcion 3",
    },
    {
      image:
        "http://3.bp.blogspot.com/-yttNm725u6Q/UIgpCrY7GWI/AAAAAAAAE78/LI7j8rwE6Ds/s1600/paisaje_otono.jpg", // Replace with an actual image URL
      titulo: "Titulo 4",
      descripcion: "Descripcion 4",
    },
  ];

  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (index) => {
    if (favorites.includes(index)) {
      const updatedFavorites = favorites.filter((item) => item !== index);
      setFavorites(updatedFavorites);
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    } else {
      const updatedFavorites = [...favorites, index];
      setFavorites(updatedFavorites);
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    }
  };

  useEffect(() => {
    // Load favorites from localStorage only after the component has mounted
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, []); // Empty dependency array ensures this effect runs only once on mount

  return (
    <>
      <div className="container">
        {cardData.map((item, index) => (
          <div className="card" key={index}>
            <figure>
              <img src={item.image} alt="" />
            </figure>
            <div className="contenido">
              <h3>{item.titulo}</h3>
              <p>{item.descripcion}</p>
              <button
                onClick={() => toggleFavorite(index)}
                className={favorites.includes(index) ? "favorite" : ""}
              >
                {favorites.includes(index) ? "❤️" : "🤍"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Cardoverview;
