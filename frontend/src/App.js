import React, { useState } from 'react';
import './global.css';
import Header from './Header';
import Logon from './pages/logon';

/**
 * JSX: integração do HTML dentro do JavaScript
 */
function App() {
  // let counter = 0; sem estado reativo
  // let counter = useState(0); // com estado reativo, mas com imutabilidade
  // useState return Array = [valor, funcaoDeAtualizacaoDoValor]
  // const [counter, setCounter] = useState(0);
  // function increment(){
  //   // counter++; // error há imutabilidade devido uso do useState
  //   // setCounter(counter + 1); // uso da função para atualização do valor
  // }

  return (
    // <div>
    //   <Header>Contador: {counter}</Header>
    //   <button onClick={increment}>Incrementar</button>
    // </div>
    <Logon />
  );
}

export default App;
