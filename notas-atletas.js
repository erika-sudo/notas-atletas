let atletas = [
  {
    nome: "Cesar Abascal",
    notas: [10, 9.34, 8.42, 10, 7.88]
  },
  {
    nome: "Fernando Puntel",
    notas: [8, 10, 10, 7, 9.33]
  },
  {
    nome: "Daiane Jelinsky",
    notas: [7, 10, 9.5, 9.5, 8]
  },
  {
    nome: "Bruno Castro",
    notas: [10, 10, 10, 9, 9.5]
  }
];

function calcularMediaNotas(notas) {
  let notasOrdenadas = [...notas].sort((a, b) => a - b);
  let notasValidas = notasOrdenadas.slice(1, notasOrdenadas.length - 1);
  let soma = notasValidas.reduce((total, nota) => total + nota, 0);
  return soma / notasValidas.length;
}

function calcularMedia(atletas) {
  atletas.forEach(atleta => {
    let media = calcularMediaNotas(atleta.notas);

    console.log(`Atleta: ${atleta.nome}`);
    console.log(`Notas Obtidas: ${atleta.notas.join(", ")}`);
    console.log(`Média Válida: ${media.toFixed(2)}`);
    console.log("");
  });
}

calcularMedia(atletas);
