console.log('Olá Mundo!');

// Introduzindo 10 erros intencionais
variavelNaoDeclarada = 10; // Erro 1: Declarar variável sem usar var, let ou const

objetoNaoDefinido.propriedade; // Erro 2: Tentativa de acessar uma propriedade de um objeto que não existe

if (verdadeiro) { // Erro 3: Sintaxe incorreta na estrutura de controle de fluxo
  console.log("Verdadeiro");
} else {
  console.log("Falso");
}

funcaoNaoDefinida(); // Erro 4: Chamada de função não definida

const resultado = 10 + "20"; // Erro 5: Uso incorreto de operadores

function(){ // Erro 6: Sintaxe incorreta para declaração de função
  console.log("Função sem nome");
}

console.log(variavelNaoDeclarada2); // Erro 7: Uso de variável não declarada

teste()); // Erro 8: Erro de sintaxe na chamada de função

objetoNaoDefinido2.propriedade2; // Erro 9: Tentativa de acessar uma propriedade de um objeto que não existe

{ // Erro 10: Uso incorreto de delimitadores de bloco
  console.log("Bloco sem uso");
}
