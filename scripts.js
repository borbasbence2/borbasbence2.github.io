$('.arrebb').text('IGEN')

$('.alrebb').text('NEM')

$('.arrebb').css("border", "2px solid grey")

$('.alrebb').css("border", "2px solid grey")

$("#fejlec").click((event) => {console.log("MINDENT")})

$("#katt").click((event) => {$("#fejlec").text ("MINDENT")})

$("#harmadik-gomb").click((event) => { $("button").css ("background-color", "pink") 

})
let num=0
$("#szamlalo").click(() => {
num++; $(".szam").text(num);
})