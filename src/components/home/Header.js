import React, { useState } from "react";
import mainPhoto from "../img/index/main.jpg";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [tipo, setTipo] = useState("");
  const [estado, setEstado] = useState("");
  const [valor, setValor] = useState("");
  const [tamanho, setTamanho] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const queryParams = new URLSearchParams({
      tipo,
      estado,
      valor,
      tamanho,
    });

    navigate(`/resultados?${queryParams.toString()}`);
  };
  return (
    <div className="header-content">
      <div className="left">
        <h1 className="form-title">Encontre a loja dos seus sonhos!</h1>
        <form className="formulario" onSubmit={handleSubmit}>
          {" "}
          <label htmlFor="tipo">Tipo:</label>
          <select name="tipo" id="tipo">
            <option value="">Todos</option>
            <option value="Quiosque">Quiosque</option>
            <option value="Restaurante">Restaurante</option>
            <option value="Loja">Loja de Shopping</option>
            <option value="Box">Box</option>
          </select>
          <label htmlFor="estado">Estado:</label>
          <select name="estado" id="estado">
            <option value="">Todos</option>
            <option value="Rio de Janeiro">Rio de Janeiro</option>
            <option value="Sao Paulo">São Paulo</option>
          </select>
          <label htmlFor="valor">Valor:</label>
          <select name="valor" id="valor">
            <option value="">Todos</option>
            <option value="ate8000">Até R$8.000/mês</option>
            <option value="8000a15000">De R$8.000 a R$15.000/mês</option>
            <option value="acima15000">Acima de R$15.000/mês</option>
          </select>
          <label htmlFor="tamanho">Tamanho:</label>
          <select name="tamanho" id="tamanho">
            <option value="">Todos</option>
            <option value="ate50">Até 50m²</option>
            <option value="50a100">De 50m² a 100m²</option>
            <option value="100a200">De 100m² a 200m²</option>
          </select>
          <Link to="/resultados">
            <button type="submit">Filtrar</button>
          </Link>
        </form>
      </div>
      <div className="right">
        <img
          src={mainPhoto}
          alt="Mulher sorrindo, segurando sacolas cheias de compras"
          className="header-img"
        />
      </div>
    </div>
  );
};

export default Header;
