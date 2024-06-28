import React, { FormEvent, useState } from 'react';

function Formulario() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [mensagem, setMensagem] = useState('');

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault(); // Evita o envio padrão do formulário
        console.log('Formulário enviado!');
        // Insira sua lógica de envio de dados ou manipulação de formulário aqui
    };

    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <label htmlFor="nome">Nome:</label>
            <input type="text" id="nome" value={nome} onChange={(event) => setNome(event.target.value)} />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" value={email} onChange={(event) => setEmail(event.target.value)} />

            <label htmlFor="mensagem">Mensagem:</label>
            <textarea id="mensagem" value={mensagem} onChange={(event) => setMensagem(event.target.value)} />

            <button type="submit">Enviar</button>
        </form>
    );
}

export default Formulario;