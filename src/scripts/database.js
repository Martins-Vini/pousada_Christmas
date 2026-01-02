export let usuarios = [
    {
        "foto": "https://randomuser.me/api/portraits/men/1.jpg",
        "nome": "Ricardo Silva de Aragão",
        "email": "senhorRiri1980@gmail.com",
        "senha": "1234SLKmeuMan*",
        "cpf": "11111111-11"
    },
    {
        "foto": "https://randomuser.me/api/portraits/women/2.jpg",
        "nome": "Ana Beatriz Souza",
        "email": "ana.souza92@outlook.com",
        "senha": "Ana#2024!Security",
        "cpf": "22222222-22"
    },
    {
        "foto": "https://randomuser.me/api/portraits/men/3.jpg",
        "nome": "Marcos Oliveira Santos",
        "email": "marcos.santos_dev@yahoo.com.br",
        "senha": "Marquito@99_88",
        "cpf": "33333333-33"
    },
    {
        "foto": "https://randomuser.me/api/portraits/women/4.jpg",
        "nome": "Juliana Pereira Lima",
        "email": "juliana.lima.pro@gmail.com",
        "senha": "Ju_Pass*789#",
        "cpf": "44444444-44"
    },
    {
        "foto": "https://randomuser.me/api/portraits/men/5.jpg",
        "nome": "Felipe Almeida Costa",
        "email": "felipe.costa.vendas@hotmail.com",
        "senha": "FeliPe!#2025",
        "cpf": "55555555-55"
    }
];

//Duas formas de exportação, se for uma exportação com export em várias funções, é bom usar um único export + função e importar com chaves no main.js
//Se for uma exportação com export default, que só exporta a função principal do arquivo, a importação não leva chaves