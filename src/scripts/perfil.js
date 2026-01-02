//import {cadastrar} from "./cadastro.js";
let nomePerfil = document.querySelector("#nomePerfil");
let imagemPerfil = document.querySelector("#fotoPerfil");
let dados = localStorage.getItem("usuarios_logado");

if(dados){
    let usuariosAtivo = JSON.parse(dados);
    nomePerfil.innerHTML = usuariosAtivo.nome;
}


