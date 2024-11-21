import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer style={styles.footer}>
      <p>&copy; 2024 Reclama Lá. Todos os direitos reservados.</p>
    </footer>
  );
};

const styles = {
  footer: {
    padding: '10px',
    backgroundColor: '#F36A07',
    color: 'white',
    textAlign: 'center' as const,
    width: '100%',
    position: 'relative' as const, // Faz o footer ser parte do fluxo normal da página
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '50px',
    boxShadow: '0 -2px 5px rgba(0, 0, 0, 0.1)',
    zIndex: 1000,
  },
};

export default Footer;
