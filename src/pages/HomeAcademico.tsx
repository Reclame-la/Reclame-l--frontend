
import { useState } from 'react';
import universidadeLogo from '../assets/universidade-logo.png'
import ModalReclamar from '../components/ModalReclamar';
import Reclamacoes from '../components/Reclamacoes';
import '../styles/HomeAcademico.css';

function HomeAcademico() {
    const [showReclamarModal, setShowReclamarModal] = useState(false);

    const openReclamarModal = () => {
        setShowReclamarModal(true);
      };
    
      const closeReclamarModal = () => {
        setShowReclamarModal(false);
      };

    return (
        <>
        <div className="home-academico-container">
            <div className="info-section">
                <img src={universidadeLogo} alt="Logo universidade" className="logo-universidade" />
                <div className="text-container">
                    <span className="university-name">UNIT</span>
                    <i className="bi bi-check2-all icon"></i>
                    <span className="students">+100 alunos</span>
                </div>
            </div>
            <button className="reclaim-button" onClick={openReclamarModal}>
                <i className="bi bi-megaphone icon-button"></i>
                Reclamar
            </button>
        </div>
        <Reclamacoes />
        <ModalReclamar show={showReclamarModal} onClose={closeReclamarModal} />
        </>
        
    );
}
  
  export default HomeAcademico
  