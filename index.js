$(window).on("load",function(){
    $(".preloader-container").fadeOut(300);
});

$("#icon").on("click",function(){
    $("ul").toggleClass("show");
});