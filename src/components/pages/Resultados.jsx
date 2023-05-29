/* eslint jsx-a11y/anchor-is-valid: 0 */
import React, { useState, useEffect } from "react";
import "../styles/resultados.css";
import acbrasil from "../img/cards/acbrazil.jpeg";
import acium from "../img/cards/acium.jpg";
import baciodilatte from "../img/cards/baciodilatte.jpg";
import boticario from "../img/cards/boticario.jpg";
import botoclinic from "../img/cards/botoclinic.jpg";
import brasilcacau from "../img/cards/brasilcacau.jpg";
import cabana from "../img/cards/cabana.png";
import cantao from "../img/cards/cantao.jpg";
import chillibeans from "../img/cards/chillibeans.jpg";
import gendai from "../img/cards/gendai.jpg";
import kfc from "../img/cards/kfc.jpg";
import mammajamma from "../img/cards/mammajamma.webp";
import oakberry from "../img/cards/oakberry.jpg";
import peahi from "../img/cards/peahi.jpg";
import polishop from "../img/cards/polishop.jpg";
import rommanel from "../img/cards/rommanel.jpg";
import starbucks from "../img/cards/starbucks.jpg";
import thecoffee from "../img/cards/thecoffee.jpg";
import tokstok from "../img/cards/tokstok.jpg";
import propet from "../img/cards/propet.jpg";
import uza from "../img/cards/uza.jpg";
import Footer from "../home/Footer";
import Navbar from "../home/Nav";

export default function Resultados() {
  const cardsData = [
    {
      imgSrc: require("../img/cards/acbrazil.jpeg"),
      title: "AC Brazil",
      estado: "São Paulo",
      descricao: "Loja de shopping. 80m²",
      valor: "R$ 15.000/mês",
    },
    {
      imgSrc: "../img/cards/acium.jpg",
      title: "Acium",
      estado: "São Paulo",
      descricao: "Quiosque. 10m²",
      valor: "R$ 4.000/mês",
    },
    {
      imgSrc: "../img/cards/baciodilatte.jpg",
      title: "Bacio di Latte",
      estado: "Rio de Janeiro",
      descricao: "Restaurante. 50m²",
      valor: "R$ 12.000/mês",
    },
    {
      imgSrc: "../img/cards/boticario.jpg",
      title: "O Boticário",
      estado: "Rio de Janeiro",
      descricao: "Quiosque. 15m²",
      valor: "R$ 6.000/mês",
    },
    {
      imgSrc: "../img/cards/botoclinic.jpg",
      title: "Botoclinic",
      estado: "Rio de Janeiro",
      descricao: "Loja de shopping. 150m²",
      valor: "R$ 20.000/mês",
    },
    {
      imgSrc: "../img/cards/brasilcacau.jpg",
      title: "Chocolates Brasil Cacau",
      estado: "São Paulo",
      descricao: "Quiosque. 12m²",
      valor: "R$ 6.000/mês",
    },
    {
      imgSrc: "../img/cards/cabana.png",
      title: "Cabana Burger",
      estado: "São Paulo",
      descricao: "Restaurante. 70m²",
      valor: "R$ 16.000/mês",
    },
    {
      imgSrc: "../img/cards/cantao.jpg",
      title: "Cantao",
      estado: "Rio de Janeiro",
      descricao: "Loja de shopping. 65m²",
      valor: "R$ 14.000/mês",
    },
    {
      imgSrc: "../img/cards/chillibeans.jpg",
      title: "Chilli Beans",
      estado: "São Paulo",
      descricao: "Quiosque. 18m²",
      valor: "R$ 7.000/mês",
    },
    {
      imgSrc: "../img/cards/gendai.jpg",
      title: "Gendai",
      estado: "São Paulo",
      descricao: "Restaurante. 160m²",
      valor: "R$ 18.000/mês",
    },
    {
      imgSrc: "../img/cards/kfc.jpg",
      title: "KFC",
      estado: "São Paulo",
      descricao: "Restaurante. 55m²",
      valor: "R$ 11.000/mês",
    },
    {
      imgSrc: "../img/cards/mammajamma.webp",
      title: "Mamma Jamma",
      estado: "Rio de Janeiro",
      descricao: "Restaurante. 180m²",
      valor: "R$ 19.000/mês",
    },
    {
    imgSrc: "../img/cards/oakberry.jpg",
      title: "Oakberry",
      estado: "Rio de Janeiro",
    }
  ];

  useEffect(() => {
  }, []);
  

    
  return (
    <div>
      <Navbar />

      <main>
        <h1 className="results-title">Encontre a loja dos seus sonhos!</h1>
        <div className="container">
          <div className="row">
            <div className="container-cards">
              <div className="row" id="cards">
                {cardsData.map((card, index) => (
                  <div
                    key={index}
                    className="col-md-4 card-group"
                    data-tipo={card.tipo}
                    data-estado={card.estado}
                    data-valor={card.valor}
                    data-tamanho={card.tamanho}
                  >
                    <div className="card">
                      <img
                        src={card.imgSrc}
                        className="card-img-results"
                        alt={card.title}
                      />
                      <div className="card-body">
                        <h5 className="card-title">{card.title}</h5>
                        <p className="card-text">
                          <small className="text-muted">{card.estado}</small>
                        </p>
                        <p className="card-text">
                          <small className="text-muted">{card.descricao}</small>
                        </p>
                        <p className="card-text">
                          <small className="text-muted">{card.valor}</small>
                        </p>
                          <a href="#" className="btn btn-primary">
                          Ver detalhes
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
