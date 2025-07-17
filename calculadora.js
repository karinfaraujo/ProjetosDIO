// Função principal que calcula o saldo e retorna o nível
function calcularRank(vitorias, derrotas) {
    const saldoVitorias = vitorias - derrotas;
    let nivel = "";

    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    return `O Herói tem saldo de ${saldoVitorias} e está no nível de ${nivel}`;
}

// Teste com vários jogadores 
const jogadores = [
    {vitorias: 5, derrotas: 3},
    {vitorias: 17, derrotas: 6},
    {vitorias: 30, derrotas: 10},
    {vitorias: 60, derrotas: 15},
    {vitorias: 85, derrotas: 20},
    {vitorias: 97, derrotas: 25},
    {vitorias: 120, derrotas: 40},
];

// Laço de repetição para testar vários jogadores 
for (let i = 0; i < jogadores.length; i++) {
    const { vitorias, derrotas } = jogadores[i];
    const resultado = calcularRank(vitorias, derrotas);
    console.log(resultado);
}
