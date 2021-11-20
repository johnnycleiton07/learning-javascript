 function areaQuadrado(lado){
   return lado * lado;
 }
 console.log(areaQuadrado(4)); //16

 function corFavorita(cor){
   if (cor === 'Azul'){
     return 'Eu gosto do céu';
   } else if (cor === 'Verde'){
     return 'Eu gosto do mato'
   } else{
     return 'Não gosto de nada'
   }
 }
 console.log(corFavorita('Azul'));

//conta os clicks na tela
addEventListener('click', function(){
  console.log('Clicou');
});


function terceiraIdade(idade){
  if (typeof idade !== 'number'){
    return 'Informe a sua idade!'
  } else if (idade >= 60){
    return true;
  } else {
    return false;
  }
}
console.log(terceiraIdade(61));

//variável exclusiva da função -> totalPaises 
function faltaVisitar(paisesVisitados){
  var totalPaises = 200;
  return `Falta visitar ${totalPaises - paisesVisitados} países`;
}

//Exercícios sobre funções
function verificarTrue(x){
  return (!! x);
}
console.log(verificarTrue(0))


function perimetroDoQuadrado(lado1, lado2, lado3, lado4){
  return (lado1 + lado2 + lado3 + lado4);
}
console.log(perimetroDoQuadrado(2, 2, 2, 2))


function nomeCompleto(nome, sobrenome){
  return (nome + ' ' + sobrenome);
}
console.log(nomeCompleto('Johnny', 'Cleiton'));


function numeroPar(num){
  if (typeof num !== 'number'){
    return ('Informe um número válido')
  } else if (num % 2 == 0){
    return ('É Par');
  } else{
    return ('É ímpar')
  }
}
console.log(numeroPar(35));


function tipoDeDado(dado){
  return (typeof dado);
}
console.log(tipoDeDado('aaa')) //String

//=============================================//
//OBJETOS//

//pessoa é um objeto
var pessoa = {
  nome: 'Herman Hesse',
  idade: 25,
  profissao: 'Escritor',
  possuiFaculdade: true,
}
console.log(pessoa.nome);


var quadrado = {
  lados: 4,
  area: function(lado){
    return lado * lado;
  },
  perimetro: function(lado){
    return this.lados * lado;
  },
}
console.log(quadrado.perimetro(5));
console.log(quadrado.area(5));


var menu = {
  width: 800,
  hight: 50,
  backgroundColor: '#84E',
}
backgroundColor = '#000' //setando valor
console.log(backgroundColor);

//Exercícios Objetos
var dadosPessoais = {
  meuNome: 'Johnny',
  meuSobrenome: 'Cleiton',
  minhaIdade: 25,
  minhaProfissao: 'UI/DevFrontend'
}


dadosPessoais.nomeCompleto = function(){
  return `${this.meuNome} ${this.meuSobrenome}`;
}


var cachorro = {
  raca:'labrador',
  cor: 'preto',
  idade: 20,
  latir(pessoa){
    if (pessoa === 'homem'){
      return 'Latir';
    }else{
      return 'Calado'
    }
  }
}
//no console:
//cachorro.latir('homem');

//Tudo no javascript é um objeto
var nome = 'Amora';
nome.length; //5 letras
console.log(nome.toLowerCase());
console.log(nome.toUpperCase())

var numero = 13.7;
console.log(numero.toFixed()) //arredenoda o número para inteiro -> 14

var btn = document.querySelector('.btn');
btn.classList.add('azul');
btn.innerHTML;
btn.addEventListener('click', function(){
  console.log('clicou no botão');
})


