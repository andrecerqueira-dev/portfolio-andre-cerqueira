const elementos = document.querySelectorAll(".hero, .card");

const observador = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
            entrada.target.classList.add("visivel");
        }
    });
});

elementos.forEach((elemento) => {
    elemento.classList.add("revelar");
    observador.observe(elemento);
});


const botaoTopo = document.createElement("button");

botaoTopo.innerHTML = "↑";
botaoTopo.className = "btn-topo";
botaoTopo.setAttribute("aria-label", "Voltar ao topo");

document.body.appendChild(botaoTopo);


window.addEventListener("scroll", () => {
    botaoTopo.classList.toggle("mostrar", window.scrollY > 350);
});


botaoTopo.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});
