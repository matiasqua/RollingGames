$(document).ready(function(){
    $('#box-form').submit(function(){

    var txt_user = $('#txt_user').val();
    var txt_password = $('#txt_password').val();

    // almaceno los valores en localstorage
    localStorage.setItem('usuario', txt_user);
    localStorage.setItem('contraseña', txt_password);
    console.log(localStorage)

    });

});

