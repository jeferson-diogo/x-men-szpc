//OBJETIVO 1 - Quando passar o mouse por cima do personagem, selecioná-lo
//Passo 1 - pegar ow personagens no JS pra poder verificar quando o usuário passar o mouse por cima de um deles

const personagens = document.querySelectorAll('.personagem');

//Passo 2 - adicionar a classe "selecionado" no personagem em que o usuário passar o cursor do mouse 

personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {
    
        if(window.innerWidth < 450) {
            window.scrollTo({top: 0, behavior: 'smooth'});
        }
        
        //Passo 3 - verificar de já existe um personagem selecionado, se sim, devemos remover a seleção dele
        removerSelecaoDoPersonagem();
        
        personagem.classList.add('selecionado');
        
        //OBJETIVO 2 - quando passar o mouse em cima do personagem da listagem, mudar a imagem, nome e descrição do personagem grande
        //passo 1 - pergar o elemento do personagem grande para adicionar informações nele
        alterarImagemPersonagemSelecionado(personagem);
        
        //passo 3 - alterar o nome do personagem grande
        alterarNomePersonagemSelecionado(personagem);      
        
        //passo 4 - alterar a descrição do personagem grande
        alterarDescricaoPersonagemSelecionado(personagem);
    })
})

function alterarDescricaoPersonagemSelecionado(personagem) {
    const descricaoPersonagem = document.getElementById('descricao-personagem');
        
    descricaoPersonagem.innerText = personagem. getAttribute('data-description');
}

function alterarNomePersonagemSelecionado(personagem){
    const nomePersonagem = document.getElementById('nome-personagem');
        
    nomePersonagem.innerText = personagem.getAttribute('data-name');
}

function alterarImagemPersonagemSelecionado(personagem) {
    const imagemPersonagemGrande = document.querySelector('.personagem-grande');
        
    //passo 2 - alterar a imagem do personagem grande
    const idPersonagem = personagem.attributes.id.value;
           
    imagemPersonagemGrande.src = `./src/imagens/card-${idPersonagem}.png`;
}

function removerSelecaoDoPersonagem(){
    const personagemSelecionado = document.querySelector('.selecionado');
    
    personagemSelecionado.classList.remove('selecionado');
}