import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import logo from "../../components/img/logo/logo-black.png";
import "../styles/cadastro.css";

const schema = yup.object({

  nome: yup.string().required("*Campo obrigatório!").min(3, "*Seu nome deve conter no mínimo 3 caracteres"),

  sobrenome: yup.string().required("*Campo obrigatório!").min(3, "*Seu sobrenome deve conter no mínimo 3 caracteres"),

  email: yup.string().required("*Campo obrigatório!").email('*Precisa ser um email válido').test("isValidPass", "*Email inválido", (value, context) => {
    const hasDot = /[.]/.test(value);
    const hasLowerCase = /[a-z]/.test(value);
    const hasAt = /[@]/.test(value);
    let validConditions = 0;
    const numberOfMustBeValidConditions = 3;
    const conditions = [hasLowerCase, hasDot, hasAt];
    conditions.forEach((condition) =>
      condition ? validConditions++ : null
    );
    if (validConditions === numberOfMustBeValidConditions) {
      return true;
    }
    return false
  }),

  celular: yup.string().required("Campo Obrigatório!").min(14, "*O celular deve conter no mínimo 14 caracteres (XX)XXXXX-XXXX").max(14, "*O celular deve conter no máximo 14 caracteres (XX)XXXXX-XXXX").test("isValidCel", "*Celular inválido", (value, context) => {
    const hasNumber = /[0-9]/.test(value);
    const hasHyphen = /[-]/.test(value);
    const hasParentheses = /[()]/.test(value);
    let validConditions = 0;
    const numberOfMustBeValidConditions = 3;
    const conditions = [hasHyphen, hasParentheses, hasNumber];
    conditions.forEach((condition) =>
      condition ? validConditions++ : null
    );
    if (validConditions === numberOfMustBeValidConditions) {
      return true;
    }
    return false
  }),

  data: yup.string().required("Campo Obrigatório!").min(10, "*A data deve conter no mínimo 10 caracteres (XX/XX/XXXX)").max(10, "*A data deve conter no máximo 10 caracteres (XX/XX/XXXX)").test("isValidDate", "*Data de nascimento inválida", (value, context) => {
    const hasNumber = /[0-9]/.test(value);
    const hasBar = /[/]/.test(value);
    let validConditions = 0;
    const numberOfMustBeValidConditions = 2;
    const conditions = [hasBar, hasNumber];
    conditions.forEach((condition) =>
      condition ? validConditions++ : null
    );
    if (validConditions === numberOfMustBeValidConditions) {
      return true;
    }
    return false
  }),

  cpf: yup.string().required("Campo Obrigatório!").min(14, "*O CPF deve conter no mínimo 14 caracteres (XXX.XXX.XXX-XX)").max(14, "*O celular deve conter no máximo 14 caracteres (XXX.XXX.XXX-XX)").test("isValidCPF", "*CPF inválido ", (value, context) => {
    const hasNumber = /[0-9]/.test(value);
    const hasHyphen = /[-]/.test(value);
    const hasDot = /[.]/.test(value);
    let validConditions = 0;
    const numberOfMustBeValidConditions = 3;
    const conditions = [hasHyphen, hasDot, hasNumber];
    conditions.forEach((condition) =>
      condition ? validConditions++ : null
    );
    if (validConditions === numberOfMustBeValidConditions) {
      return true;
    }
    return false
  }),

  password: yup.string().required("*Campo obrigatório!").min(6, "*Sua senha deve conter no mínimo 6 caracteres").test("isValidPass", "*Senha inválida ([A-Z] [a-z] [0-9] [!@#%&])", (value, context) => {
    const hasUpperCase = /[A-Z]/.test(value);
    const hasLowerCase = /[a-z]/.test(value);
    const hasNumber = /[0-9]/.test(value);
    const hasSymbole = /[!@#%&]/.test(value);
    let validConditions = 0;
    const numberOfMustBeValidConditions = 4;
    const conditions = [hasLowerCase, hasUpperCase, hasNumber, hasSymbole];
    conditions.forEach((condition) =>
      condition ? validConditions++ : null
    );
    if (validConditions === numberOfMustBeValidConditions) {
      return true;
    }
    return false
  }),

  passwordConfirm: yup.string().oneOf([yup.ref('password'), null], "A senha deve ser igual"),

  cep: yup.string().required("Campo Obrigatório!").min(9, "*O CEP deve conter no mínimo 9 caracteres").max(9, "*O CEP deve conter no máximo 9 caracteres").test("isValidCEP", "*CEP inválido (XXXXX-XXX)", (value, context) => {
    const hasNumber = /[0-9]/.test(value);
    const hasHyphen = /[-]/.test(value);
    let validConditions = 0;
    const numberOfMustBeValidConditions = 2;
    const conditions = [hasHyphen, hasNumber];
    conditions.forEach((condition) =>
      condition ? validConditions++ : null
    );
    if (validConditions === numberOfMustBeValidConditions) {
      return true;
    }
    return false
  }),

  uf: yup.string().required("Campo Obrigatório!").min(2, "*O estado deve conter no mínimo 2 caracteres").max(2, "*O estado deve conter no máximo 2 caracteres").test("isValidUF", "*UF inválido ([A-Z])", (value, context) => {
    const hasUpperCase = /[A-Z]/.test(value);
    let validConditions = 0;
    const numberOfMustBeValidConditions = 1;
    const conditions = [hasUpperCase];
    conditions.forEach((condition) =>
      condition ? validConditions++ : null
    );
    if (validConditions === numberOfMustBeValidConditions) {
      return true;
    }
    return false
  }),

  numero: yup.string().required("Campo Obrigatório!").min(1, "*O estado deve conter no mínimo 1 caractere ([0-10000])").test("isValidNumero", "*Número inválido", (value, context) => {
    const hasNumber = /[0-9]/.test(value);
    let validConditions = 0;
    const numberOfMustBeValidConditions = 1;
    const conditions = [hasNumber];
    conditions.forEach((condition) =>
      condition ? validConditions++ : null
    );
    if (validConditions === numberOfMustBeValidConditions) {
      return true;
    }
    return false
  }),

  bairro: yup.string().required("*Campo obrigatório!").min(3, "*O bairro deve conter no mínimo 3 caracteres"),
  
  cidade: yup.string().required("*Campo obrigatório!").min(3, "*A cidade deve conter no mínimo 3 caracteres"),

  rua: yup.string().required("*Campo obrigatório!").min(3, "*A rua deve conter no mínimo 3 caracteres"),
})

export default function Cadastro() {

  const handleRedirectHome = () => {};
  
  const { register, handleSubmit, formState:{ errors } } = useForm({
    resolver: yupResolver(schema)
  });
  const onSubmit = data => console.log(data);

  console.log(errors)

  

  return (
    <div className="page-container">
      <div className="cadastro-container">
        <div className="background-img"></div>
        <div className="h-100 d-flex justify-content-center align-items-center">
          <div className="card-cadastro">
            <Link to="/" onClick={handleRedirectHome}>
              <img
                src={logo}
                className="img-fluid p-2 mb-2 logo-cadastro"
                alt="Voltar para a página inicial"
              />
            </Link>
            <form id="formCadastro" onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group">
                <div className="input-group">
                  <input
                    type="text"
                    id="nome"
                    className="form-control input-field nome-input"
                    placeholder="Nome"
                    {...register("nome")}
                  />
                  <p className="error">{errors.nome?.message}</p>
                  <input
                    type="text"
                    id="sobrenome"
                    className="form-control input-field sobrenome-input"
                    placeholder="Sobrenome"
                    {...register("sobrenome")}
                  />
                  <p className="error">{errors.sobrenome?.message}</p>
                </div>
              </div>
              <div className="form-group">
                <input
                  type="email"
                  id="email"
                  // name="email"
                  className="form-control input-field email-input"
                  placeholder="Digite seu e-mail"
                  {...register("email")}
                  />
                  <p className="error">{errors.email?.message}</p>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  id="cel"
                  // name="celular"
                  placeholder="Digite seu Número de celular"
                  className="form-control input-field celular-input"
                  {...register("celular")}
                  />
                  <p className="error">{errors.celular?.message}</p>
              </div>
              <div className="form-group">
                <div className="input-group">
                  <input
                    type="text"
                    id="data"
                    // name="data"
                    // pattern="\d{2}/\d{2}/\d{4}"
                    // maxLength="10"
                    // title="O formato da data deve ser DD/MM/AAAA"
                    placeholder="Data de Nascimento"
                    className="form-control input-field data-input"
                    {...register("data")}
                  />
                  <p className="error">{errors.data?.message}</p>
                  <input
                    type="text"
                    id="cpfOuCnpj"
                    // name="cpfOuCnpj"
                    className="form-control input-field cpfcnpj-input"
                    placeholder="CPF ou CNPJ"
                    {...register("cpf")}
                  />
                  <p className="error">{errors.cpf?.message}</p>
                  
                </div>
              </div>
              <div className="form-group">
                <input
                  type="password"
                  id="password"
                  // name="senha"
                  className="form-control input-field senha-input"
                  placeholder="Digite a sua senha"
                  {...register("password")}
                  />
                  <p className="error">{errors.password?.message}</p>
              </div>
              <div className="form-group">
                <input
                  type="password"
                  id="passwordConfirm"
                  // name="passwordConfirm"
                  className="form-control input-field senha-confirm-input"
                  placeholder="Repita a sua senha"
                  {...register("passwordConfirm")}
                  />
                  <p className="error">{errors.passwordConfirm?.message}</p>
              </div>
              <div className="form-group">
                <div className="input-group">
                  <input
                    type="text"
                    // onBlur={pesquisacep(this.value)}
                    id="cep"
                    // name="cep"
                    className="form-control input-field cep-input"
                    placeholder="CEP"
                    {...register("cep")}
                  />
                  <p className="error">{errors.cep?.message}</p>
                  <input
                    type="text"
                    id="uf"
                    // name="uf"
                    className="form-control input-field uf-input"
                    placeholder="UF"
                    {...register("uf")}
                  />
                  <p className="error">{errors.uf?.message}</p>
              
                  <input
                    type="text"
                    id="numero"
                    // name="numero"
                    className="form-control input-field numero-input"
                    placeholder="Número"
                    {...register("numero")}
                  />
                  <p className="error">{errors.numero?.message}</p>
                </div>
              </div>
              <div className="form-group">
                <div className="input-group">
                  <input
                    type="text"
                    id="bairro"
                    // name="bairro"
                    className="form-control input-field bairro-input"
                    placeholder="Bairro"
                    {...register("bairro")}
                  />
                  <p className="error">{errors.bairro?.message}</p>
                  <input
                    type="text"
                    id="cidade"
                    // name="cidade"
                    className="form-control input-field cidade-input"
                    placeholder="Cidade"
                    {...register("cidade")}
                  />
                  <p className="error">{errors.cidade?.message}</p>
                  <input
                    type="text"
                    id="rua"
                    name="rua"
                    className="form-control input-field rua-input"
                    placeholder="Rua"
                    {...register("rua")}
                  />
                  <p className="error">{errors.rua?.message}</p>
                </div>
              </div>
              <button
                className="btn btn-outline-dark btn-lg px-5 mt-3 cadastrar-btn"
                type="submit"
                id="submit-login"
              >
                Cadastrar
              </button>
            </form>
            <div className="text-form">
              <p className="text-links">
                <Link
                  to="/forgot"
                  className="links-register fs-6 text-decoration-none fw-bold"
                >
                  Esqueci minha senha
                </Link>
              </p>
              <p className="text-links">
                Já possui uma conta?{" "}
                <Link
                  className="links-register fs-6 text-decoration-none fw-bold"
                  to="/login"
                >
                  Entre
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
