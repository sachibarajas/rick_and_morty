export default function validation(inputs){
    const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    const regexPassword = /^(?=\w*\d)/;
    const regexNumber = /^(?=.*\d)\S{6,10}$/
    const errors = {};

    if(!regexEmail.test(inputs.username)){
        errors.username = 'El usuario debe ser un E-mail';
    }

    if(!inputs.username){
        errors.username = 'Ingrese un usuario';
    }

    if(inputs.username.length > 35){
        errors.username = 'Debe tener menos de 35 caracteres';
    }

    if(!regexNumber.test(inputs.password)){
        errors.password = 'La contraseña debe tener de 6 a 10 caracteres';
    }

    if(!regexPassword.test(inputs.password)){
        errors.password = 'Debe contener al menos un numero';
    }

    return errors;
}