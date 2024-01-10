const pantalla = document.querySelector("#show");
const input = document.querySelectorAll(".escuchar");
const inputOperation = document.querySelectorAll("")

input.forEach(elm => {
    elm.addEventListener("click", () => 
        reciveInput(elm) 
    )
});

function reciveInput(text) {
    pantalla.textContent += Number(text.textContent)
}
git config --global user.email "you@example.com"
git config --global user.name "Tu Nombre"

