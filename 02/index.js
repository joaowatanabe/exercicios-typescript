var buscarLivro = function (livros, nomeLivro) {
    var posicao = livros.indexOf(nomeLivro);
    if (posicao === -1) {
        return 'Livro não encontrado';
    }
    return "O Livro est\u00E1 na posi\u00E7\u00E3o ".concat(posicao);
};
// Vamos usar o indexOf - para percorrer o array e encontrar a posição do livro,
// caso não encontre a posicao do livro ele retorna -1.
var livros = [
    "Guerra e Paz",
    "A Montanha Mágica",
    "Cem Anos de Solidão",
    "Dom Quixote",
    "A Divina Comédia",
];
console.log(buscarLivro(livros, 'Dom Quixote'));
