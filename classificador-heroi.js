// Lista de heróis (animes) para simular vários testes com laço de repetição
const herois = [
  { nome: "Goku", xp: 15000 },          // Dragon Ball
  { nome: "Naruto Uzumaki", xp: 9800 }, // Naruto
  { nome: "Saitama", xp: 8600 },        // One Punch Man
  { nome: "Luffy", xp: 7200 },          // One Piece
  { nome: "Ichigo Kurosaki", xp: 6800 },// Bleach
  { nome: "Deku", xp: 4500 },           // My Hero Academia
  { nome: "Tanjiro", xp: 1700 },        // Demon Slayer
  { nome: "Gon Freecss", xp: 950 },     // Hunter x Hunter
  { nome: "Levi Ackerman", xp: 8300 },  // Attack on Titan
  { nome: "Light Yagami", xp: 3200 }    // Death Note
];

// Laço para classificar cada herói
for (let i = 0; i < herois.length; i++) {
  let nome = herois[i].nome;
  let xp = herois[i].xp;
  let nivel = "";

  // Estrutura de decisão para determinar o nível
  if (xp < 1000) {
    nivel = "Ferro";
  } else if (xp <= 2000) {
    nivel = "Bronze";
  } else if (xp <= 5000) {
    nivel = "Prata";
  } else if (xp <= 7000) {
    nivel = "Ouro";
  } else if (xp <= 8000) {
    nivel = "Platina";
  } else if (xp <= 9000) {
    nivel = "Ascendente";
  } else if (xp <= 10000) {
    nivel = "Imortal";
  } else {
    nivel = "Radiante";
  }
  
  // Exibe o resultado
  console.log(`O Herói de nome ${nome} está no nível de ${nivel}`);
}
