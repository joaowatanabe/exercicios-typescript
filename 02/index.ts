const buscarLivro = (livros:string[], nomeLivro:string) :string => {
  const posicao:number = livros.indexOf(nomeLivro)
  
  if (posicao === -1) {
    return 'Livro não encontrado'
  }

  return `O Livro está na posição ${posicao}`
}

const livros:string[] = [
  "Guerra e Paz",
  "A Montanha Mágica",
  "Cem Anos de Solidão",
  "Dom Quixote",
  "A Divina Comédia",
]

console.log(buscarLivro(livros, 'A Divina Comédia'));

// Usando o buscarLivros com o método de arrays indexOf (Percorre o array encontrando a posição e retornando, caso não encontre retorna -1), dentro das condiçoes do buscar livros tipamos o livros sendo um array de strings (:string[]),  e o nomeLivro o livro a ser encontrado (:string), e buscarLivro retorna uma sting (:string).