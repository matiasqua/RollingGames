$(document).ready(function(){
    $('#box-form').submit(function(){

    var txt_user = $('#txt_user').val();
    var txt_password = $('#txt_password').val();

    // almaceno los valores en localstorage
    localStorage.setItem('usuario', txt_user);
    localStorage.setItem('password', txt_password);
    // console.log(localStorage)

    });
    
    // var txt_user = localStorage.getItem('usuario');
    // var txt_password = localStorage.getItem('password');

    // if(txt_user != null && txt_user != 'undefined'){
    //     //llamada al documento index.html
    //     window.location = 'sesion.html';
    // }
});


