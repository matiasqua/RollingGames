const nombre = document.getElementById("name");
const email = document.getElementById("email");
const pass = document.getElementById("password");
const pass2 = document.getElementById("password2");
const form = document.getElementById("form");
const parrafo = document.getElementById("warnings");


form.addEventListener("submit", e=>{
    e.preventDefault();
    let warnings = "";
    let entrar = false;
    parrafo.innerHTML = "";
    // ---------------------validacion del nombre--------------
    if(nombre.value.length < 6){
        warnings += `El nombre no es valido <br>`;
        entrar = true;
    }

    // ----------validacion del email sacada de https://w3resource.com/javascript/form/email-validation.php----
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if(!regexEmail.test(email.value)){
        warnings += `El email no es valido <br>`
        entrar = true;

    }
    // -------------validacion de la contraseña---------------
    if(pass.value.length < 5){
        warnings += `La contraseña no es valido <br>`
        entrar = true;
    }
    if(pass2.value.length < 5){
        warnings += `La contraseña no coincide <br>`
        entrar = true;
    }

    if(entrar){
        parrafo.innerHTML = warnings;

    }else{
        parrafo.innerHTML ="Enviado";
    }
    
});