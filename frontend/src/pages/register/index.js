import React, { useState } from 'react';
import './style.css';
import logoImg from '../../assets/logo.svg';
import api from '../../services/api';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

export default function Register(){
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [cidade, setCidade] = useState('');
    const [uf, setUf] = useState('');
    
    const history = useHistory();

   async function handleRegister(e){
        e.preventDefault();
        const payload = {nome, email, whatsapp, cidade, uf};
        try{
            const response = await api.post('/ongs', payload);
            console.log(`ID gerado com sucesso, ${response.data.id}`);
            history.push('/');
        }catch(e){
            console.error(e);
        }
    }
    return (
        <section className="register">
            <div className="register-container">
                <div className="content">
                    <section>
                        <img src={logoImg} alt="Be the Hero"/>
                        <h1>Faça seu cadastro</h1>
                        <p>Faça seu cadastro, entre na plataforma e ajuda pessoas a encontrarem os casos da sua ONG.</p>
                        <Link className="back-link" to="/">
                            <FiArrowLeft size={16} color="#e02041" />
                            Já tenho conta
                        </Link>
                    </section>
                    <form onSubmit={handleRegister}>
                        <input value={nome} onChange={e => setNome(e.target.value)} placeholder="Nome da ONG" />
                        <input value={email} onChange={e => setEmail(e.target.value)} placeholder="E-mail" type="email" />
                        <input value={whatsapp} onChange={e => setWhatsapp(e.target.value)} placeholder="Whatsapp" />
                        
                        <div className="input-group">
                            <input value={cidade} onChange={e => setCidade(e.target.value)} placeholder="cidade" />
                            <input value={uf} onChange={e => setUf(e.target.value)} placeholder="UF" style={{ width: 80}} />
                        </div>

                        <button className="button" type="submit">Cadastrar</button>
                    </form>
                </div>
            </div>
        </section>
    );
}