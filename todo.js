
$("a ,.label").click((event)=>{
    $(".app").css ("font-size", "50px")
})

$("a ,.label").click((event)=>{
    $(".appketto").css ("font-size", "30px")
})

$("li").css ("text-indent", "70px")
$(".todos").css ("text-indent", "40px")

$("a, .label").click(function() {
    $("img").remove()
})
$("a ,.label").click((event)=>{
    $("ul").css ("font-size", "30px")
})
$('.hozzaadas').click(() => {
    $('ul').append(`<li>${$('input').val()}</li>`);
    $('input').val('');
  });