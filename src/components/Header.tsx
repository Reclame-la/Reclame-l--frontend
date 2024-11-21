import React, { useState, useEffect } from 'react';
import Login from './Login';
import '../styles/header.css';

const Header: React.FC = () => {
  const [isLoginVisible, setIsLoginVisible] = useState(false); // Estado para controle da visibilidade do login
  const [isRegisterVisible, setIsRegisterVisible] = useState(false); // Estado para controle de registro
  const [isHomePage, setIsHomePage] = useState(true); // Estado para controlar se está na página inicial

  useEffect(() => {
    if (window.location.pathname !== '/') {
      setIsHomePage(false);
    } else {
      setIsHomePage(true);
    }
  }, []);

  const handleLoginClick = () => {
    setIsLoginVisible(true);
    setIsRegisterVisible(false); //
  };

  const handleRegisterClick = () => {
    setIsLoginVisible(true);
    setIsRegisterVisible(true);
  };

  return (
    <>
      <header className="header">
        <div className="logo-container">
          <img 
            src="src/assets/logo.png" 
            alt="Logo" 
            className="logo" 
          />
        </div>
        {isHomePage && ( // Exibe os botões somente na página inicial
          <div className="button-container">
            <button onClick={handleLoginClick} className="login-button">Login</button>
            <button onClick={handleRegisterClick} className="register-button">Registrar</button>
          </div>
        )}
      </header>
      {isLoginVisible && (
        <Login 
          toggleLogin={() => setIsLoginVisible(false)} 
          isRegisterVisible={isRegisterVisible} 
          setIsRegisterVisible={setIsRegisterVisible} // Passando função para alternar entre login e registro
        />
      )}
    </>
  );
};

export default Header;
