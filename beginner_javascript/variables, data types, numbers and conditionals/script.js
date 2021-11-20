var nome = 'André';
var idade = 25;
var possuiFaculdade = true;
//console.log(nome, idade, possuiFaculdade);

var preco = 25;
var totalComprado = 5;
var totalPreco = totalComprado * preco;
//console.log(totalPreco);

var semDefinir;
//console.log(semDefinir);

var time = 'Vasco';
time = 'Flamengo'; //reescrevendo a variável time


//Exercício de Variáveis
var meuNome = 'Johnny';
var minhaIdade = 25;
var comidaFavorita;
comidaFavorita = 'coxinha de frango';
var a, b, c, d, e;

//====================================//

var name = "João"; //String
var age = 25; //Number
var male = true; //Boolean
var indefinida; //Undefined
var simbolo = Symbol(); //Symbol
var novoObjeto = {}; //Object

var f = "f"
//console.log(typeof f); //verificar tipo de dado

//concatenar strings e dados
var primeiroNome = 'André';
var segundoNome = 'Rafael';
var nomeCompleto = primeiroNome + ' ' + segundoNome

var gols = 10;
var frase1 = 'Romário fez ' + gols + ' gols nessa temporada';

var frase2 = `Romário fez ${gols * 2} gols nessa temporada`;

//adicionar áspas na frase da variável
var frase3 = 'Esse é o \"melhor\" jogo';

var ano = '2021';
var mes = 9;
var data = mes + ' ' + ano;

//Exercício de Tipos de Variáveis
var animal = 'gato';
var numero = '1996'
var myage = 25;
var nom = 'Silvio';
var sob = 'Pinto';
var comp = `${nom} ${sob}`;
var frase4 = 'It\'s\ time';
var frase5 = "It's time";
var frase6 = `It's time`;
var verificar = typeof animal;

//====================================//

var pi = 3.14; //ponto para decimal
var exponencial = 2e10; //20000000000
var modulo = 10 % 3;//3
var divExata = 10/3; //3.333333...

var soma = '100' + 50; //10050

//É POSSIVEL SUBTRAIR, DIVIDIR E MULTIPLICAR STRING COM NUMERO
var subtracao = '100' - 50; //50 
var divisao = '100' / 50; //2
var multiplicacao = '100' * 50 //5000

//A ordem importa:
var t1 = 20 + 5 * 2; //30
var t2 = (20 + 5) * 2; //50
var t3 = 20 / 2 * 5; //50 -> primeiro divide
var t4 = 10 + 2 - 2 / 2 * 2; //10 (divisão -> multiplicação -> subtração -> adição)

//Operadores aritméticos unários
var x = 5;
var y = +'25'; //tranforma em número positivo
var z = -'25'; //trans. número negativo

//Exercício sobre Números
var t5 = 10 + 5 * 2 / 2 + 20; //35
var expressao1 = 'Teste' / 2; //NaN
var expressao2 = 'Teste' - 2; //NaN
var somaSeN = +'200' + 50;
var somaSeN5 = somaSeN + 5; //incrementando mais 5
var numero = +'80' / 2;
var unidade = 'kg';
var peso = numero + unidade; //80kg

//====================================//

var exe;
var possuiDoutorado = false;
var possuiMestrado = true;
var possuiGraduacao = true;

if(possuiDoutorado){
  console.log('Possui Doutorado');
} else if (possuiMestrado){
  console.log('Possui Mestrado');
} else if (possuiGraduacao){
  console.log('Possui Graduação');
}

var x = 'Gato';
console.log(x === 'Gato'); // 3 simbolos de igualdade verifica estritamente (é o recomendado)

// && compara se uma expressão "E" a outra é verdadeira
console.log(true && false); 
console.log(true && true);
console.log(false && false);

// || compara se uma expressão "OU" a outra é verdadeira
console.log(true || false);
console.log(true || true);
console.log(false || false);

var corfavorita = 'Azul';
switch (corfavorita){
  case 'Azul':
    console.log('Olhe para o céu.');
    break;
  case 'Verde':
    console.log('Olhe para a floresta');
}

//Exercícios sobre Boleanos e Condicionais
var minhaIdade = 25;
var idadePrimo = 32;
if (minhaIdade > idadePrimo){
  console.log('É maior');
} else if (minhaIdade === idadePrimo){
  console.log('É igual');
} else {
  console.log('É menor');
}

var expressao = (5 - 2) && (5 - ' ') && (5 - 2);
console.log(expressao); //3
console.log(5 - ' '); //5