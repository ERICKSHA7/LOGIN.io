const form = document.getElementById('login-form');
const UsernameInput = document.getElementById('Username');
const passwordInput = document.getElementById('Password');
const errorMessage = document.getElementById('error-message');

//simulacion de credenciales de acceso
const validUsername = 'Erick';
const validPassword = '12345';

form.addEventListener('submit', function(e){
    e.preventDefault();

    const enterdUsername = UsernameInput.value.trim();
    const enterPassword = passwordInput.value;
 
    if (enterdUsername === validUsername && enterPassword === validPassword) {
        alert('Inicio de secion exitoso!')
       //redirige a la pagina//
        window.location.href = '/CRUD/index.html';
    } else {
        alert('Falla de inicio de secion')
    }

})
