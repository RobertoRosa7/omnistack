import React from 'react';
import './style.css';
import { FiLogIn } from 'react-icons/fi';
import herosImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';
import { Link } from 'react-router-dom';

export default function Logon(){
    return (
        <section className="logon">
            <div className="logon-container">
                <div className="form">
                    <img src={logoImg} alt="Be the Hero"/>
                    <form>
                        <h1>Faça seu logon</h1>
                        <input placeholder="Sua ID"/>
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