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
    width: '100vw',
    position: 'fixed' as const,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '50px', // Define a altura do rodapé
  },
};

export default Footer;
