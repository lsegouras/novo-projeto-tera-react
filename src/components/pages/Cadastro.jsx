import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../components/img/logo/logo-black.png';
import '../styles/cadastro.css';

export default function Cadastro() {
  const handleRedirectHome = () => {
    // Lógica para redirecionar para a página inicial
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Lógica para validar e enviar o formulário de cadastro
  };

  return (
    <div className="cadastro-container">
      <div className="background-img"></div>
      <div className="py-5 h-100 d-flex justify-content-center align-items-center">
        <div className="card-cadastro">
        <Link to="/" onClick={handleRedirectHome}>
        <img
  src={logo}
  className="img-fluid p-2 mb-2 logo-cadastro"
  alt="Voltar para a página inicial"
/>


                </Link>
          <form id="formCadastro" onSubmit={handleFormSubmit}>
            <div className="form-group">
              <div className="row">
                <div className="col">
                  <input
                    type="text"
                    id="nome"
                    className="form-control"
                    placeholder="Nome"
                    required
                  />
                </div>
                <div className="col">
                  <input
                    type="text"
                    id="sobrenome"
                    className="form-control"
                    placeholder="Sobrenome"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="form-group">
              <input
                type="email"
                id="email"
                name="email"
                className="form-control"
                placeholder="Digite seu e-mail"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                id="cel"
                name="celular"
                placeholder="Digite seu Número de celular"
                className="form-control"
                required
                maxLength="15"
                minLength="15"
              />
            </div>
            <div className="form-group">
              <div className="row">
                <div className="col">
                  <input
                    type="text"
                    id="data"
                    name="data"
                    pattern="\d{2}/\d{2}/\d{4}"
                    maxLength="10"
                    title="O formato da data deve ser DD/MM/AAAA"
                    placeholder="Data de Nascimento"
                    className="form-control"
                    required
                  />
                </div>
                <div className="col">
                  <input
                    type="text"
                    id="cpfOuCnpj"
                    name="cpfOuCnpj"
                    className="form-control"
                    placeholder="CPF ou CNPJ"
                    pattern=".{14,}"
                    minLength="14"
                    maxLength="18"
                    title="O formato do CPF ou CNPJ é inválido"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="form-group">
              <input
                type="password"
                id="password"
                name="senha"
                className="form-control"
                placeholder="Digite a sua senha"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                id="passwordConfirm"
                name="passwordConfirm"
                className="form-control"
                placeholder="Repita a sua senha"
                required
              />
            </div>
            <div className="form-group">
              <div className="row">
                <div className="col">
                  <input
                    type="text"
                    onBlur="pesquisacep(this.value);"
                    id="cep"
                    name="cep"
                    className="form-control"
                    placeholder="CEP"
                    required
                  />
                </div>
                <div className="col">
                  <input
                    type="text"
                    id="uf"
                    name="uf"
                    className="form-control"
                    placeholder="UF"
                    required
                  />
                </div>
                <div className="col">
                  <input
                    type="text"
                    id="numero"
                    name="numero"
                    className="form-control"
                    placeholder="Número"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="form-group">
              <div className="row">
                <div className="col">
                  <input
                    type="text"
                    id="bairro"
                    name="bairro"
                    className="form-control"
                    placeholder="Bairro"
                    required
                  />
                </div>
                <div className="col">
                  <input
                    type="text"
                    id="cidade"
                    name="cidade"
                    className="form-control"
                    placeholder="Cidade"
                    required
                  />
                </div>
                <div className="col">
                  <input
                    type="text"
                    id="rua"
                    name="rua"
                    className="form-control"
                    placeholder="Rua"
                    required
                  />
                </div>
              </div>
            </div>
            <button
              className="btn btn-outline-dark btn-lg px-5 mt-3"
              type="submit"
              onClick="validarCadastro()"
              id="submit-login"
            >
              Cadastrar
            </button>
          </form>
          <div className="text-form">
            <p className="text-links">
              <a className="links-register fs-6 text-decoration-none" href="./forgot.html">
                Esqueci minha senha
              </a>
            </p>
            <p className="text-links">
              Já possui uma conta?{' '}
              <Link className="links-register fs-6 text-decoration-none fw-bold" to="/login">
                Entre
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
