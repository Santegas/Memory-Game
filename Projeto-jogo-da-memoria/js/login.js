const input = document.querySelector('.login_input');
const button = document.querySelector('.login_button');
const form = document.querySelector('.login-form');

const validateInput = ({target}) => {  //nesta arrow function fiz uma destruturacao de objeto, pegando o target do nosso evento q seria nosso input e selecionarei o value dele
    if(target.value.length > 3){
        button.removeAttribute('disabled');
        return;
    } 
        button.setAttribute('disabled', '');
}

const handleSubmit = (event) => {
    event.preventDefault();  //impedir da página recarregar quando formulário for enviado
    
    localStorage.setItem('player', input.value);
    window.location = 'pages/game.html';

}

input.addEventListener('input', validateInput);
form.addEventListener('submit', handleSubmit);
