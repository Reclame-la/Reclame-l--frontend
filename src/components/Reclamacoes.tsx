import '../styles/Reclamacoes.css'; 
import ReclamacoesItem from './ReclamacoesItem';

const Reclamacoes = () => {
    const reclamacoes = [
        {
            titulo: "Um concreto caiu na minha cabeça",
            etiqueta: "Infraestrutura",
            descricao: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
        },
        {
            titulo: "Não estou matriculado na matéria",
            etiqueta: "Suporte",
            descricao: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
        },
    ];

    return (
        <div className="reclamacoes-container">
            <h1 className="reclamacoes-title">Reclamações</h1>
            {reclamacoes.map((item, index) => (
                <ReclamacoesItem
                    key={index}
                    titulo={item.titulo}
                    etiqueta={item.etiqueta}
                    descricao={item.descricao}
                />
            ))}
        </div>
    );
};

export default Reclamacoes;