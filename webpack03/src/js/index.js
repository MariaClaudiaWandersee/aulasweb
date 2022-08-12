import "../scss/style.scss"
console.log("Hello Maria")

//variavel recebe o nosso aplicativo
const app = document.getElementById("app");

//variavel recebe a criação de um elemento virtual chamado h1
const hello = document.createElement('h1');

//inseríamos dentro deste elemento virtual um HML usando innerHTML
hello.innerHTML = "Hi bem vindo!"

//acrescentamos ao elemento 'app o element 'hello'
app.append(hello)