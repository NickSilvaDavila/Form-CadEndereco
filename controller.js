'use strict'; // Modo restrito
//Consumindo API de CEP, do ViaCep
// https://viacep.com.br/

//Funçao para limpar o formulario
const limparFormulario = () => {
    document.getElementById('Rua').value = '';
    document.getElementById('Bairro').value = '';
    document.getElementById('Cidade').value = '';
    document.getElementById('Estado').value = '';
}