//import {cadastrar} from "./cadastro.js";
let nomePerfil = document.querySelector("#nomePerfil");
let imagemPerfil = document.querySelector("#fotoPerfil");
let dados = localStorage.getItem("usuarios_logado");

if(dados){
    let usuariosAtivo = JSON.parse(dados);
    nomePerfil.innerHTML = usuariosAtivo.nome;
}

let campoArquivo = document.querySelector("#arquivo");

//Por que "target" e por que acesso ao índice 0 do files?
function escolherFoto(e){
    const arquivo = e.target.files[0] //Representa o arquivo selecionado

    if(arquivo){
        if(arquivo.type.startsWith("image/")){
            console.log(`O arquivo é uma imagem válida`);
            //Lógica de troca de foto -> Precisa construir a URL da imagem
            const urlImg = URL.createObjectURL(arquivo)
            imagemPerfil.src = urlImg;
        } else{
            alert(`Selecione uma imagem válida: JPG, JPEG, PNG`)
            e.target.value = ``
        }
    }
}

campoArquivo.addEventListener('change', escolherFoto)
