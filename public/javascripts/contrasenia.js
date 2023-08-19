/* contraseña register */
const passwordInput = document.querySelector("#passwordRegister")
const ocultar = document.querySelector(".cerrado")
const mostrar = document.querySelector(".abierto")

mostrar.addEventListener("click", () => {
    passwordInput.type = "text"
    mostrar.classList.toggle("noVer")
})

ocultar.addEventListener("click", () => {

    passwordInput.type = "password"
    mostrar.classList.toggle("noVer")
})
/* contraseña2 register*/
const passwordInput2 = document.querySelector("#password2Register")
const ocultar2 = document.querySelector(".cerrado2")
const mostrar2 = document.querySelector(".abierto2")

mostrar2.addEventListener("click", () => {
    passwordInput2.type = "text"
    mostrar2.classList.toggle("noVer2")
})

ocultar2.addEventListener("click", () => {

    passwordInput2.type = "password"
    mostrar2.classList.toggle("noVer2")
})
/* contraseña3 login*/
const passwordInput3 = document.querySelector("#password3Login")
const ocultar3 = document.querySelector(".cerrado3")
const mostrar3 = document.querySelector(".abierto3")

mostrar3.addEventListener("click", () => {
    passwordInput3.type = "text"
    mostrar3.classList.toggle("noVer3")
})

ocultar3.addEventListener("click", () => {

    passwordInput3.type = "password"
    mostrar3.classList.toggle("noVer3")
})