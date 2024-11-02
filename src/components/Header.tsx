import React, { useState } from 'react';
import Login from './Login'; // Importe o componente Login

const Header: React.FC = () => {
  const [isLoginVisible, setIsLoginVisible] = useState(false); // Estado para controle da visibilidade do login

  const toggleLogin = () => {
    setIsLoginVisible(!isLoginVisible); // Alterna a visibilidade do formulário de login
  };

  return (
    <>
      <header style={styles.header}>
        <div style={styles.logoContainer}>
          <img 
            src="src/assets/logo.png" 
            alt="Logo" 
            style={styles.logo} 
          />
        </div>
        <div style={styles.buttonContainer}>
          <button onClick={toggleLogin} style={styles.loginButton}>Login</button>
          <button style={styles.registerButton}>Registrar</button>
        </div>
      </header>
      {isLoginVisible && <Login toggleLogin={toggleLogin} />} {/* Passando toggleLogin para Login */}
    </>
  );
};

const styles = {
  header: {
    padding: '10px',
    backgroundColor: '#FFF',
    color: 'white',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100vw', // Ocupa a largura total
    position: 'fixed' as const, // Fixa o header no topo
    top: '0',
    left: '0',
    zIndex: 1000, // Garante que o header fique na frente de outros elementos
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)', // Sombra abaixo do header
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  logo: {
    height: '55px', // Defina o tamanho da logo
  },
  buttonContainer: {
    display: 'flex',
    gap: '10px', // Espaçamento entre os botões
    marginRight: '4vw', // Margem à direita para afastar os botões da borda
  },
  loginButton: {
    padding: '10px 20px',
    backgroundColor: '#F36A07', // Cor do botão Login
    color: 'white', // Texto branco
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontWeight: 'bold',
    transition: 'background-color 0.3s, color 0.3s', // Adiciona uma transição
  },
  registerButton: {
    padding: '10px 20px',
    backgroundColor: 'white', // Fundo branco
    color: '#F36A07', // Texto do botão Registrar
    border: '2px solid #F36A07', // Borda verde
    borderRadius: '5px',
    cursor: 'pointer',
    fontWeight: 'bold',
  },
};

export default Header;
