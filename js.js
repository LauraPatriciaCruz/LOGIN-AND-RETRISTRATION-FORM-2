// ---------------LLAMADO A FUNCIONES----------------
document.getElementById("in").addEventListener("click", ingresar);
document.getElementById("re").addEventListener("click", registrar);
document.getElementById("cualOjo").addEventListener("click", myLogPassword );
document.getElementById("queOjo").addEventListener("click", myRegPassword);

// ------------CAJA INGRESO Y REGISTRO---------------
let cajaIngreso = document.getElementById('ingreso');
let cajaRegistro = document.getElementById('registro');
let boton = document.getElementById('btn');

function ingresar(){
    cajaIngreso.style.left = "27px";
    cajaRegistro.style.right = "-350px";
    boton.style.left = "0px";
}

function registrar(){
    cajaIngreso.style.left = "-350px";
    cajaRegistro.style.right = "25px";
    boton.style.left = "150px";
}

// -----------------VISTA DE CONTRASEÑA-----------------

function myLogPassword(){

    let passwordIn = document.getElementById('contrasenaIngreso');
    let ojoCompleto = document.getElementById('ver');
    let ojoTachado = document.getElementById('ver-slash');

    if(passwordIn.type === "password"){
        passwordIn.type = "text"
        ojoCompleto.style.opacity = "0";
        ojoTachado.style.opacity = "1";
    }else{    
        passwordIn.type = "password"
        ojoCompleto.style.opacity = "1";
        ojoTachado.style.opacity = "0";
    }
}

function myRegPassword(){

    let passwordReg = document.getElementById('contrasenaRegistro');
    let ojo = document.getElementById("ver-2");
    let tachado = document.getElementById("ver-slash-2");

    if(passwordReg.type === "password"){
        passwordReg.type = "text"
        ojo.style.opacity = "0"; 
        tachado.style.opacity = "1"; 
    }else{    
        passwordReg.type = "password" 
        ojo.style.opacity = "1"; 
        tachado.style.opacity = "0"; 
    }
}    


// ========================================
const logEmail = document.getElementById('logEmail');
const contraseñaIngreso = document.getElementById('contrasenaIngreso');

const regUser = document.getElementById('regUser');
const regEmail = document.getElementById('regEmail');
const contrasenaRegistro = document.getElementById('contrasenaRegistro');
const form = document.getElementById('form');

form.addEventListener('submit', e=>{
    e.preventDefault();
    let warning ='';
    if (contrasenaIngreso.value.length <8) {    
        warning += 'La contraseña debe contener mas de 8 caracteres <br>'

    }
})
