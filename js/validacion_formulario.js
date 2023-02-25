
function validarDatos(){
    nombre = document.getElementById("nombre").value;
    apellido = document.getElementById("apellido").value;
    email = document.getElementById("email").value;
    consulta = document.getElementById("consulta").value;

    if (nombre === "")  {
        document.getElementById("error_nombre").innerHTML = "Por favor, complete su nombre"
    }

    if (apellido === "")  {
        document.getElementById("error_apellido").innerHTML = "Por favor, complete su apellido"
    }

    if (email === "")  {
        document.getElementById("error_email").innerHTML = "Por favor, complete su email"
    }

    if (consulta === "")  {
        document.getElementById("error_consulta").innerHTML = "Por favor, escriba su consulta"
    }

    }

document.getElementById("boton_enviar").onclick = validarDatos; 