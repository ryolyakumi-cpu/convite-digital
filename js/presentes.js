const lista = document.getElementById("ListadePresentes");
let presenteSelecionado = "";

function mostrarMensagem(texto){

    const mensagem = document.getElementById("mensagemReserva");

    mensagem.textContent = texto;

    mensagem.classList.add("mostrar");

    setTimeout(() => {

        mensagem.classList.remove("mostrar");

    },2500);

}

function criarCard(id,presente){




    let botaoReserva = "";

     if (presente.reservado) {

    botaoReserva = `
        <button class="btn-reservado" disabled>
             Reservado
        </button>
    `;

} else {

    botaoReserva = `
        <button
            class="btn-reservar"
            data-id="${id}"
            onclick="abrirModal('${id}')">

            Reservar Presente

        </button>
    `;

}

   lista.innerHTML += `
<div class="card">


    <img src="${presente.imagem}" alt="${presente.nome}" class="img-presente">

    <h3>${presente.nome}</h3>

    <a href="${presente.link}" target="_blank">

        <button class="btn-presente">
            Ver Produto
        </button>

    </a>

    ${botaoReserva}

</div>
`;
}
db.collection("presentes")
.onSnapshot((snapshot) => {


    lista.innerHTML = "";

    snapshot.forEach((doc) => {

        criarCard(doc.id, doc.data());

    });

});
function abrirModal(id){

    presenteSelecionado = id;

    const modal = document.getElementById("modalReserva");

    modal.style.display = "flex";

}
const botaoCancelar = document.getElementById("cancelarReserva");

botaoCancelar.addEventListener("click", () => {

    const modal = document.getElementById("modalReserva");

    modal.style.display = "none";

});

const botaoConfirmar = document.getElementById("confirmarReserva");

botaoConfirmar.addEventListener("click", () => {

    const input = document.getElementById("nomeConvidado");

    if (input.value.trim() === "") {

        mostrarMensagem("Digite seu nome para reservar o presente.");

        return;

    }

  db.collection("presentes")
.doc(presenteSelecionado)
.get()
.then((doc) => {

    const presente = doc.data();

    if (presente.reservado) {

       mostrarMensagem("❌ Este presente já foi reservado.");

        document.getElementById("modalReserva").style.display = "none";

        return;

    }

    db.collection("presentes")
    .doc(presenteSelecionado)
    .update({

        reservado: true,

        reservadoPor: input.value

    })
    .then(() => {

        document.getElementById("modalReserva").style.display = "none";

        input.value = "";

         mostrarMensagem(" Presente reservado com sucesso!");


    });

}); // fecha o .then do get()

});
