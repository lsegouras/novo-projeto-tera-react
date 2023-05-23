import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./components/pages/Home";
import "../src/components/styles/style.css"
import Cadastro from "./components/pages/Cadastro";
import "../src/components/styles/cadastro.css"
import Forgot from "./components/pages/Forgot"
import "../src/components/styles/forgot.css"
import Login from "./components/pages/Login"
import "./components/styles/login.css"
import Privacidade from "./components/pages/Privacidade"
import "./components/styles/privacidade.css"
import Proprietario from "./components/pages/Proprietarios"
import "./components/styles/proprietario.css"
import Resultados from "./components/pages/Resultados"
import "./components/styles/resultados.css"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/forgot" element={<Forgot />} />
        <Route path="/login" element={<Login />} />
        <Route path="/privacidade" element={<Privacidade />} />
        <Route path="/proprietario" element={<Proprietario />} />
        <Route path="/resultados" element={<Resultados />} />
    
      </Routes>  
    </BrowserRouter>
  )
  }
    
export default App;
