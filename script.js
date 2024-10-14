function escrevendoLetra(){

    function ativaLetra2(elemento){
        const arrTexto = elemento.innerHTML.split('');
        elemento.innerHTML = '';
        arrTexto.forEach((Letra, i)=>{
            setTimeout(()=>{
                elemento.innerHTML += Letra;
            }, 80 * i);
        });
    }
    
    const texto = document.querySelector('.digitar');
    ativaLetra(texto);


    function ativaLetra(elemento){
        const arrTexto = elemento.innerHTML.split('');
        elemento.innerHTML = '';
        arrTexto.forEach((Letra, i)=>{
            setTimeout(()=>{
                elemento.innerHTML += Letra;
            }, 80 * i);
        });
    }
    
    const titulo = document.querySelector('.digitando');
    ativaLetra(titulo);

}


const ativaMenu = document.querySelector('fa-bars');

ativaMenu.addEventListener('click', ()=>{
    ativaMenu.classList.toggle('fa-x')
})








