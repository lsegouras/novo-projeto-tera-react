import React from "react";
import logo from "../../components/img/logo/logo-black.png"

export default function Login() {
  return (
    <div className='container py-5 h-100'>
      <div className='row d-flex justify-content-center align-items-center h-100'>
        <div className='col-12 col-md-8 col-lg-6 col-xl-5'>
          <div
            className='card text-white login-bg'
          >
            <div className='card-body p-5 text-center'>
              <div className='md-4'>
                <img
                  src={logo}
                  onClick='redirectHome()'
                  role='button'
                  className='img-fluid w-25 p-2 mb-2'
                  alt='Voltar para a página inicial'
                />

                <section>
                  <form>
                    <input
                      type='email'
                      id='email'
                      name='email'
                      className='form-control form-control-lg'
                      placeholder='Digite seu E-mail'
                      required
                      autocomplete='off'
                      pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'
                    />

                    <input
                      type='password'
                      id='password'
                      className='form-control form-control-lg mt-2'
                      placeholder='Digite sua Senha'
                      required
                    />
                    <input
                      className='btn btn-outline-dark btn-lg px-5 mt-5'
                      type='submit'
                      value='Login'
                      id='submit-login'
                    />
                  </form>
                </section>

                <p className='small pb-lg-2 mt-4'>
                  <a
                    className='links-register fs-6 text-decoration-none'
                    href='./forgot.html'
                  >
                    Esqueci minha senha
                  </a>
                </p>
              </div>

              <div>
                <p className='text-black mb-4'>
                  Não tem uma conta?
                  <a
                    href='../pages/cadastro.html'
                    className='links-register register fw-bold'
                  >
                    Cadastre-se
                  </a>
                </p>
              </div>
              <button id='button'>
                <i className='fas fa-moon icon'></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
