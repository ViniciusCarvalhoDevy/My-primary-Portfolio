$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");  
        }else{ 
            $('.navbar').removeClass("sticky");
           
        }
    });
    
});


const btnMobile = document.getElementById('menu-btn');
function toggleMenu(){
    
    const nav = document.getElementById('nav');
    nav.classList.toggle('active')
}
btnMobile.addEventListener('click',toggleMenu);


