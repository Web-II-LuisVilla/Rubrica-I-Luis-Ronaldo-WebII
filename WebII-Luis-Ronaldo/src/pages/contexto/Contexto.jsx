import { createContext, useState } from "react";

export const Contexto = createContext();

export const Datos = ({ children }) => {

const [cardData, setCardData] = useState([
    {
      image:
        "https://imageneschidas.mx/wp-content/uploads/fotos-del-real-madrid.jpg",
      titulo: "Real Madrid",
      descripcion:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident, impedit! Laudantium ratione culpa ipsum quidem! Error maiores magni accusamus minus illo tenetur. Animi quisquam reiciendis cupiditate facilis dolorum? Consequatur, placeat?",
      categoria: "Futbol",
      equipo1: "Junior",
      equipo2: "FCF",
      equipo3: "Real Madrid",
    },

    {
      image:
        "https://www.lifequestalliance.com/wp-content/uploads/2021/05/2022-Alfa-Romeo-Tonale-spy-for-sale-giulia-how-much-will-the-cost--768x462.jpg",
      titulo: "Suv",
      descripcion:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident, impedit! Laudantium ratione culpa ipsum quidem! Error maiores magni accusamus minus illo tenetur. Animi quisquam reiciendis cupiditate facilis dolorum? Consequatur, placeat?",
      categoria: "Carro",
      equipo1: "Alfa Romeo",
      equipo2: "Bugatti",
      equipo3: "Corvette",
    },

    {
      image:
        "https://i2.wp.com/consolaytablero.com/wp-content/uploads/2017/12/Domino.jpg",
      titulo: "Domino",
      descripcion:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident, impedit! Laudantium ratione culpa ipsum quidem! Error maiores magni accusamus minus illo tenetur. Animi quisquam reiciendis cupiditate facilis dolorum? Consequatur, placeat?",
      categoria: "Mesa",
      equipo1: "Poker",
      equipo2: "Mental",
      equipo3: "Estrategia",
    },

    {
      image:
        "https://futbolete.com/wp-content/uploads/2020/11/Seleccion-Colombia-tambien-desmiente-agresiones-en-el-equipo.jpg",
      titulo: "FCF",
      descripcion:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident, impedit! Laudantium ratione culpa ipsum quidem! Error maiores magni accusamus minus illo tenetur. Animi quisquam reiciendis cupiditate facilis dolorum? Consequatur, placeat?",
      categoria: "Futbol",
      equipo1: "Junior",
      equipo2: "FCF",
      equipo3: "Real Madrid",
    },

    {
      image:
        "https://motorshow.com.br/wp-content/uploads/sites/2/2019/03/nota-bugatti-la-voiture-noir-4.jpg",
      titulo: "De lujo",
      descripcion:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident, impedit! Laudantium ratione culpa ipsum quidem! Error maiores magni accusamus minus illo tenetur. Animi quisquam reiciendis cupiditate facilis dolorum? Consequatur, placeat?",
      categoria: "Carro",
      equipo1: "Alfa Romeo",
      equipo2: "Bugatti",
      equipo3: "Corvette",
    },

    {
      image: "https://cdn.20m.es/img2/recortes/2017/12/06/595411-736-432.jpg",
      titulo: "Parques",
      descripcion:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident, impedit! Laudantium ratione culpa ipsum quidem! Error maiores magni accusamus minus illo tenetur. Animi quisquam reiciendis cupiditate facilis dolorum? Consequatur, placeat?",
      categoria: "Mesa",
      equipo1: "Poker",
      equipo2: "Mental",
      equipo3: "Estrategia",
    },

    {
      image:
        "https://besthqwallpapers.com/Uploads/12-5-2018/52275/thumb2-club-deportivo-popular-junior-atletico-junior-fc-4k-logo-colombian-football-club.jpg",
      titulo: "Junior",
      descripcion:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident, impedit! Laudantium ratione culpa ipsum quidem! Error maiores magni accusamus minus illo tenetur. Animi quisquam reiciendis cupiditate facilis dolorum? Consequatur, placeat?",
      categoria: "Futbol",
      equipo1: "Junior",
      equipo2: "FCF",
      equipo3: "Real Madrid",
    },

    {
      image:
        "http://3.bp.blogspot.com/-nIQl0upTpXU/Ud33_LiajOI/AAAAAAAAAGI/2LdQtALBOfs/s1600/corvette-stingray-detroit-5.jpg",
      titulo: "Deportivo",
      descripcion:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident, impedit! Laudantium ratione culpa ipsum quidem! Error maiores magni accusamus minus illo tenetur. Animi quisquam reiciendis cupiditate facilis dolorum? Consequatur, placeat?",
      categoria: "Carro",
      equipo1: "Alfa Romeo",
      equipo2: "Bugatti",
      equipo3: "Corvette",
    },

    {
      image:
        "http://blog.redbus.pe/wp-content/uploads/2020/03/cuatrocartas-5b23ebee3de423003604fb01-scaled.jpg",
      titulo: "Cartas",
      descripcion:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident, impedit! Laudantium ratione culpa ipsum quidem! Error maiores magni accusamus minus illo tenetur. Animi quisquam reiciendis cupiditate facilis dolorum? Consequatur, placeat?",
      categoria: "Mesa",
      equipo1: "Poker",
      equipo2: "Mental",
      equipo3: "Estrategia",
    },
]);

return (
    <Contexto.Provider value={{cardData, setCardData}}>{children}</Contexto.Provider>
);
};
