"use client";

import "./login.css";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(e) {
    e.preventDefault();

    // aqui depois você conecta com API FastAPI
    console.log("Login:", { email, password });

    alert("Login enviado (mock)");
  }

  return (
    <main className="loginContainer">
      <div className="loginCard">

        <h1 className="loginTitle">Jarvis</h1>
        <p className="loginSubtitle">
          Entre na melhor plataforma de estudos com IA
        </p>

        <form className="loginForm" onSubmit={handleLogin}>
          <label>Email</label>
          <input
            type="email"
            placeholder="seuemail@exemplo.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Senha</label>
          <input
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" className="loginButton">
            Entrar
          </button>
        </form>

        <div className="loginFooter">
          <p onClick={() => alert("Recuperação de senha")}>
            Esqueceu sua senha?
          </p>

          <p onClick={() => window.location.href = "/cadastro"}>
            Criar conta
          </p>
        </div>

      </div>
    </main>
  );
}