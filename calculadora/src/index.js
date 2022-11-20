import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Calculator from './main/Calculator';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <div>
    <h1>Calculadora</h1>

    <Calculator />

    
    <footer>
      <h4>Produzida por Daniel Augusto Moore da Silva</h4>
      Acesse o código em: <a href="https://github.com/Dagmoores/Projeto-Calculadora">Github</a>
    </footer>


    </div>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
