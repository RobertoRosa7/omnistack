import React from 'react';

export default function Header({ children }){
    return (
        // props.children imprimir todo conteúdo dentro da tag header
        <header>
            <h1>{children}</h1>
        </header>
    );
}