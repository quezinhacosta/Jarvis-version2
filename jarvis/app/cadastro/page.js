"use client";

import "./cadastro.css";
import { useState } from "react";

export default function CadastroPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  function handleCadastro(e) {
    e.preventDefault();

    // aqui depois você conecta com API FastAPI
    console.log("Cadastro:", { name, email, password });

    alert("Cadastro realizado! (mock)");
  }

  return (
    <main className="cadastroContainer">
      <div className="cadastroCard">

        <h1 className="cadastroTitle">Jarvis</h1>
        <p className="cadastroSubtitle">
          Faça seu cadastro na melhor plataforma de estudos com IA
        </p>

        <form className="cadastroForm" onSubmit={handleCadastro}>

          <label>Nome</label>
          <input
            type ="text"
            placeholder="Seu nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label>Email</label>
          <input
            type="email"
            placeholder="Adicione seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Senha</label>
          <input
            type="password"
            placeholder="Adicione uma senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" className="cadastroButton">
            Cadastrar
          </button>
        </form>

        <div className="loginFooter">
          <p onClick={() => window.location.href = "/login"}>
            Já possui uma conta?
          </p>
        </div>

      </div>
    </main>
  );
}