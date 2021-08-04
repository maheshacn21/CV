$(window).on("load",function(){
    $(".preloader-container").fadeOut(300);
});

$("#icon").on("click",function(){
    $("ul").toggleClass("show");
});

$(".na-item").on("click",function(){
    $("ul").toggleClass("show");
});
