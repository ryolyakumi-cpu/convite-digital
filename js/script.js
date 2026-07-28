document.getElementById("nome").textContent = convite.nome;
document.getElementById("idade").textContent = convite.idade;
document.getElementById("data").textContent = convite.data;
document.getElementById("horario").textContent = convite.horario;
document.getElementById("local").textContent = convite.local;
document.getElementById("tipoPix").textContent = convite.pix.tipo;
document.getElementById("chavePix").textContent = convite.pix.chave;
document.getElementById("qrPix").src = convite.pix.qr;



const botao = document.getElementById("abrirConvite");

botao.addEventListener("click", () => {

    document.getElementById("informacoes").scrollIntoView({
        behavior: "smooth"
    });
});

const lista = document.getElementById("ListadePresentes");

convite.presentes.forEach(presente =>{
    lista.innerHTML += `
    
     <div class="card">

        <img src="${presente.imagem}" alt="${presente.nome}" class="img-presente">

        <h3>${presente.nome}</h3>

        <a href="${presente.link}" target="_blank">
        
            <button class="btn-presente">

                Ver produto
            </button>
        </a>
    </div>
    `;

});

const botaoPix = document.getElementById("copiarPix");

botaoPix.addEventListener("click", () => {

    navigator.clipboard.writeText(convite.pix.chave);

    alert("✅ Chave PIX copiada!");

});

const dataEvento = new Date("August 8, 2026 19:30:00").getTime();

setInterval(() => {

    const agora = new Date().getTime();

    const distancia = dataEvento - agora;

    const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));

    const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));

    const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

    document.getElementById("dias").textContent = dias;
    document.getElementById("horas").textContent = horas;
    document.getElementById("minutos").textContent = minutos;
    document.getElementById("segundos").textContent = segundos;

},1000);

const botaoWhatsapp = document.getElementById("confirmarWhatsapp");

console.log(botaoWhatsapp);

botaoWhatsapp.addEventListener("click", () => {

    const mensagem =
`Olá! Confirmo minha presença no aniversário da ${convite.nome} no dia ${convite.data}. 🎉`;

    const url =
`https://wa.me/${convite.whatsapp.numero}?text=${encodeURIComponent(mensagem)}`;

    window.open(url, "_blank");

});

document.getElementById("mapaLocal").src = convite.mapa.iframe;

const abrirMapa = document.getElementById("abrirMapa");

abrirMapa.addEventListener("click", () => {

    window.open(convite.mapa.link,"_blank");

});

const secoes = document.querySelectorAll(".revelar");

function revelarElementos() {

    const alturaTela = window.innerHeight;

    secoes.forEach(secao => {

        const topo = secao.getBoundingClientRect().top;

        if (topo < alturaTela - 100) {
            secao.classList.add("ativo");
        }

    });

}

window.addEventListener("scroll", revelarElementos);

revelarElementos();

const voltar = document.getElementById("voltarTopo");

window.addEventListener("scroll", () =>{

    if(window.scrollY > 400){

        voltar.style.display = "block";

    }else{

        voltar.style.display = "none";

    }

});

voltar.addEventListener("click", ()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});