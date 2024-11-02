import React, { useState } from 'react';
import '../styles/Reclamacoes.css'; 

interface ModalReclamarProps {
  show: boolean;
  onClose: () => void;
}

interface Errors {
  titulo: boolean;
  reclamacao: boolean;
  categoria: boolean;
}

const ModalReclamar: React.FC<ModalReclamarProps> = ({ show, onClose }) => {
  const [titulo, setTitulo] = useState<string>('');  
  const [reclamacao, setReclamacao] = useState<string>('');  
  const [categoria, setCategoria] = useState<string>('');  
  const [errors, setErrors] = useState<Errors>({
    titulo: false,
    reclamacao: false,
    categoria: false,
  }); 

  const handleSubmit = async () => {
    const validationErrors: Errors = {
        titulo: titulo.trim() === '',
        reclamacao: reclamacao.trim() === '',
        categoria: categoria === '',
    };

    setErrors(validationErrors);

    if (!validationErrors.titulo && !validationErrors.reclamacao && !validationErrors.categoria) {
        try {
            console.log(categoria);
            const response = await fetch('http://localhost:8085/api/v1/comentarios', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    tituloComentario: titulo,
                    conteudoComentario: reclamacao,
                    categoriaComentario: categoria.toUpperCase(),
                    matriculaUsuario: 123456  
                }),
            });

            if (!response.ok) {
                const errorMessage = await response.text(); // Captura o corpo da resposta
                console.error('Erro na resposta do servidor:', errorMessage);
                throw new Error(`Erro ao enviar o comentário: ${response.statusText}`);
            }

            // Limpa os campos e fecha o modal
            setTitulo('');
            setReclamacao('');
            setCategoria('');
            onClose();
            
            // Exibe o alerta e atualiza a página
            alert('Comentário enviado com sucesso!');
            window.location.reload();
        } catch (error) {
            console.error('Erro ao enviar o comentário:', error);
            alert('Houve um erro ao enviar seu comentário'); 
        }
    }
};
  

  return (
    <div className={`modal ${show ? 'd-block' : 'd-none'}`} tabIndex={-1} style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" style={{ color: '#ff7f00' }}>Reclamação</h5>
            <button type="button" className="btn-close" aria-label="Close" onClick={onClose}></button>
          </div>
          <div className="modal-body">
            <form>
              <div className="mb-3">
                <label htmlFor="titulo" className="form-label">Título:</label>
                <input
                  type="text"
                  className={`form-control ${errors.titulo ? 'is-invalid' : ''}`}
                  id="titulo"
                  value={titulo}
                  onChange={(e) => setTitulo(e.target.value)}
                  placeholder="Digite o título"
                />
                {errors.titulo && <div className="invalid-feedback">Por favor, insira um título.</div>}
              </div>

              <div className="mb-3">
                <label htmlFor="categoria" className="form-label">Categoria:</label>
                <select
                  className={`form-select ${errors.categoria ? 'is-invalid' : ''}`}
                  id="categoria"
                  value={categoria}
                  onChange={(e) => setCategoria(e.target.value)}
                >
                  <option value="">Selecione uma categoria</option>
                  <option value="Infraestrutura">Infraestrutura</option>
                  <option value="Ensino">Ensino</option>
                  <option value="Suporte">Suporte</option>
                </select>
                {errors.categoria && <div className="invalid-feedback">Por favor, selecione uma categoria.</div>}
              </div>

              <div className="mb-3">
                <label htmlFor="reclamacao" className="form-label">Reclamação:</label>
                <textarea
                  className={`form-control ${errors.reclamacao ? 'is-invalid' : ''}`}
                  id="reclamacao"
                  rows={4}
                  value={reclamacao}
                  onChange={(e) => setReclamacao(e.target.value)}
                  placeholder="Descreva sua reclamação"
                ></textarea>
                {errors.reclamacao && <div className="invalid-feedback">Por favor, descreva sua reclamação.</div>}
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn" style={{ backgroundColor: '#ff7f00', color: '#fff' }} onClick={handleSubmit}>Enviar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalReclamar;
