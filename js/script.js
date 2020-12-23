let a = 0;
let procent = a.toString();
$('.info-panel').text(procent)

$(".js-btn1").click(function () {
    a = a + 1;
    procent = a.toString();
    $("#my-progress-bar").width(`${procent}`)
    console.log(procent)
    $('.info-panel').text(procent)
})


$(".js-btn2").click(function () {
    a = a + 3;
    procent = a.toString();
    $("#my-progress-bar").width(`${procent}`)
    console.log(procent)
    $('.info-panel').text(procent)
})

$(".js-btn3").click(function () {
    a = a + 7;
    procent = a.toString();
    $("#my-progress-bar").width(`${procent}`)
    console.log(procent)
    $('.info-panel').text(procent)
})

$(".js-btn4").click(function () {
    a = 0;
    procent = a.toString();
    $("#my-progress-bar").width(`${procent}`)
    console.log(procent)

    $('.info-panel').text(procent)

})




