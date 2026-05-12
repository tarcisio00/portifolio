```javascript
/* =========================
ARQUIVO: script.js
========================= */

const form = document.getElementById("formulario");

form.addEventListener("submit", function(e){
e.preventDefault();

let nome = document.getElementById("nome").value.trim();
let email = document.getElementById("email").value.trim();
let mensagem = document.getElementById("mensagem").value.trim();

if(nome === "" || email === "" || mensagem === ""){
alert("Preencha todos os campos!");
return;
}

if(!email.includes("@") || !email.includes(".")){
alert("Digite um e-mail válido!");
return;
}

alert("Mensagem enviada com sucesso!");

document.getElementById("nome").value = "";
document.getElementById("email").value = "";
document.getElementById("mensagem").value = "";
});

/* Tema escuro */

const btnTema = document.getElementById("temaBtn");

btnTema.addEventListener("click", function(){
document.body.classList.toggle("dark");

if(document.body.classList.contains("dark")){
btnTema.innerHTML = "☀️";
}else{
btnTema.innerHTML = "🌙";
}
});
```
