import { usuarios } from "./database.js"
console.log(usuarios);

let campoEmail = document.querySelector("#campoEmail");
let campoSenha = document.querySelector("#campoSenha");
let btnLog = document.querySelector("#acessar");

console.log(campoEmail)
console.log(campoSenha)
console.log(btnLog)

function logar() {
    try{
    let valorEmail = campoEmail.value;
    let valorSenha = campoSenha.value;

    if (valorEmail.length == 0 || valorSenha.length == 0) {
        throw new Error(`Campos vazios, preencha-los corretamente!`)
    }

    let usuarioEncontrado = false

    for (let i = 0; i < usuarios.length; i++) {
        if ((usuarios[i].email === valorEmail) && (usuarios[i].senha === valorSenha)) {
            usuarioEncontrado = true;
            break;

        }
    }

    if (usuarioEncontrado) {
        alert("Logado com sucesso!");
        window.location.href = `../pages/profile.html`
    } else{
        throw new Error(`Conta não encontrada ou senha incorreta`)
    }}
    catch(error){
        console.error("Falha ao realizar login:" + error.message)
        alert(error.message)
    }


}


btnLog.addEventListener('click', logar)

export {logar};

//Sempre essa ordem numa verificação de login:
//1 - Ver se campos estão vazios ou preenchidos
//2 - Verificar credenciais corretas com uma flag
//3 - Verificar estado da flag para permissão