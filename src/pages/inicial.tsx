import React from "react";
import estudantesImage from "../assets/estudantes.png"; // Ajuste o caminho conforme a estrutura do seu projeto
import estudanteLaptopImage from "../assets/estudante-laptop.png"; // Ajuste o caminho conforme a estrutura do seu projeto

const Inicial: React.FC = () => {
  return (
    <div style={styles.inicialPage}>
      <section style={styles.heroSection}>
        <h1 style={styles.heroTitle}>Bem-vindo ao Reclama Lá</h1>
        <p style={styles.heroSubtitle}>
          Envie suas reclamações e melhore sua instituição de ensino.
        </p>
      </section>

      <section style={styles.contentSection}>
        <div style={styles.imageTextBlock}>
          <img
            src={estudantesImage}
            alt="Grupo de estudantes"
            style={styles.contentImage}
          />
          <div style={styles.textContent}>
            <h2 style={styles.textTitle}>
              Melhoramos a interação entre estudantes e administração acadêmica
            </h2>
            <p style={styles.textParagraph}>
              Seu feedback é prioridade, suas ideias e reclamações moldam
              mudanças, e juntos melhoramos o futuro da sua universidade.
            </p>
          </div>
        </div>

        <div style={styles.imageTextBlock}>
          <div style={styles.textContent}>
            <h2 style={styles.textTitle}>
              Aqui, os estudantes encontram tranquilidade!
            </h2>
            <p style={styles.textParagraph}>
              Com uma comunicação eficiente e canais dedicados, você fica no que
              importa: estamos garantindo que suas sugestões e preocupações
              sejam tratadas com seriedade. Tranquilidade para estudar,
              praticidade para ser ouvido.
            </p>
          </div>
          <img
            src={estudanteLaptopImage}
            alt="Estudante no laptop"
            style={styles.contentImage}
          />
        </div>
      </section>

      <section style={styles.ctaSection}>
        <h2 style={styles.ctaTitle}>Comece a dar feedbacks</h2>
        <p style={styles.ctaSubtitle}>
          Comece a compartilhar seu feedback e melhore sua interação com a
          instituição
        </p>
        <button style={styles.ctaButton}>Acessar</button>
      </section>
    </div>
  );
};

const styles = {
  inicialPage: {
    margin: "0",
    padding: "20px",
    textAlign: "center" as "center",
    fontFamily: "Arial, sans-serif",
  },
  heroSection: {
    marginBottom: "40px",
  },
  heroTitle: {
    fontSize: "2.5rem",
    color: "#333",
  },
  heroSubtitle: {
    fontSize: "1.2rem",
    color: "#666",
  },
  contentSection: {
    display: "flex",
    flexDirection: "column" as "column",
    gap: "40px",
    marginBottom: "40px",
  },
  imageTextBlock: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  contentImage: {
    width: "45%",
    borderRadius: "10px",
  },
  textContent: {
    width: "50%",
    textAlign: "left" as "left",
  },
  textTitle: {
    fontSize: "1.8rem",
    color: "#333",
  },
  textParagraph: {
    fontSize: "1.1rem",
    color: "#666",
  },
  ctaSection: {
    backgroundImage: 'url(src/assets/mac.png)', // Adicionando a imagem de fundo
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    padding: '100px',
    borderRadius: '10px',
    color: 'white', // Mudando a cor do texto para melhorar a visibilidade
  },
  ctaTitle: {
    fontSize: "2rem",
    marginBottom: "10px",
  },
  ctaSubtitle: {
    fontSize: "1.2rem",
    marginBottom: "20px",
  },
  ctaButton: {
    padding: "10px 20px",
    backgroundColor: "#ff6600",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "1rem",
  },
};

export default Inicial;
