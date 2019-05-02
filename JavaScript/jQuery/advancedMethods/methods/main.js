$('h1:first').click(() => {
  alert('h1 clicked!');
});
$("button").click(function () {
    $(this).css("background", "pink")
})

// $("input").keypress(function () {
//   console.log("You pressed a key")
//   console.log($(this).val())
// })
$("input").keyup(function () {
  console.log("You pressed a key")
  console.log($(this).val())
})
$("input").on("keypress", function (e) {
  console.log(e)
  if (e.which === 13) {
    alert("You hit enter")
  }
})
let count = 1
$('h1:first').next().on("click", (function (e) {
  count++
  if (count == 5) {
    alert("Stop!")
  }
  console.log($(this).text())
}));
//Two ways of doing things 
$("h1:eq(2)").on("click", function (e) {
  $(this).css("color", "purple")
})
$("h1").on("click", function (e) {
  $(this).css("color", "purple")
})

$("button").on("mouseenter", function (e) {
  $(this).css("font-weight", "bold")
})
$("button").on("mouseleave", function (e) {
  $(this).css("font-weight", "normal")
})
$("button").on("click", function(){
  $('div').slideToggle(1000, function () {
    console.log("completed")
    $(this).remove();
  });
 });

 