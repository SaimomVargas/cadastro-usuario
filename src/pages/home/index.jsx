import { useState } from 'react'
import './style.css'
function Home() {

  return (
    <div className="login-body">
        <div className="login-container">
            <h1>Login</h1>
            <form>
                <input type="email" placeholder="E-mail" required />
                <input type="password" placeholder="Senha" required />
                <button type="submit">Entrar</button>
            </form>
            <p>Não tenho uma conta? <a href="#">Inscreva-se aqui</a></p>
        </div>
    </div>
);
}

export default Home
