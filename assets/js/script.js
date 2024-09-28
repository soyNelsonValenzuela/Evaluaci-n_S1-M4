const miButton = document.getElementById('form-button')
const motivos = {
    1: 'Problemas con la cuenta Online',
    2: 'Reestablecer contraseña',
    3: 'Solicitud de atencion al cliente',
    4: 'Otro'
}
function validation(){
    let datosValidados = false;
    let name = document.getElementById('name').value;
    let lastName = document.getElementById('last-name').value;
    let email = document.getElementById('email').value;
    let reason = Number(document.getElementById('reason').value);
    let message = document.getElementById('message').value;
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (name.length >= 3) {
        if (lastName.length >= 3) {
            if (regexEmail.test(email)) {
                if (reason !== 0) {
                   let subject = motivos[reason];
                    if(message.length > 20){
                        datosValidados = true;
                        let datos = {
                            datosValidados: datosValidados,
                            name: name,
                            lastName: lastName,
                            email: email,
                            subject: subject,
                            message: message
                        }
                        return datos;
                    }else{
                        alert('El mensaje debe tener al menos 20 caracteres');
                    }
                }else{
                    alert('Por el amor de Dios selecciona un motivo')
                }
            } else if (email.length === 0) {
                alert('El campo email no puede estar vacio')
            } else {
                alert("El correo no es válido.");
            }
        } else {
            alert('El campo apellido debe tener al menos 3 caracteres')
        }
    } else {
        alert('El campo nombre debe tener al menos 3 caracteres');
    };
}
miButton.addEventListener('click', (e) => {
    e.preventDefault();
    let datos = validation();
    if (datos.datosValidados === true){
        console.log(datos);
        alert (`DE:${datos.name} ${datos.lastName} (${datos.email})\n- ASUNTO: ${datos.subject}\n- MENSAJE:\n- ${datos.message}`)
    }
});