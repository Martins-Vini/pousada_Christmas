import { usuarios } from "./database.js"
console.log(usuarios);

let campoNome = document.querySelector("#campoNome")
let campoEmail = document.querySelector("#campoEmail");
let campoSenha = document.querySelector("#campoSenha");
let campoConfirmarSenha = document.querySelector("#campoConfSenha");
let btnCad = document.querySelector("button#cadastrar");


console.log(campoNome)
console.log(campoEmail)
console.log(campoSenha)
console.log(campoConfirmarSenha)
console.log(btnCad)


function cadastrar() {
    try {
        let nome = campoNome.value;
        let email = campoEmail.value;
        let senha = campoSenha.value;
        let senhaConf = campoConfirmarSenha.value;

        if (!nome || !email || !senha || !senhaConf) {
            throw new Error(`Campos vazios, preencha-los corretamente!`)
        }

        if (senha !== senhaConf) {
            throw new Error(`As senhas não coincidem`)
        }

         //Um for simples não pode ser usado pois apesar da validação de cada interação, no primeiro email diferente, o erro já é acionado -> Método find() resolve isso

         let usuarioExiste = usuarios.find(usuario => {
            email === usuario.email
         })

         if(usuarioExiste){
             throw new Error(`Email já cadastrado`)
         }

        //Lógica para credenciais irem ao banco de dados

         const novoUsuario = {
            nome: nome,
            email: email,
            senha: senha,
            foto: "../images/icons/fotoPerfil.webp"
        };

        usuarios.push(novoUsuario);

        //Forma de guardar variáveis em memória mais persistente, com setItem no localStorage
        //Os dois parâmetros são: chave de acesso e valor JSON passado convertido em JSON
        localStorage.setItem("usuarios_db", JSON.stringify(usuarios))
        localStorage.setItem("usuarios_logado", JSON.stringify(novoUsuario))

        alert("Cadastro realizado com sucesso.")
        window.location.href = `../pages/profile.html`;

    }
    catch (error) {
        console.error("Falha ao realizar cadastro:" + error.message)
        alert(error.message)
    }


}

//localStorage -> Funciona como um banco de dados em menor escala, que guarda os dados até o site se fechar, sobrevivendo à mudanças de página e refresh


btnCad.addEventListener('click', cadastrar)

export { cadastrar };