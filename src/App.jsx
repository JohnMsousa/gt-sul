import { useState } from 'react'
import './App.css'

function App() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [user, setUser] = useState({
    nome: 'dev'
  });

  function handleRegister(e) {
    e.preventDefault();
    if(!nome || !email) {
      alert('Preencha todos os campos')
    }
    setUser({
      nome,
      email
    });
  }

  return (
    <>
    <h1>Cadastrar usuário</h1>
    <hr />

    <form action="#" onSubmit={handleRegister}>
      <label htmlFor="nome">Nome:</label>
      <input
      placeholder="Digite aqui seu nome"
      type="text"
      id="nome"
      value={nome}
      onChange={(e) => setNome(e.target.value)}
      />

      <label htmlFor="email">Email:</label>
      <input
      placeholder="Digite aqui seu email"
      type="email"
      id="email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      />

      <button type="submit">Cadastrar</button>
    </form>

    <div>
      <span>Bem Vindo: {user.nome}</span><br />
      <span>Email: {user.email}</span>
    </div>
    </>
  )
}

export default App
