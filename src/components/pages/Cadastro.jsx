import React from 'react'
import logo from "../../components/img/logo/logo-black.png"

export default function Cadastro() {
  return (
    <div className="container-fluid">
    <img
      src={logo}
      onClick="redirectHome()"
      role="button"
      className="logo"
      alt="Voltar para a página inicial"
    />
    <form id="formSenha">
      <section className="formSection nomeCompleto">
        <input
          type="text"
          id="nome"
          className="nome form-control form-control-lg col-4"
          placeholder="Nome"
          required
        />
        <input
          type="text"
          id="sobrenome"
          className="sobrenome form-control form-control-lg col-4"
          placeholder="Sobrenome"
          required
        />
      </section>
      <section className="formSection email">
        <input
          type="email"
          id="email"
          name="email"
          className="form-control form-control-lg"
          placeholder="Digite seu e-mail"
          required
        />
      </section>

      <section className="formSection cel">
        <input
          type="text"
          id="cel"
          name="celular"
          placeholder="Digite seu Número de celular"
          className="tel form-control form-control-lg"
          required
          maxlength="15"
          minlength="15"
        />
      </section>

      <section className="formSection dataCPF">
        <input
          type="text"
          id="data"
          name="data"
          pattern="\d{2}/\d{2}/\d{4}"
          maxlength="10"
          title="O formato da data deve ser DD/MM/AAAA"
          placeholder="Data de Nascimento"
          className="dataC form-control form-control-lg"
          required
        />

        <input
          type="text"
          id="cpfOuCnpj"
          name="cpfOuCnpj"
          className="dataC form-control form-control-lg cpfOuCnpj"
          placeholder="CPF ou CNPJ"
          pattern=".{14,}"
          minlength="14"
          maxlength="18"
          title="O formato do CPF ou CNPJ é inválido"
          required
        />
      </section>
      <section className="formSection senha">
        <input
          type="password"
          id="password"
          name="senha"
          className="password form-control form-control-lg"
          placeholder="Digite a sua senha"
          required
        />
        <input
          type="password"
          id="passwordConfirm"
          name="passwordConfirm"
          className="password form-control form-control-lg"
          placeholder="Repita a sua senha"
          required
        />
      </section>
      <section className=" formSection endereco">
        <input
          type="text"
          onblur="pesquisacep(this.value);"
          id="cep"
          name="cep"
          className="cep form-control form-control-lg"
          placeholder="CEP"
          required
        />
        <input
          type="text"
          id="uf"
          name="uf"
          className="uf form-control form-control-lg"
          placeholder="UF"
          required
        />
        <input
          type="text"
          id="numero"
          name="numero"
          className="numero form-control form-control-lg"
          placeholder="Número"
          required
        />
      </section>
      <section className="formSection enderecoCont">
        <input
          type="text"
          id="bairro"
          name="bairro"
          className="bairro form-control form-control-lg"
          placeholder="Bairro"
          required
        />
        <input
          type="text"
          id="cidade"
          name="cidade"
          className="form-control form-control-lg"
          placeholder="Cidade"
          required
        />
        <input
          type="text"
          id="rua"
          name="rua"
          className="rua form-control form-control-lg colored"
          placeholder="Rua"
          required
        />
      </section>
      <input
        className="btn btn-outline-dark btn-lg px-5 mt-3"
        type="submit"
        onClick="validarCadastro()"
        value="Cadastrar"
        id="submit-login"
      />
    </form>
    <div className="text-form">
      <p className="text-links">
        <a className="links" href="./forgot.html">Esqueci minha senha</a>
      </p>
      <p className="text-links">
        Já possui uma conta?
        <a className="links fw-bold" href="../pages/login.html">Entre</a>
      </p>
    </div>
  </div>

//   <script src="../js/cadastro.js"></script>
  )
}
