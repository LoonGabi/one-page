//var elemento = document.getElementById("seu-elemento");

// DEIXANDO A NAV BRANCA QUANDO ROLAR A PÁGINA
const nav = document.querySelector(".header");

window.addEventListener("scroll", function() 
{
    var posicaoScroll = window.scrollY;

    var posicaoLimite = 20; 

    if (posicaoScroll > posicaoLimite) 
    {
        nav.style.backgroundColor = "#fff"; 
        nav.style.borderBottom = "1px solid #3ec9c0";
    } 
    else 
    {
        nav.style.backgroundColor = ""; 
        nav.style.borderBottom = "";
    }
});


// AJUSTANDO ROLAGEM DA PÁGINA
function ajusteRolagem(e) 
{
    e.preventDefault();

    const targetId = e.target.getAttribute('href'); 
    const targetElement = document.querySelector(targetId); 
    const nav = document.querySelector(".header");
    const offset = nav.offsetHeight;   

    if(targetElement) 
    {  
        const targetPosition = targetElement.offsetTop - offset; 
        
        window.scrollTo({
            top: targetPosition,
        });
    }
}

// Associe a função de rolagem suave aos links da navbar
const navLinks = document.querySelectorAll('.cabecalho-menu-itens a');

navLinks.forEach(link => 
{
    link.addEventListener('click', ajusteRolagem);
});



