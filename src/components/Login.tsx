import React, { useState } from 'react';
import '../styles/login.css';
import toggleInstituicao from '../assets/Toggle-instituicao.png';
import toggleAcademico from '../assets/Toggle-academico.png';

interface LoginProps {
  toggleLogin: () => void;
  isRegisterVisible: boolean;
  setIsRegisterVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const Login: React.FC<LoginProps> = ({ toggleLogin, isRegisterVisible, setIsRegisterVisible }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [matricula, setMatricula] = useState('');
  const [usuarioCpf, setUsuarioCpf] = useState('');
  const [nome, setNome] = useState('');
  const [instituicaoEnsino, setInstituicaoEnsino] = useState('');
  const [curso, setCurso] = useState('');
  const [razaoSocial, setRazaoSocial] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [telefone, setTelefone] = useState('');
  const [isInstitution, setIsInstitution] = useState(true);

  const handleToggle = () => setIsInstitution(!isInstitution);

  const handleRegisterToggle = () => setIsRegisterVisible(!isRegisterVisible);

  const cadastrarUsuarioAluno = async () => {
    try {
      const response = await fetch('http://localhost:8085/api/v1/usuario/cadastrarUsuario', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          matricula,
          usuarioCpf,
          username: nome,
          password,
          tipoUsuario: 'ALUNO',
          instituicao: instituicaoEnsino,
          cursoTipo: curso,
          email
        })
      });
      const data = await response.json();
      if (data.success) {
        alert('Usuário acadêmico cadastrado com sucesso.');
      } else {
        alert(data.message || 'Erro ao cadastrar usuário acadêmico.');
      }
    } catch (error) {
      console.error('Erro:', error);
      alert('Erro interno do servidor.');
    }
  };

  const loginUsuarioAluno = async () => {
    try {
      const response = await fetch('http://localhost:8085/api/v1/usuario/loginUsuarioAluno', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          matricula: matricula,
          senha: password
        })
      });
      const data = await response.json();
      if (data.success) {
        localStorage.clear();
        localStorage.setItem('usuario', JSON.stringify(data.data));
        alert('Login de usuário acadêmico bem-sucedido.');
      } else {
        alert(data.message || 'Erro ao realizar login.');
      }
    } catch (error) {
      console.error('Erro:', error);
      alert('Erro interno do servidor.');
    }
  };

  const cadastrarInstituicao = async () => {
    try {
      const response = await fetch('http://localhost:8085/api/v1/instituicao/cadastrarInstituicao', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          cnpj: cnpj,
          nome: razaoSocial,
          telefone: telefone,
          password: password,
          email: email
        })
      });
      const data = await response.json();
      if (data.success) {
        alert('Instituição cadastrada com sucesso.');
      } else {
        alert(data.message || 'Erro ao cadastrar instituição.');
      }
    } catch (error) {
      console.error('Erro:', error);
      alert('Erro interno do servidor.');
    }
  };

  const loginInstituicao = async () => {
    try {
      const response = await fetch('http://localhost:8085/api/v1/instituicao/loginInstituicao', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          cnpj: cnpj,
          senha: password
        })
      });
      const data = await response.json();
      if (data.success) {
        localStorage.clear();
        localStorage.setItem('loggedInstitution', JSON.stringify(data.data));
        alert('Login de instituição bem-sucedido.');
      } else {
        alert(data.message || 'Erro ao realizar login.');
      }
    } catch (error) {
      console.error('Erro:', error);
      alert('Erro interno do servidor.');
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (isRegisterVisible) {
      if (isInstitution) {
        cadastrarInstituicao();
      } else {
        cadastrarUsuarioAluno();
      }
    } else {
      if (isInstitution) {
        loginInstituicao();
      } else {
        loginUsuarioAluno();
      }
    }
  };

  return (
    <div className="overlay" onClick={toggleLogin}>
      <div className="container" onClick={(e) => e.stopPropagation()}>
        <h2 className="title">
          {isRegisterVisible
            ? isInstitution ? 'REGISTRO INSTITUCIONAL' : 'REGISTRO ACADÊMICO'
            : isInstitution ? 'LOGIN INSTITUCIONAL' : 'LOGIN ACADÊMICO'}
        </h2>

        {isRegisterVisible ? (
          <form onSubmit={handleSubmit}>
            {isInstitution ? (
              <>
                <div className="input-group">
                  <label>Razão Social:</label>
                  <input type="text" value={razaoSocial} onChange={(e) => setRazaoSocial(e.target.value)} required className="input" />
                </div>
                <div className="input-group">
                  <label>CNPJ:</label>
                  <input type="text" value={cnpj} onChange={(e) => setCnpj(e.target.value)} required className="input" />
                </div>
                <div className="input-group">
                  <label>Telefone:</label>
                  <input type="text" value={telefone} onChange={(e) => setTelefone(e.target.value)} required className="input" />
                </div>
                <div className="input-group">
                  <label>Email:</label>
                  <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="input" />
                </div>
                <div className="input-group">
                  <label>Senha:</label>
                  <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required className="input" />
                </div>
                <div className="input-group">
                  <label>Confirmar Senha:</label>
                  <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required className="input" />
                </div>
              </>
            ) : (
              <>
                <div className="input-group">
                  <label>Nome Completo:</label>
                  <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} required className="input" />
                </div>
                <div className="input-group">
                  <label>Matrícula:</label>
                  <input type="text" value={matricula} onChange={(e) => setMatricula(e.target.value)} required className="input" />
                </div>
                <div className="input-group">
                  <label>CPF:</label>
                  <input type="text" value={usuarioCpf} onChange={(e) => setUsuarioCpf(e.target.value)} required className="input" />
                </div>
                <div className="input-group">
                  <label>Instituição de Ensino:</label>
                  <input type="text" value={instituicaoEnsino} onChange={(e) => setInstituicaoEnsino(e.target.value)} required className="input" />
                </div>
                <div className="input-group">
                  <label>Curso:</label>
                  <input type="text" value={curso} onChange={(e) => setCurso(e.target.value)} required className="input" />
                </div>
                <div className="input-group">
                  <label>Email:</label>
                  <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="input" />
                </div>
                <div className="input-group">
                  <label>Senha:</label>
                  <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required className="input" />
                </div>
                <div className="input-group">
                  <label>Confirmar Senha:</label>
                  <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required className="input" />
                </div>
              </>
            )}
            <button type="submit" className="submit-button">Cadastrar</button>
          </form>
        ) : (
          <form onSubmit={handleSubmit}>
            {isInstitution ? (
              <>
                <div className="input-group">
                  <label>CNPJ:</label>
                  <input type="text" value={cnpj} onChange={(e) => setCnpj(e.target.value)} required className="input" />
                </div>
                <div className="input-group">
                  <label>Senha:</label>
                  <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required className="input" />
                </div>
              </>
            ) : (
              <>
                <div className="input-group">
                  <label>Matrícula:</label>
                  <input type="text" value={matricula} onChange={(e) => setMatricula(e.target.value)} required className="input" />
                </div>
                <div className="input-group">
                  <label>Senha:</label>
                  <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required className="input" />
                </div>
              </>
            )}
            <button type="submit" className="submit-button">Entrar</button>
          </form>
        )}
        
        <div className="toggle-group">
        {/* Indicador Instituição à esquerda */}
        <p className="toggle-text" onClick={handleToggle}>
          Instituição
        </p>

        {/* Ícone de alternância */}
        <img
          src={isInstitution ? toggleInstituicao : toggleAcademico}
          alt="Toggle"
          className="toggle-icon"
          onClick={handleToggle}
        />

        {/* Indicador Acadêmico à direita */}
        <p className="toggle-text" onClick={handleToggle}>
          Acadêmico
        </p>
      </div>

      <p className="toggle-text" onClick={handleRegisterToggle}>
        {isRegisterVisible ? 'Já possui conta? Entrar' : 'Não possui conta? Cadastre-se'}
      </p>

      </div>
    </div>
  );
};

export default Login;
