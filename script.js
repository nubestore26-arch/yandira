/* =========================
   ELEMENTOS
========================= */

const inicio = document.getElementById("inicio");
const contenido = document.getElementById("contenido");
const yesBtn = document.getElementById("yesBtn");
const finalScreen = document.getElementById("final");
const heartsContainer = document.getElementById("hearts");


/* =========================
   ABRIR MENSAJE
========================= */

document
    .getElementById("startBtn")
    .addEventListener("click", function () {

        document.getElementById("contenido")
            .scrollIntoView({
                behavior: "smooth"
            });

        createHearts(10);
    });


/* =========================
   BOTÓN SÍ
========================= */

yesBtn.addEventListener("click", function () {

    /*
     * ELIMINAMOS COMPLETAMENTE
     * LA PÁGINA ANTERIOR.
     */

    inicio.remove();

    contenido.remove();


    /*
     * MOSTRAMOS LA PANTALLA FINAL.
     */

    finalScreen.classList.add("active");


    /*
     * CORAZONES DE CELEBRACIÓN.
     */

    createHearts(80);

});


/* =========================
   CORAZONES
========================= */

function createHearts(amount) {

    for (let i = 0; i < amount; i++) {

        const heart =
            document.createElement("div");

        heart.className = "heart";

        heart.textContent =
            Math.random() > 0.5
                ? "❤️"
                : "💕";

        heart.style.left =
            Math.random() * 100 + "%";

        heart.style.fontSize =
            (12 + Math.random() * 25) + "px";

        heart.style.animationDuration =
            (3 + Math.random() * 5) + "s";

        heart.style.animationDelay =
            Math.random() * 1.5 + "s";

        heartsContainer.appendChild(heart);


        setTimeout(function () {

            heart.remove();

        }, 9000);
    }
}