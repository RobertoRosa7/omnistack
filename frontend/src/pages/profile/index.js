import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/logo.svg';
import { FiPower, FiTrash2 } from 'react-icons/fi';

export default function Profile(){
    return (
        <section className="profile">
            <div className="profile-container">
                <header>
                    <img src={logoImg} alt="Be the Hero" />
                    <span>Seja bem vindo, APAD</span>
                    <Link className="button" to="/incident/new">Cadastrar novo caso</Link>
                    <button type="button"><FiPower size={18} color="#e02041" /></button>
                </header>

                <h1>Casos cadastrados</h1>

                <ul>
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
                </ul>
            </div>
        </section>
    );
}