var list = ['Delta', 'alpha', 'CHARLIE', 'bravo'];

// array temporário que armazena os objetos com o índice e o valor para ordenação
var mapped = list.map(function(el, i) {
  return { index: i, value: el.toLowerCase() };
})
let d = 0