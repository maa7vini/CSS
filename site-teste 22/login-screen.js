function logar(){
    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;

    if (login == 'maa7vini' && senha == 'ma102030'){
        alert('Sucesso');
        location.href = 'home.html';
        
    }else{
        alert('Usuario ou Senha Inválidos');
    }
}