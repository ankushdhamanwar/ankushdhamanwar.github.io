$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
    });
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
});

var typed = new Typed(".typing", {
    strings: ["Python Developer", "Data Structure Enthusiast", "Problem Solver", "Gamer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});