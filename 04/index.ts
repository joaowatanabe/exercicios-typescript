const cidadesValidas = (cidades: string[]): string | string[] => {
  const cidadesFiltradas = cidades.filter((cidadeAtual) => {
    return cidadeAtual.length <= 8;
  });

  if (cidadesFiltradas.length === 0) {
    return "Nenhuma cidade válida";
  }

  return cidadesFiltradas; 
};

const cidades: string[] = [
  "Salvador",
  "São Paulo",
  "Brasilia",
  "Recife",
  "Rio de Janeiro",
];

console.log(cidadesValidas(cidades))