function abrirConteudo(janela, fechar){
    const modal = document.getElementById(janela)
    modal.classList.add("abrir")

    modal.addEventListener("click", (e) => {
        if(e.target.id == fechar || e.target.id == janela){
            modal.classList.remove("abrir")
        }
    })
}

const btnMobile = document.getElementById("btn-mobile");


function toggleMenu(){
    const nav = document.getElementById("navBar");
    nav.classList.toggle("active");

}

btnMobile.addEventListener("click", toggleMenu)
