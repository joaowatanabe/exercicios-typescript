const filtroPares = (numeros: number[]): number[] | string => {
  const resultado = numeros.filter((numero) => {
    return numero % 2 === 0;
  });

  if (resultado.length === 0) {
    return "Nenhum numero par";
  }

  return resultado;
};

const arrayNumeros: number[] = [1, 98, -76, 0, 12, 19, 5, 60, 44];

console.log(filtroPares(arrayNumeros));
