import { useEffect, useState } from 'react';
import '../styles/Reclamacoes.css'; 
import ReclamacoesItem from './ReclamacoesItem';

interface Comentario {
    id: number;
    tituloComentario: string;
    conteudoComentario: string;
    qtdCurtidas: number;
    categoriaComentario: string;
  }
  
const Reclamacoes = () => {
    const [reclamacoesFormatadas, setReclamacoesFormatadas] = useState<
    { titulo: string; etiqueta: string; descricao: string }[]
  >([]);

    const fetchComentarios = async () => {
        try {
          const response = await fetch(
            "http://localhost:8085/api/v1/comentarios/listarComentarios",
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
      
          if (!response.ok) {
            throw new Error("Erro ao buscar comentários");
          }
      
          const responseText = await response.text();
      
          const data: Comentario[] = JSON.parse(responseText); // Define o tipo da resposta
      
          // Mapeia os dados para o formato desejado
          const mappedData = data.map((item: Comentario) => ({
            titulo: item.tituloComentario,
            etiqueta: item.categoriaComentario,
            descricao: item.conteudoComentario,
          }));
      
          setReclamacoesFormatadas(mappedData); // Atualiza o estado com os dados mapeados
        } catch (error) {
          console.error("Erro ao buscar comentários:", error);
        }
      };
      
      useEffect(() => {
        fetchComentarios();
      }, []);

    return (
        <div className="reclamacoes-container">
            <h1 className="reclamacoes-title">Reclamações</h1>
            {reclamacoesFormatadas.map((item, index) => (
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