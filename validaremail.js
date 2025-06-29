document.querySelector("form").addEventListener("submit", function(event){
const email= document.getElementById("email").value; const regex = /^[^\s@]+@[^\s@]+$/;
if(!regex.test(email)){
    alert("Por Favor Digite um Email válido.");
    Event.preventDefault();
}
});