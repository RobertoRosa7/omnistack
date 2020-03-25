import React from 'react';
import './style.css';
import logoImg from '../../assets/logo.svg';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

export default function Register(){
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
                    <form>
                        <input placeholder="Nome da ONG" />
                        <input placeholder="E-mail" type="email" />
                        <input placeholder="Whatsapp" />
                        
                        <div className="input-group">
                            <input placeholder="cidade" />
                            <input placeholder="UF" style={{ width: 80}} />
                        </div>

                        <button className="button" type="submit">Cadastrar</button>
                    </form>
                </div>
            </div>
        </section>
    );
}