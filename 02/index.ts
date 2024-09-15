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
