$(function() {
  var $inputField = $("#text-field");
  var $submitBox = $("#submit-box");

  $submitBox.on("click", function() {
    var input = $inputField.val();
    $inputField.val("");

    var $newField = $("<p></p>");
    $newField.text(input);
    $("body").append($newField);
  })
})
