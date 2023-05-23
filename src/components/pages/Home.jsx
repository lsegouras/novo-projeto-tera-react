/* eslint jsx-a11y/anchor-is-valid: 0 */
import React from "react";
import logo from "../../components/img/logo/logo.png";
import mainPhoto from "../../components/img/index/main.jpg";
import lojaImg from "../../components/img/index/loja.jpg";
import quiosqueImg from "../../components/img/index/quiosque.jpg";
import boxImg from "../../components/img/index/box.jpg";
import foodImg from "../../components/img/index/food.jpg";

export default function Home() {
  return (
    <div>
      <nav className='navbar navbar-expand-lg'>
        <div className='container-fluid'>
          <img
            src={logo}
            className='logo navbar-brand'
            alt='Voltar para a página inicial'
          />
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Alternar navegação'
          >
            <span>
              <i className='bi bi-list'></i>
            </span>
          </button>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav me-auto mb-3 mb-lg-0' id='navbar-items'>
              <li className='nav-item'>
                <a className='nav-link' aria-current='page' href='#'>
                  início
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#'>
                  Buscar Loja
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#'>
                  para proprietários
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#'>
                  para imobiliárias
                </a>
              </li>
              <li className='nav-item'>
                <a onClick='redirectLogin()' className='nav-link' href='#'>
                  <i className='bi bi-box-arrow-in-right'></i> entrar
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className='header-content'>
        <div className='left'>
          <h1 className='form-title'>Encontre a loja dos seus sonhos!</h1>
          <form
            className='formulario'
            action='./pages/resultados.html'
            method='get'
          >
            <label for='tipo'>Tipo:</label>
            <select name='tipo' id='tipo'>
              <option value=''>Todos</option>
              <option value='Quiosque'>Quiosque</option>
              <option value='Restaurante'>Restaurante</option>
              <option value='Loja'>Loja de Shopping</option>
              <option value='Box'>Box</option>
            </select>

            <label for='estado'>Estado:</label>
            <select name='estado' id='estado'>
              <option value=''>Todos</option>
              <option value='Rio de Janeiro'>Rio de Janeiro</option>
              <option value='Sao Paulo'>São Paulo</option>
            </select>

            <label for='valor'>Valor:</label>
            <select name='valor' id='valor'>
              <option value=''>Todos</option>
              <option value='ate8000'>Até R$8.000/mês</option>
              <option value='8000a15000'>De R$8.000 a R$15.000/mês</option>
              <option value='acima15000'>Acima de R$15.000/mês</option>
            </select>

            <label for='tamanho'>Tamanho:</label>
            <select name='tamanho' id='tamanho'>
              <option value=''>Todos</option>
              <option value='ate50'>Até 50m²</option>
              <option value='50a100'>De 50m² a 100m²</option>
              <option value='100a200'>De 100m² a 200m²</option>
            </select>

            <button type='submit'>Filtrar</button>
          </form>
        </div>
        <div className='right'>
          <img
            src={mainPhoto}
            alt='Mulher sorrindo, segurando sacolas cheias de compras'
            className='header-img'
          />
        </div>
      </div>

      <div className='main-title'>
        <h3>Lojas em shoppings centers, centros comerciais, galerias e ruas</h3>
      </div>
      <div id='area-imoveis'>
        <div className='container-fluid cards-main'>
          <div className='col-md-3'>
            <div className='card-1 card md-3'>
              <img
                className='img-fluid card-img-top'
                src={lojaImg}
                alt='Manequins de uma loja de roupas'
              />
            </div>
          </div>
          <div className='col-md-3'>
            <div className='card-2 card'>
              <img
                className='img-fluid card-img-top'
                src={quiosqueImg}
                alt='Quiosque'
              />
            </div>
          </div>
          <div className='col-md-3'>
            <div className='card-3 card'>
              <img
                className='img-fluid card-img-top'
                src={foodImg}
                alt='Restaurante'
              />
            </div>
          </div>
          <div className='col-md-3'>
            <div className='card-4 card'>
              <img
                className='img-fluid card-img-top'
                src={boxImg}
                alt='Boxes'
              />
            </div>
          </div>
        </div>
      </div>

      <footer>
        <section className='about mt-4'>
          <h3 className='text-white fs-5'>Sobre Nós</h3>
          <ul>
            <li>
              <a href='#'>Conheça o SobreLoja</a>
            </li>
            <li>
              <a href='#'>Regiões Atendidas</a>
            </li>
            <li>
              <a href='#'>FAQ</a>
            </li>
            <li>
              <a href='/pages/privacidade.html'>Política de Privacidade</a>
            </li>
          </ul>
        </section>

        <section className='social-media mt-4'>
          <h3 className='text-white fs-5'>Contato</h3>
          <ul className='wrapper'>
            <li className='icon facebook'>
              <span className='tooltip'>Facebook</span>
              <span>
                <i className='bi bi-facebook'></i>
              </span>
            </li>
            <li className='icon twitter'>
              <span className='tooltip'>Twitter</span>
              <span>
                <i className='bi bi-twitter'></i>
              </span>
            </li>
            <li className='icon instagram'>
              <span className='tooltip'>Instagram</span>
              <span>
                <i className='bi bi-instagram'></i>
              </span>
            </li>
            <li className='icon linkedin'>
              <span className='tooltip'>Linkedin</span>
              <span>
                <i className='bi bi-linkedin'></i>
              </span>
            </li>
            <li className='icon whatsapp'>
              <span className='tooltip'>WhatsApp</span>
              <span>
                <i className='bi bi-whatsapp'></i>
              </span>
            </li>
          </ul>
        </section>
      </footer>
    </div>
  );
}
