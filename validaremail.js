document.querySelector("form").addEventListener("submit", function(event){
const email= document.getElementById("email").value; const regex = /^[^\s@]+@[^\s@]+$/;
if(!regex.test(email)){
    alert("Por Favor Digite um Email válido.");
    Event.preventDefault();
}
});

/*quando clica em enviar ele confere se o email é valido, verifica se ha espaco antes e depois do caractere arroba(@) e caso possua ele amanda uma alert com o conteudo da linha 4*/