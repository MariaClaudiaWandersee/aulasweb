//Pega o elemento Dom com o ID APP
const app = document.getElementById("app");
//Cria um novo elemento
const h1 = document.createElement('h1')

h1.innerHTML = "Hello from javascript"

app.appendChild(h1)