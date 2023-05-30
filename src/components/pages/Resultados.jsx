/* eslint jsx-a11y/anchor-is-valid: 0 */
import React from "react";
import "../styles/resultados.css";
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
      imgSrc: require("../img/cards/acium.jpg"),
      title: "Acium",
      estado: "São Paulo",
      descricao: "Quiosque. 10m²",
      valor: "R$ 4.000/mês",
    },
    {
      imgSrc: require("../img/cards/baciodilatte.jpg"),
      title: "Bacio di Latte",
      estado: "Rio de Janeiro",
      descricao: "Restaurante. 50m²",
      valor: "R$ 12.000/mês",
    },
    {
      imgSrc: require("../img/cards/boticario.jpg"),
      title: "O Boticário",
      estado: "Rio de Janeiro",
      descricao: "Quiosque. 15m²",
      valor: "R$ 6.000/mês",
    },
    {
      imgSrc: require("../img/cards/botoclinic.jpg"),
      title: "Botoclinic",
      estado: "Rio de Janeiro",
      descricao: "Loja de shopping. 150m²",
      valor: "R$ 20.000/mês",
    },
    {
      imgSrc: require("../img/cards/brasilcacau.jpg"),
      title: "Chocolates Brasil Cacau",
      estado: "São Paulo",
      descricao: "Quiosque. 12m²",
      valor: "R$ 6.000/mês",
    },
    {
      imgSrc: require("../img/cards/cabana.png"),
      title: "Cabana Burger",
      estado: "São Paulo",
      descricao: "Restaurante. 70m²",
      valor: "R$ 16.000/mês",
    },
    {
      imgSrc: require("../img/cards/cantao.jpg"),
      title: "Cantao",
      estado: "Rio de Janeiro",
      descricao: "Loja de shopping. 65m²",
      valor: "R$ 14.000/mês",
    },
    {
      imgSrc: require("../img/cards/chillibeans.jpg"),
      title: "Chilli Beans",
      estado: "São Paulo",
      descricao: "Quiosque. 18m²",
      valor: "R$ 7.000/mês",
    },
    {
      imgSrc: require("../img/cards/gendai.jpg"),
      title: "Gendai",
      estado: "São Paulo",
      descricao: "Restaurante. 160m²",
      valor: "R$ 18.000/mês",
    },
    {
      imgSrc: require("../img/cards/kfc.jpg"),
      title: "KFC",
      estado: "São Paulo",
      descricao: "Restaurante. 55m²",
      valor: "R$ 11.000/mês",
    },
    {
      imgSrc: require("../img/cards/mammajamma.webp"),
      title: "Mamma Jamma",
      estado: "Rio de Janeiro",
      descricao: "Restaurante. 180m²",
      valor: "R$ 19.000/mês",
    },
    {
    imgSrc: require("../img/cards/oakberry.jpg"),
      title: "Oakberry",
      estado: "Rio de Janeiro",
      descricao: "Quiosque. 14m²",
      valor: "R$ 6.000/mês",
    }
    ,
    {
    imgSrc: require("../img/cards/peahi.jpg"),
      title: "Peahi",
      estado: "São Paulo",
      descricao: "Loja de Shopping. 100m²",
      valor: "R$ 13.000/mês",
    },
    {
    imgSrc: require("../img/cards/polishop.jpg"),
      title: "Polishop",
      estado: "São Paulo",
      descricao: "Quiosque. 14m²",
      valor: "R$ 8.000/mês",
    },
    {
    imgSrc: require("../img/cards/rommanel.jpg"),
      title: "Rommanel",
      estado: "São Paulo",
      descricao: "Loja de Shopping. 70m²",
      valor: "R$ 13.000/mês",
    },
    {
    imgSrc: require("../img/cards/starbucks.jpg"),
      title: "Starbucks",
      estado: "Rio de Janeiro",
      descricao: "Restaurante. 120m²",
      valor: "R$ 27.000/mês",
    },
    {
    imgSrc: require("../img/cards/thecoffee.jpg"),
      title: "The Coffee",
      estado: "São Paulo",
      descricao: "Box. 10m²",
      valor: "R$ 3.000/mês",
    },
    {
    imgSrc: require("../img/cards/tokstok.jpg"),
      title: "Tok Stok",
      estado: "São Paulo",
      descricao: "Loja de Shopping. 250m²",
      valor: "R$ 45.000/mês",
    },
    {
    imgSrc: require("../img/cards/propet.jpg"),
      title: "ProPet",
      estado: "Rio de Janeiro",
      descricao: "Box. 12m²",
      valor: "R$ 5.000/mês",
    },
    {
    imgSrc: require("../img/cards/uza.jpg"),
      title: "Uza",
      estado: "São Paulo",
      descricao: "Loja de Shopping. 70m²",
      valor: "R$ 10.000/mês",
    }
  ];

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
