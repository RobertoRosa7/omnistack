import React, { useEffect, useState } from 'react';
import './style.css';
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';
import api from '../../services/api';

export default function Profile(){
    const ongName = localStorage.getItem('ongName');
    const ongId = localStorage.getItem('ongId');
    const [incidents, setIncidents] = useState([]);
    const history = useHistory();

    useEffect(() => {
        api.get('/profile', {headers:{Authorization: ongId}})
            .then(response => setIncidents(response.data))
            .catch((e) => console.error(e));
    }, [ongId])
    
    async function handleDeleteIncident(id){
        try{
            await api.delete(`incidents/${id}`, {headers:{Authorization:ongId}});
            setIncidents(incidents.filter(incident => incident.id != id));
        }catch(e){
            console.error(e);
        }
    }
    function handleLogout(){
        localStorage.clear();
        history.push('/')
    }
    return (
        <section className="profile">
            <div className="profile-container">
                <header>
                    <img src={logoImg} alt="Be the Hero" />
                        <span>Seja bem vindo, {ongName}</span>
                    <Link className="button" to="/incident/new">Cadastrar novo caso</Link>
                    <button onClick={handleLogout} type="button"><FiPower size={18} color="#e02041" /></button>
                </header>

                <h1>Casos cadastrados</h1>

                <ul>
                    {incidents.map(incident => (
                        <li key={incident.id}>
                            <strong>CASO:</strong>
                            <p>{incident.titulo}</p>

                            <strong>DESCRIÇÃO:</strong>
                            <p>{incident.descricao}</p>

                            <strong>VALOR:</strong>
                            {/* <p>{incident.valor}</p> */}
                            <p>{Intl.NumberFormat('pt-BR',{style:'currency', currency:'BRL'}).format(incident.valor)}</p>

                            <button onClick={() => handleDeleteIncident(incident.id)} type="button" ><FiTrash2 size={20} color="#a8a8b3"/></button>
                        </li>
                    ))}
                    {/* <li>
                        <strong>CASO:</strong>
                        <p>caso teste</p>

                        <strong>DESCRIÇÃO:</strong>
                        <p>descrição teste</p>

                        <strong>VALOR:</strong>
                        <p>R$ 1.200,00</p>

                        <button type="button" ><FiTrash2 size={20} color="#a8a8b3"/></button>
                    </li>
                    <li>
                        <strong>CASO:</strong>
                        <p>caso teste</p>

                        <strong>DESCRIÇÃO:</strong>
                        <p>descrição teste</p>

                        <strong>VALOR:</strong>
                        <p>R$ 1.200,00</p>

                        <button type="button" ><FiTrash2 size={20} color="#a8a8b3"/></button>
                    </li>
                    <li>
                        <strong>CASO:</strong>
                        <p>caso teste</p>

                        <strong>DESCRIÇÃO:</strong>
                        <p>descrição teste</p>

                        <strong>VALOR:</strong>
                        <p>R$ 1.200,00</p>

                        <button type="button" ><FiTrash2 size={20} color="#a8a8b3"/></button>
                    </li> */}
                </ul>
            </div>
        </section>
    );
}