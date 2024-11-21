import React, { useState } from "react";
import "../styles/Inicial.css";
import estudantesImage from "../assets/estudantes.png";
import estudanteLaptopImage from "../assets/estudante-laptop.png";
import Login from "../components/Login";

const Inicial: React.FC = () => {
  const [showLogin, setShowLogin] = useState(false); // Controla o modal de login
  const [isRegisterVisible, setIsRegisterVisible] = useState(false); // Controla a exibição de registro ou login

  // Função para alternar o modal de login
  const toggleLoginModal = () => {
    setShowLogin(!showLogin);
  };

  return (
    <div id="inicialPage">
      <section className="heroSection">
        <h1 className="heroTitle">Bem-vindo ao Reclama Lá</h1>
        <p className="heroSubtitle">
          Envie suas reclamações e melhore sua instituição de ensino.
        </p>
      </section>

      <section className="contentSection">
        <div className="imageTextBlock">
          <img
            src={estudantesImage}
            alt="Grupo de estudantes"
            className="contentImage"
          />
          <div className="textContent">
            <h2 className="textTitle">
              Melhoramos a interação entre estudantes e administração acadêmica
            </h2>
            <p className="textParagraph">
              Seu feedback é prioridade, suas ideias e reclamações moldam
              mudanças, e juntos melhoramos o futuro da sua universidade.
            </p>
          </div>
        </div>

        <div className="imageTextBlock">
          <div className="textContent">
            <h2 className="textTitle">
              Aqui, os estudantes encontram tranquilidade!
            </h2>
            <p className="textParagraph">
              Com uma comunicação eficiente e canais dedicados, você fica no que
              importa: estamos garantindo que suas sugestões e preocupações
              sejam tratadas com seriedade. Tranquilidade para estudar,
              praticidade para ser ouvido.
            </p>
          </div>
          <img
            src={estudanteLaptopImage}
            alt="Estudante no laptop"
            className="contentImage"
          />
        </div>
      </section>

      <section className="ctaSection">
        <h2 className="ctaTitle">Comece a dar feedbacks</h2>
        <p className="ctaSubtitle">
          Comece a compartilhar seu feedback e melhore sua interação com a
          instituição.
        </p>
        <button className="ctaButton" onClick={toggleLoginModal}>
          Acessar
        </button>
      </section>

      {showLogin && (
        <Login
          toggleLogin={toggleLoginModal}
          isRegisterVisible={isRegisterVisible}
          setIsRegisterVisible={setIsRegisterVisible}
        />
      )}
    </div>
  );
};

export default Inicial;
