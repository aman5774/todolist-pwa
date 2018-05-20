//check off specfic todo by clicking
$("ul").on("click", "li", function() {
  $(this).toggleClass("completed");
});

//Deleting the Todos
$("ul").on("click", "span", function(event) {
  $(this).parent().fadeOut(500, function() {
    $(this).remove();
  });
  event.stopPropagation();
});

//Adding the Todo
$("input[type='text']").keypress(function(event) {
  if (event.which === 13) {
    var todoText = $(this).val();
    $(this).val("");
    if (todoText !== "") {
      $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
    }
  }
});

$(".fa-plus").click(function() {
  var todoText = $("input[type='text']").val();
  $("input[type='text']").val("");
  if (todoText !== "") {
    $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
  }
});
