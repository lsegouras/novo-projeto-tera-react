/* eslint jsx-a11y/anchor-is-valid: 0 */
import React from "react";
import logo from "../img/logo/logo.png";
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
  return (
    <div>
      <Navbar />

      <main>
        <h1 className="main-title">Encontre a loja dos seus sonhos!</h1>
        <div className="container">
          <div className="row">
            <div className="container-cards">
              <div className="row" id="cards">
                <div
                  className="col-md-4 card-group"
                  data-tipo="Loja"
                  data-estado="Sao Paulo"
                  data-valor="15000"
                  data-tamanho="50a100"
                >
                  <div className="card">
                    <img
                      src={acbrasil}
                      className="card-img-top"
                      alt="AC Brazil"
                    />
                    <div className="card-body">
                      <h5 className="card-title">AC Brazil</h5>
                      <p className="card-text">
                        <small className="text-muted">São Paulo</small>
                      </p>
                      <p className="card-text">
                        <small className="text-muted">
                          Loja de shopping. 80m²
                        </small>
                      </p>
                      <p className="card-text">
                        <small className="text-muted">R$ 15.000/mês</small>
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="col-md-4 card-group"
                  data-tipo="Quiosque"
                  data-estado="Sao Paulo"
                  data-valor="4000"
                  data-tamanho="ate50"
                >
                  <div className="card">
                    <img src={acium} className="card-img-top" alt="Acium" />
                    <div className="card-body">
                      <h5 className="card-title">Acium</h5>
                      <p className="card-text">
                        <small className="text-muted">São Paulo</small>
                      </p>
                      <p className="card-text">
                        <small className="text-muted">Quiosque. 10m²</small>
                      </p>
                      <p className="card-text">
                        <small className="text-muted">R$ 4.000/mês</small>
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="col-md-4 card-group"
                  data-tipo="Restaurante"
                  data-estado="Rio de Janeiro"
                  data-valor="12000"
                  data-tamanho="50a100"
                >
                  <div className="card">
                    <img
                      src={baciodilatte}
                      className="card-img-top"
                      alt="Bacio di Latte"
                    />
                    <div className="card-body">
                      <h5 className="card-title">Bacio di Latte</h5>
                      <p className="card-text">
                        <small className="text-muted">Rio de Janeiro</small>
                      </p>
                      <p className="card-text">
                        <small className="text-muted">Restaurante. 50m²</small>
                      </p>
                      <p className="card-text">
                        <small className="text-muted">R$ 12.000/mês</small>
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  className="col-md-4 card-group"
                  data-tipo="Quiosque"
                  data-estado="Rio de Janeiro"
                  data-valor="6000"
                  data-tamanho="ate50"
                >
                  <div className="card">
                    <img
                      src={boticario}
                      className="card-img-top"
                      alt="O Boticário"
                    />
                    <div className="card-body">
                      <h5 className="card-title">O Boticário</h5>
                      <p className="card-text">
                        <small className="text-muted">Rio de Janeiro</small>
                      </p>
                      <p className="card-text">
                        <small className="text-muted">Quiosque. 15m²</small>
                      </p>
                      <p className="card-text">
                        <small className="text-muted">R$ 6.000/mês</small>
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="col-md-4 card-group"
                  data-tipo="Loja"
                  data-estado="Rio de Janeiro"
                  data-valor="20000"
                  data-tamanho="100a200"
                >
                  <div className="card">
                    <img
                      src={botoclinic}
                      className="card-img-top"
                      alt="Botoclinic"
                    />
                    <div className="card-body">
                      <h5 className="card-title">Botoclinic</h5>
                      <p className="card-text">
                        <small className="text-muted">Rio de Janeiro</small>
                      </p>
                      <p className="card-text">
                        <small className="text-muted">
                          Loja de shopping. 150m²
                        </small>
                      </p>
                      <p className="card-text">
                        <small className="text-muted">R$ 20.000/mês</small>
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="col-md-4 card-group"
                  data-tipo="Quiosque"
                  data-estado="Sao Paulo"
                  data-valor="6000"
                  data-tamanho="ate50"
                >
                  <div className="card">
                    <img
                      src={brasilcacau}
                      className="card-img-top"
                      alt="Chocolates Brasil Cacau"
                    />
                    <div className="card-body">
                      <h5 className="card-title">Chocolates Brasil Cacau</h5>
                      <p className="card-text">
                        <small className="text-muted">São Paulo</small>
                      </p>
                      <p className="card-text">
                        <small className="text-muted">Quiosque. 12m²</small>
                      </p>
                      <p className="card-text">
                        <small className="text-muted">R$ 6.000/mês</small>
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="col-md-4 card-group"
                  data-tipo="Restaurante"
                  data-estado="Sao Paulo"
                  data-valor="16000"
                  data-tamanho="50a100"
                >
                  <div className="card">
                    <img
                      src={cabana}
                      className="card-img-top"
                      alt="Cabana Burger"
                    />
                    <div className="card-body">
                      <h5 className="card-title">Cabana Burger</h5>
                      <p className="card-text">
                        <small className="text-muted">São Paulo</small>
                      </p>
                      <p className="card-text">
                        <small className="text-muted">Restaurante. 70m²</small>
                      </p>
                      <p className="card-text">
                        <small className="text-muted">R$ 16.000/mês</small>
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="col-md-4 card-group"
                  data-tipo="Loja"
                  data-estado="Rio de Janeiro"
                  data-valor="14000"
                  data-tamanho="50a100"
                >
                  <div className="card">
                    <img src={cantao} className="card-img-top" alt="Cantao" />
                    <div className="card-body">
                      <h5 className="card-title">Cantao</h5>
                      <p className="card-text">
                        <small className="text-muted">Rio de Janeiro</small>
                      </p>
                      <p className="card-text">
                        <small className="text-muted">
                          Loja de shopping. 65m²
                        </small>
                      </p>
                      <p className="card-text">
                        <small className="text-muted">R$ 14.000/mês</small>
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="col-md-4 card-group"
                  data-tipo="Quiosque"
                  data-estado="Sao Paulo"
                  data-valor="7000"
                  data-tamanho="ate50"
                >
                  <div className="card">
                    <img
                      src={chillibeans}
                      className="card-img-top"
                      alt="Chilli Beans"
                    />
                    <div className="card-body">
                      <h5 className="card-title">Chilli Beans</h5>
                      <p className="card-text">
                        <small className="text-muted">São Paulo</small>
                      </p>
                      <p className="card-text">
                        <small className="text-muted">Quiosque. 18m²</small>
                      </p>
                      <p className="card-text">
                        <small className="text-muted">R$ 7.000/mês</small>
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="col-md-4 card-group"
                  data-tipo="Restaurante"
                  data-estado="Sao Paulo"
                  data-valor="18000"
                  data-tamanho="100a200"
                >
                  <div className="card">
                    <img src={gendai} className="card-img-top" alt="Gendai" />
                    <div className="card-body">
                      <h5 className="card-title">Gendai</h5>
                      <p className="card-text">
                        <small className="text-muted">São Paulo</small>
                      </p>
                      <p className="card-text">
                        <small className="text-muted">Restaurante. 160m²</small>
                      </p>
                      <p className="card-text">
                        <small className="text-muted">R$ 18.000/mês</small>
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="col-md-4 card-group"
                  data-tipo="Restaurante"
                  data-estado="Sao Paulo"
                  data-valor="11000"
                  data-tamanho="50a100"
                >
                  <div className="card">
                    <img src={kfc} className="card-img-top" alt="KFC" />
                    <div className="card-body">
                      <h5 className="card-title">KFC</h5>
                      <p className="card-text">
                        <small className="text-muted">São Paulo</small>
                      </p>
                      <p className="card-text">
                        <small className="text-muted">Restaurante. 55m²</small>
                      </p>
                      <p className="card-text">
                        <small className="text-muted">R$ 11.000/mês</small>
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="col-md-4 card-group"
                  data-tipo="Restaurante"
                  data-estado="Rio de Janeiro"
                  data-valor="19000"
                  data-tamanho="100a200"
                >
                  <div className="card">
                    <img
                      src={mammajamma}
                      className="card-img-top"
                      alt="Mamma Jamma"
                    />
                    <div className="card-body">
                      <h5 className="card-title">Mamma Jamma</h5>
                      <p className="card-text">
                        <small className="text-muted">Rio de Janeiro</small>
                      </p>
                      <p className="card-text">
                        <small className="text-muted">Restaurante. 180m²</small>
                      </p>
                      <p className="card-text">
                        <small className="text-muted">R$ 19.000/mês</small>
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="col-md-4 card-group"
                  data-tipo="Quiosque"
                  data-estado="Rio de Janeiro"
                  data-valor="6000"
                  data-tamanho="ate50"
                >
                  <div className="card">
                    <img
                      src={oakberry}
                      className="card-img-top"
                      alt="Oakberry"
                    />
                    <div className="card-body">
                      <h5 className="card-title">Oakberry</h5>
                      <p className="card-text">
                        <small className="text-muted">Rio de Janeiro</small>
                      </p>
                      <p className="card-text">
                        <small className="text-muted">Quiosque. 14m²</small>
                      </p>
                      <p className="card-text">
                        <small className="text-muted">R$ 6.000/mês</small>
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="col-md-4 card-group"
                  data-tipo="Loja"
                  data-estado="Sao Paulo"
                  data-valor="13000"
                  data-tamanho="100a200"
                >
                  <div className="card">
                    <img src={peahi} className="card-img-top" alt="Peahi" />
                    <div className="card-body">
                      <h5 className="card-title">Peahi</h5>
                      <p className="card-text">
                        <small className="text-muted">São Paulo</small>
                      </p>
                      <p className="card-text">
                        <small className="text-muted">
                          Loja de shopping. 100m²
                        </small>
                      </p>
                      <p className="card-text">
                        <small className="text-muted">R$ 13.000/mês</small>
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="col-md-4 card-group"
                  data-tipo="Quiosque"
                  data-estado="Sao Paulo"
                  data-valor="8000"
                  data-tamanho="ate50"
                >
                  <div className="card">
                    <img
                      src={polishop}
                      className="card-img-top"
                      alt="Polishop"
                    />
                    <div className="card-body">
                      <h5 className="card-title">Polishop</h5>
                      <p className="card-text">
                        <small className="text-muted">São Paulo</small>
                      </p>
                      <p className="card-text">
                        <small className="text-muted">Quiosque. 14m²</small>
                      </p>
                      <p className="card-text">
                        <small className="text-muted">R$ 8.000/mês</small>
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="col-md-4 card-group"
                  data-tipo="Loja"
                  data-estado="Rio de Janeiro"
                  data-valor="13000"
                  data-tamanho="50a100"
                >
                  <div className="card">
                    <img
                      src={rommanel}
                      className="card-img-top"
                      alt="Rommanel"
                    />
                    <div className="card-body">
                      <h5 className="card-title">Rommanel</h5>
                      <p className="card-text">
                        <small className="text-muted">São Paulo</small>
                      </p>
                      <p className="card-text">
                        <small className="text-muted">
                          Loja de shopping. 70m²
                        </small>
                      </p>
                      <p className="card-text">
                        <small className="text-muted">R$ 13.000/mês</small>
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="col-md-4 card-group"
                  data-tipo="Restaurante"
                  data-estado="Rio de Janeiro"
                  data-valor="27000"
                  data-tamanho="100a200"
                >
                  <div className="card">
                    <img
                      src={starbucks}
                      className="card-img-top"
                      alt="Starbucks"
                    />
                    <div className="card-body">
                      <h5 className="card-title">Starbucks</h5>
                      <p className="card-text">
                        <small className="text-muted">Rio de Janeiro</small>
                      </p>
                      <p className="card-text">
                        <small className="text-muted">Restaurante. 120m²</small>
                      </p>
                      <p className="card-text">
                        <small className="text-muted">R$ 27.000/mês</small>
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="col-md-4 card-group"
                  data-tipo="Box"
                  data-estado="Sao Paulo"
                  data-valor="3000"
                  data-tamanho="ate50"
                >
                  <div className="card">
                    <img
                      src={thecoffee}
                      className="card-img-top"
                      alt="The Coffee"
                    />
                    <div className="card-body">
                      <h5 className="card-title">The Coffee</h5>
                      <p className="card-text">
                        <small className="text-muted">São Paulo</small>
                      </p>
                      <p className="card-text">
                        <small className="text-muted">Box. 10m²</small>
                      </p>
                      <p className="card-text">
                        <small className="text-muted">R$ 3.000/mês</small>
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="col-md-4 card-group"
                  data-tipo="Loja"
                  data-estado="Sao Paulo"
                  data-valor="45000"
                  data-tamanho="maior200"
                >
                  <div className="card">
                    <img
                      src={tokstok}
                      className="card-img-top"
                      alt="Tok Stok"
                    />
                    <div className="card-body">
                      <h5 className="card-title">Tok Stok</h5>
                      <p className="card-text">
                        <small className="text-muted">São Paulo</small>
                      </p>
                      <p className="card-text">
                        <small className="text-muted">
                          Loja de shopping. 250m²
                        </small>
                      </p>
                      <p className="card-text">
                        <small className="text-muted">R$ 45.000/mês</small>
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="col-md-4 card-group"
                  data-tipo="Box"
                  data-estado="Rio de Janeiro"
                  data-valor="5000"
                  data-tamanho="ate50"
                >
                  <div className="card">
                    <img src={propet} className="card-img-top" alt="ProPet" />
                    <div className="card-body">
                      <h5 className="card-title">ProPet</h5>
                      <p className="card-text">
                        <small className="text-muted">Rio de Janeiro</small>
                      </p>
                      <p className="card-text">
                        <small className="text-muted">Box. 12m²</small>
                      </p>
                      <p className="card-text">
                        <small className="text-muted">R$ 5.000/mês</small>
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="col-md-4 card-group"
                  data-tipo="Loja"
                  data-estado="Sao Paulo"
                  data-valor="10000"
                  data-tamanho="50a100"
                >
                  <div className="card">
                    <img src={uza} className="card-img-top" alt="Uza" />
                    <div className="card-body">
                      <h5 className="card-title">Uza</h5>
                      <p className="card-text">
                        <small className="text-muted">São Paulo</small>
                      </p>
                      <p className="card-text">
                        <small className="text-muted">
                          Loja de shopping. 70m²
                        </small>
                      </p>
                      <p className="card-text">
                        <small className="text-muted">R$ 10.000/mês</small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
