const $ = (id) => document.getElementById(id);

let regExEmail = /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]:+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/;
let regExPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,12}$/;


let checkError = false;

const msgError = (id, messaje) => {
  $(id).innerHTML = messaje;
};
const cleanError = (id) => {
  $(id).innerHTML = null;
};

/* NOMBRE */
$("nameRegister").addEventListener("blur", function (event) {
  if (!this.value.trim()) {
    msgError("errorName", "El nombre es obligatorio");
    checkError = true;
  }
});
$("nameRegister").addEventListener("focus", function (event) {
  cleanError("errorName");
  checkError = false;
});

/* APELLIDO */
$("surnameRegister").addEventListener("blur", function (event) {
  if (!this.value.trim()) {
    msgError("errorSurname", "El apellido es obligatorio");
    checkError = true;
  }
});
$("surnameRegister").addEventListener("focus", function (event) {
  cleanError("errorSurname");
  checkError = false;
});

/* TELEFONO */
$("phoneRegister").addEventListener("blur", function (event) {
  if (!this.value.trim()) {
    msgError("errorPhone", "El teléfono es obligatorio");
    checkError = true;
  }
});
$("phoneRegister").addEventListener("focus", function (event) {
  cleanError("errorPhone");
  checkError = false;
});

/* CORREO */
$("emailRegister").addEventListener("blur", function (event) {
  switch (true) {
    case !this.value.trim():
      msgError("errorEmail", "El correo es obligatorio");
      checkError = true;
      break;
    case !regExEmail.test(this.value.trim()):
      msgError("errorEmail", "El correo no es valido");
      checkError = true;

    default:
      break;
  }
});
$("emailRegister").addEventListener("focus", function (event) {
  cleanError("errorEmail");
  checkError = false;
});

/* PASSWORD */
$("passwordRegister").addEventListener("blur", function (event) {
    switch (true) {
        case !this.value.trim():
            msgError("errorPassword", "La contraseña es obligatoria");
            checkError = true;
         break;
        case !regExPass.test(this.value.trim()):  msgError("errorPassword", "Debe tener al menos una minuscula, una mayuscula y un numero y entre 6 y 12 caracteres");
    checkError = true;
         break;
        default:
            break;
    }

});
$("passwordRegister").addEventListener("focus", function (event) {
  cleanError("errorPassword");
  checkError = false;
});

/* PASSWORD */
$("password2Register").addEventListener("blur", function (event) {
    switch (true) {
        case !this.value.trim():
            msgError("errorPassword2", "Debes confirmar la contraseña");
            checkError = true;
         break;
        case this.value.trim() !== $("passwordRegister").value.trim():  msgError("errorPassword2", "Las contraseñas no coinciden");
    checkError = true;
         break;
        default:
            break;
    }

});
$("password2Register").addEventListener("focus", function (event) {
  cleanError("errorPassword2");
  checkError = false;
});


$("formRegister").addEventListener("submit", function(event){
  if (checkError) {
      event.preventDefault();
  }
event.submit()
})