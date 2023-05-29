import React from "react";
import { Link } from "react-router-dom";
import logo from "../../components/img/logo/logo-black.png";
import "../styles/login.css";

export default function Login() {
  const handleRedirectHome = () => {};

  return (
    <div className="login-container">
      <div className="login-container">
        <div className="py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div className="card-login text-white login-bg">
                <div className="card-body p-5 text-center">
                  <div className="md-4">
                    <Link to="/" onClick={handleRedirectHome}>
                      <img
                        src={logo}
                        className="img-fluid p-2 mb-2 logo-cadastro"
                        alt="Voltar para a página inicial"
                      />
                    </Link>

                    <section>
                      <form>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className="form-control form-control-lg"
                          placeholder="Digite seu E-mail"
                          required
                          autoComplete="off"
                          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                        />

                        <input
                          type="password"
                          id="password"
                          className="form-control form-control-lg mt-2"
                          placeholder="Digite sua Senha"
                          required
                        />
                        <input
                          className="btn btn-outline-dark btn-lg px-5 mt-5 login-btn"
                          type="submit"
                          value="Login"
                          id="submit-login"
                        />
                      </form>
                    </section>

                    <p className="small pb-lg-2 mt-4">
                      <a
                        className="links-register fs-6 text-decoration-none"
                        href="./forgot.html"
                      >
                        Esqueci minha senha
                      </a>
                    </p>
                  </div>

                  <div>
                    <p className="text-black mb-4">
                      Não tem uma conta?
                      <Link
                        to="/cadastro"
                        className="links-register register fw-bold"
                      >
                        Cadastre-se
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
