/* PASSO 1 */
const saudacao = document.querySelector("#saudacao-voluntario");
const dataHoras = new Date().getHours();

const saudacaoDinamica =
  dataHoras < 12
    ? "Plantão matinal, Protetor!"
    : dataHoras >= 12 && dataHoras < 18
      ? "Plantão da tarde, Protetor!"
      : "Plantão noturno, Protetor!";

saudacao.textContent = saudacaoDinamica;

/* PASSO 2 */
const banner = document.querySelector("#banner-adocao");

banner.addEventListener("mouseover", () => {
  banner.classList.add("destaque-pet");
});

banner.addEventListener("mouseout", () => {
  banner.classList.remove("destaque-pet");
});

/* PASSO 3 */
const idadePet = document.querySelector("#idade-pet");
const idadeHumano = document.querySelector("#idade-humana");

idadePet.addEventListener("input", () => {
  const valorCalculo = idadePet.value * 7;
  idadeHumano.textContent = valorCalculo;
});

/* PASSO 4 */
const botaoCadastro = document.querySelector("#btn-cadastrar");
const nomePet = document.querySelector("#nome-pet");

/* Também usado no PASSO 5 */
const listaAdocao = document.querySelector("#lista-adocao");

botaoCadastro.addEventListener("click", () => {
  if (nomePet.value == "") {
  } else {
    listaAdocao.innerHTML += `<article class="card-adocao"> <h3>🐾 ${nomePet.value}</h3> </article>`;
  }
});

/* PASSO 5 */
const botaoLimpar = document.querySelector("#btn-limpar");

botaoLimpar.addEventListener("click", () => {
  listaAdocao.innerHTML = "";
  nomePet.value = "";
  idadePet.value = "";
  idadeHumano.textContent = 0;
});
