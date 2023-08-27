import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./pages/navbar/Navbar";
import Content from "./pages/content/Content";
import Overview from "./pages/overview/Overview";
import Create from "./pages/create/Create";
import Footer from "./pages/footer/Footer";
import { Datos } from "./pages/contexto/Contexto";

function App() {
  // const [carddetalles, setCardDetalles] = useState(false);
  // const [cardontext, setCardContext] = useState(true);

  return (
    <Datos>
      <div>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route path="/" element={<Overview />} />
            <Route path="content" element={<Content />} />
            <Route path="create" element={<Create />} />
          </Route>
        </Routes>
        <Footer />
      </div>
    </Datos>
  );
}

export default App;
