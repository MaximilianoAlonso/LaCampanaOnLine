const $ = (id) => document.querySelector(id);

let checkError = false;

const msgError = (id, messaje) => {
  $(id).innerHTML = messaje;
};
const cleanError = (id) => {
  $(id).innerHTML = null;
};


/* TITULO */
$(".titleProduct").addEventListener("blur", function (event) {
    if (!this.value.trim()) {
      msgError("#errorTitle", "Debes ingresar un titulo");
      checkError = true;
    }
  });
  $(".titleProduct").addEventListener("focus", function (event) {
    cleanError("#errorTitle");
    checkError = false;
  });
  
  /* PRECIO */
$(".priceProduct").addEventListener("blur", function (event) {
    if (!this.value.trim()) {
      msgError("#errorPrice", "Debes ingresar un precio");
      checkError = true;
    }
  });
  $(".priceProduct").addEventListener("focus", function (event) {
    cleanError("#errorPrice");
    checkError = false;
  });
  
    /* DESCRIPTION */
$(".descriptionProduct").addEventListener("blur", function (event) {
    if (!this.value.trim()) {
      msgError("#errorContent", "Debes ingresar una descripcion");
      checkError = true;
    }
  });
  $(".descriptionProduct").addEventListener("focus", function (event) {
    cleanError("#errorContent");
    checkError = false;
  });
  


  /* PREVIENE EN ENVIO SI HAY CAMPOS CON ERRORES */
  
  $("#butttonSubmit").addEventListener("click",function(event) {
    /* titulo */
  if ($(".titleProduct").value.trim() === "") {
    msgError("#errorTitle", "Debes ingresar un titulo");
  } else {
    cleanError("#errorTitle");
  }
/* precio */
  if ($(".priceProduct").value.trim() === "") {
    msgError("#errorPrice", "Debes ingresar un precio");
  } else {
    cleanError("#errorTerrorPriceitle");
  }
  /* descripcion */
  if ($(".descriptionProduct").value.trim() === "") {
    msgError("#errorContent", "Debes ingresar una descripcion");
  } else {
    cleanError("#errorContent");
  }

/* foto */
    if ( $(".imageOneProduct").files.length === 0) {
    msgError("#errorImages", "Debes subir al menos una foto");
   event.preventDefault();
  }else{
  cleanError("#errorImages");
  }
/* categoria */
  if ($(".categoryProduct").value == "") {
  msgError("#errorCategory", "Debes elegir una categoria");
  event.preventDefault();
  }else{
  cleanError("#errorCategory");
}
  });

/* SUBMIT */
  $("#formProduct").addEventListener("submit", function(event){
    if (checkError) {
        $("#formProduct").preventDefault();
    }
    $("#formProduct").submit()
  })