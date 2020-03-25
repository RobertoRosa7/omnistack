import React, { useState } from 'react';
import './style.css';

import { FiLogIn } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';

import api from '../../services/api';

import herosImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';

export default function Logon(){
    const [id, setId] = useState('');
    const history = useHistory();

    async function onSubmit(e){
        e.preventDefault();
        try{
            const response = await api.post('/sessions', { id });
            console.log(response.data.nome);
            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', response.data.nome);
            history.push('/profile');
        }catch(e){
            console.error(e);
            console.log('Error não possível fazer login');
        }
    }
    return (
        <section className="logon">
            <div className="logon-container">
                <div className="form">
                    <img src={logoImg} alt="Be the Hero"/>
                    <form onSubmit={onSubmit}>
                        <h1>Faça seu logon</h1>
                        <input valeu={id} onChange={e => setId(e.target.value)} placeholder="Sua ID"/>
                        <button className="button" type="submit">Entrar</button>
                        <Link className="back-link" to="/register">
                            <FiLogIn size={16} color="#e02041"/>
                            Não tenho cadastro
                        </Link>
                    </form>
                </div>
                <img src={herosImg} alt="heros"/>
            </div>
        </section>
    );
}