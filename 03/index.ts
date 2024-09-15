const validarArray = (numeros: number[]): string => {
  // verifica se todos são pares
  const ehpar :boolean = numeros.every((elementoAtual) => elementoAtual % 2 === 0);

  return ehpar ? "Array Válido" : "Array Inválido";
};

const numeros: number[] = [0, 122, 4, 6, 7, 8, 44];

console.log(validarArray(numeros));
