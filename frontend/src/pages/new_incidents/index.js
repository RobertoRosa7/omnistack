import React, {useState } from 'react';
import './style.css';
import logoImg from '../../assets/logo.svg';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import api from '../../services/api';

export default function NewIncident(){
    const texts = {
        title:'Cadastrar novo caso',
        description:'Descreva o caso detalhadamente para encontrar um herói para resolver isso.',
    }
    const back = 'Voltar para home';
    const cad = 'Cadastrar';
    const input = {
        text:'Título do caso',
        textarea:'Descrição do caso',
        value:'Valor em Reais'
    }
    const [titulo, setTitulo] = useState('');
    const [descricao, setDescricao] = useState('');
    const [valor, setValor] = useState('');
    const ongId = localStorage.getItem('ongId');
    const history = useHistory();

    async function onSubmit(e){
        e.preventDefault();
        const payload = {titulo, descricao, valor};
        try{
           await api.post('/incidents', payload,{"headers":{"Authorization":ongId}});
           history.push('/profile');
        }catch(e){
            console.error(e);
        }
    }
    return (
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be the Hero"/>
                    <h1>{texts.title}</h1>
                    <p>{texts.description}</p>
                    <Link className="back-link" to="/profile">
                        <FiArrowLeft size={16} color="#e02041" />
                        {back}
                    </Link>
                </section>
                <form onSubmit={onSubmit}>
                    <input value={titulo} onChange={e => setTitulo(e.target.value)} placeholder={input.text} />
                    <textarea value={descricao} onChange={e => setDescricao(e.target.value)} placeholder={input.textarea}></textarea>
                    <input value={valor} onChange={e => setValor(e.target.value)} placeholder={input.value} />
                    <button className="button" type="submit">{cad}</button>
                </form>
            </div>
        </div>
    );
}