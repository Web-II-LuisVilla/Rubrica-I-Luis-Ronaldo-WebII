import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./pages/navbar/Navbar";
import Footer from "./pages/footer/Footer";
import { Datos } from "./pages/contexto/Contexto";
import CardContext from "./pages/create/CardContext";
import Cardoverview from "./pages/cardoverview/Cardoverview"
import Carddetalles from "./pages/carddetalles/Carddetalles"

function App() {

  return (
    <Datos>
      <div>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route path="/" element={<Cardoverview />} />
            <Route path="carddetalles" element={<Carddetalles />} />
            <Route path="cardcontext" element={<CardContext />} />
          </Route>
        </Routes>
        <Footer />
      </div>
    </Datos>
  );
}

export default App;
