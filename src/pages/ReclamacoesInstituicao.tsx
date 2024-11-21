import { useNavigate } from "react-router-dom"; // Importa o hook useNavigate
import "../styles/ReclamacoesInstituicao.css";

const ReclamacoesInstituicao = () => {
  const navigate = useNavigate(); // Inicializa o hook de navegação

  const reclamacoes = [
    {
      id: 1,
      tipo: "Infraestrutura",
      descricao: "Computadores do laboratório 2 estão muito lentos.",
      curtidas: 42,
    },
    {
      id: 2,
      tipo: "Infraestrutura",
      descricao: "Computadores do laboratório 2 estão muito lentos.",
      curtidas: 42,
    },
    {
      id: 3,
      tipo: "Infraestrutura",
      descricao: "Computadores do laboratório 2 estão muito lentos.",
      curtidas: 42,
    },
  ];

  // Função para lidar com o clique no botão 'Sair'
  const handleLogout = () => {
    navigate("/"); // Redireciona para a página inicial
  };

  return (
    <main className="reclamacoes-instituicao">
      {/* Lado esquerdo */}
      <aside className="menu-lateral">
        <div className="usuario">
          <img
            src="https://via.placeholder.com/80"
            alt="Logo Unit"
            className="usuario-logo"
          />
          <h2>UNIT</h2>
          <p>Tempo médio de resposta: 1h:57min</p>
        </div>
        <div className="menu-opcoes">
          <button className="menu-botao ativo">Mais Recentes</button>
          <button className="menu-botao">Mais Recorrentes</button>
        </div>
        <button className="sair-botao" onClick={handleLogout}>Sair</button> {/* Adiciona a ação de logout */}
      </aside>

      {/* Lado direito */}
      <section className="reclamacoes-conteudo">
        <div className="reclamacoes-header">
          <h1>Número total de reclamações: {reclamacoes.length}</h1>
          <div className="filtro">
            <span>Filtrar por tipo:</span>
            <button>🔽</button>
          </div>
        </div>
        {reclamacoes.length > 0 ? (
          <ul className="reclamacoes-lista">
            {reclamacoes.map((reclamacao) => (
              <li key={reclamacao.id} className="reclamacao-item">
                <div className="reclamacao-conteudo">
                  <h2>Tipo: {reclamacao.tipo}</h2>
                  <p>Descrição: {reclamacao.descricao}</p>
                  <button className="responder-botao">Responder</button>
                </div>
                <div className="curtidas">
                  <span>❤️ {reclamacao.curtidas}</span>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p>Não há reclamações disponíveis.</p>
        )}
      </section>
    </main>
  );
};

export default ReclamacoesInstituicao;
