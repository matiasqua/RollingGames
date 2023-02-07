//--------------------GLOBALES
const TabldeUsuarios = document.getElementById('TabldeUsuarios');





const users = [
    {   
        aprobar :'',
        name : 'Matias',
        surname : 'Quagliotti',
        years: 28,
        password: 'contraTest',
        correo :"quagliottimatias@gmail.com",
        id : 111,
    },
    {
        aprobar :'',
        name : 'Pablo',
        surname : 'Romero',
        years: 20,
        password: 'contraTest',
        correo :"pabloromero@gmail.com",
        id : 222,



    },
    {   
        aprobar :'',

        name : 'Christian',
        surname : 'Juares',
        years: 20,
        password: 'contraTest',
        correo :"christian@gmail.com",
        id : 333,

    
        }
];

//--------------------------------COLOCO LOS USERS EN LOCALSTORAGE------
localStorage.setItem("users", JSON.stringify(users));
// console.log(users)


//---------------------------------GENERADOR DE ID---------
const generadorDeID = function () {
    return '_' + Math.random().toString(36).substr(2, 9);
}
// console.log(generadorDeID());



// TRAER LOS DATOS DE LOCALSTORAGE
const usersInLocalStorage = JSON.parse(localStorage.getItem('users'));
// console.log(usersInLocalStorage);


const mostrarUsuarios = (usuarios) => {

    let acumulador = '';
    for (let usuario of usuarios) {
        // console.log('usuario.aprobar', usuario.aprobar);
        acumulador += `
            <tr>
                
                <td>${usuario.name}</td>
                <td>${usuario.correo}</td>
                

                
                <td>
                    <button
                        class="btn"
                        onclick="aceptarUsuario('${usuario.id}')";
                    >   
                    
                    <i class="fa-regular fa-circle${usuario.aprobar} fa-xl"></i>
                   
                
                    
                    </button> 
                </td>
                
                

            </tr>
        `;
    }
    TabldeUsuarios.innerHTML = acumulador;


};


let usuarios = JSON.parse(localStorage.getItem('users')) || [];
mostrarUsuarios(usuarios);

let aceptarUsuario = (id) => {
    let usuarios = JSON.parse(localStorage.getItem('users'));
    // console.log(usuarios)
    let usuario = usuarios.find((usuario) => usuario.id == id);
    
    if (usuario.aprobar === "-check"){
        usuario.aprobar = ""
        // console.log(usuario)
    } else {  usuario.aprobar ="-check"
    // console.log(usuario)
    };

    // usuarios.push(usuario);
    localStorage.setItem('users', JSON.stringify(usuarios));
    mostrarUsuarios(usuarios);
}




// const suspenderusuario = (id) => {
//     const usuarios = JSON.parse(localStorage.getItem('users'));
//     const usuario = usuarios.find((usuario) => usuario.id == id);
//     if (usuario.aprobar === "-check"){
//         usuario.suspender= ""
//     } else usuario.suspender = "-check"

//     localStorage.setItem('users', JSON.stringify(usuarios));
//     mostrarUsuarios(users)

// };




// const open = document.getElementById('open');
// const modal_container = document.getElementById('modal_container');
// const close = document.getElementById('close');

// open.addEventListener('click', () => {
//     modal_container.classList.add('show');
//     // console.log("Hola")
// });

// close.addEventListener('click', () => {
//     modal_container.classList.remove('show');
// });