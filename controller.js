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

// Verificar se CEP e valido
const eNumero = (numero) => /^[0-9]+$/.teste(numero); //testa numero informado com expressao regular
const cepValido = (cep) => cep.lenght == 8 && eNumero(cep); // verifica tamanho do cep digitado e executa funçao de validaçao do cep eNumero 