function validarFormulario() {
    var validacion = document.forms["form"]["galki1"].checked
    var cookies = document.forms["form"]["galki2"].checked
    if (validacion == false ){ 
    alert ("Tienes que aceptar los términos y condiciones");
    return false; 
    }
    if (cookies == false){
        alert ("Tienes que aceptar las cookies");
        return false;
    }
    if (cookies == false && validacion == false){
        alert ("Tienes que aceptar los términos y condiciones y las cookies");
    }
    
}
function a_detras() {
    var a = window.location.href = "../index.html";
    return a;
}
function izquierda() {
    const izq = document.querySelector(".event1");
    izq.scrollBy(-400, 0);
}
function derecha() {
    const izq = document.querySelector(".event1");
    izq.scrollBy(400, 0);
}
function Izquierda() {
    const izq = document.querySelector(".img");
    izq.scrollBy(-150, 0);
}
function Derecha() {
    const der = document.querySelector(".img");
    der.scrollBy(150, 0);
}
function BBDD(){
    var conexionbd = SQL.connect({
    Driver: "MySQL", Host :"localhost",
    Port: 3306,
    Database: "event.aku",
    UserName: "root",
    Password: ""
    });
    var querya = "select * from jueces where id = 1;"
    var result = dbConnection.query(querya);
    
    if (!result.isValid) {
        alert("Entry not found.");
    } else {
        test.compare(result.value("id"), context.userData.formValues[0]);
        test.compare(result.value("nombre"), context.userData.formValues[1]);
    }
    dbConnection.close();
}

function elegirEvento(){
    var elegir = document.getElementById("custom-select").value;
    alert(elegir)
    alert("aa")
}
function hola(){
    setTimeout(function(){ 
    var hola = location.href = "elegirEvento.php";
    return hola; }, 2000);
    
}