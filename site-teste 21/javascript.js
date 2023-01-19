function logar(){
    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;

    if(login == "admin" && senha == "ma102030"){
        alert('Sucesso');
        location.href = "home.html";
    }else{
        alert('Login ou Senha inválidos');
    }
}