import React, { useState } from 'react';

interface LoginProps {
  toggleLogin: () => void; // Função para alternar a visibilidade do login
}

const Login: React.FC<LoginProps> = ({ toggleLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    alert(`Logged in with: ${email}`);
  };

  return (
    <div style={styles.overlay} onClick={toggleLogin}>
      <div style={styles.container} onClick={(e) => e.stopPropagation()}> {/* Impede que o click no formulário feche o overlay */}
        <form onSubmit={handleSubmit} style={styles.form}>
          <h2 style={styles.title}>Login</h2>
          <div style={styles.inputGroup}>
            <label>Email:</label>
            <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required
              style={styles.input} // Adiciona estilos ao input
            />
          </div>
          <div style={styles.inputGroup}>
            <label>Password:</label>
            <input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required
              style={styles.input} // Adiciona estilos ao input
            />
          </div>
          <button type="submit" style={styles.button}>Login</button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  overlay: {
    position: 'fixed' as const,
    top: 0,
    left: 0,
    width: '100vw', // Largura total
    height: '100vh', // Altura total
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fundo escuro com opacidade
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 999, // Garante que o overlay fique acima de outros elementos
  },
  container: {
    backgroundColor: 'white', // Fundo branco para o formulário
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
    width: '300px', // Define uma largura fixa
  },
  form: {
    display: 'flex',
    flexDirection: 'column' as const,
  },
  title: {
    textAlign: 'center' as 'center',
    marginBottom: '20px',
  },
  inputGroup: {
    marginBottom: '15px',
    display: 'flex',
    flexDirection: 'column' as const,
  },
  input: {
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
  },
  button: {
    padding: '10px',
    backgroundColor: '#F36A07',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default Login;
