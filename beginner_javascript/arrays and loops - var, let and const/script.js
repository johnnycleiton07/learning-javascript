var videoGames = ['switch', 'ps4', 'xbox'];
videoGames[0]
console.log(videoGames[2]);

console.log(videoGames.pop()); //remove o ultimo item e retorna ele
console.log(videoGames);

console.log(videoGames.push('3DS')); //adiciona ao final do array
console.log(videoGames);

//====================================//
//FOR LOOP
//numero++ -> numero = numero + 1 (contador)
for (var numero = 0; numero < 10; numero++){
  console.log(numero);
}

//WHILE LOOP
var i = 10; 
while (i < 20){
  console.log(i);
  i++;
}


//====================================//
var lista = ['a', 'b', 'c', 'd'];

for (var item = 0; item < 4; item++){
  console.log(lista[item]);
}

for (var item = 0; item < lista.length; item++){
  console.log(lista[item] + ' lista 2');
}

for (var item = 0; item < lista.length; item++){
  console.log(lista[item]);
  if (lista[item] === 'b'){
    break;
  }
}

lista.forEach(function(item){
  console.log(item);
})

//Exercícios array e loop
var brasilCampeao = [1959, 1962, 1970, 1994, 2002];

for (var i = 0; i < brasilCampeao.length; i++){
console.log(`O brasil ganhou a copa de ${brasilCampeao[i]}`)
}

var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância']
for (var fruta = 0; fruta < frutas.length; fruta++){
  console.log(frutas[fruta]);
  if (frutas[fruta] === 'Pera'){
    break;
  }
}

var ultimaFruta = frutas[frutas.length - 1];
console.log(ultimaFruta); //Melância


//====================================//
var idade = 20;
var naoPossuiDiabetes = true;

var podeBeber;
podeBeber = (idade >= 18 && naoPossuiDiabetes) ? 'Pode beber!' : 'Não pode beber!';
console.log(podeBeber);

var possuiCarro = true;
var possuiCasa = true;
var darCredito;

darCredito = (possuiCarro && possuiCasa);
console.log(darCredito);

//========================================//
//const, let e var

{
var cor = 'preto';
const marca = 'Fiat';
let portas = 4;
console.log(cor, marca, portas);
}

    /**
    var e let são parecidos, mas possuem diferença de escopo
    o var é global
    o let só funciona dentro do bloco em que vc declarou ele
    o const possui o mesmo esquema de escopo do let, porém ele não modifica mais por ser uma "constante", a não ser que seja objeto.
    */

if (true){
  var a = 10;
  a = 11;
}
console.log(a + ' -> imprimindo variável com var')

/**
if (true){
  let b = 10;
}
console.log(b + ' -> imprimindo variável com let')
*/
if (true){
  let b = 20;
  b = 21;
console.log(b + ' -> imprimindo variável com let')
}

if (true){
  const c = 30;
  //c = 31; dá erro
  console.log(c + ' -> imprimindo variável com const');
}

