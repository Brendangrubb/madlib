
$(document).ready(function() {

  $("#blanks form").submit(function(){
    var person1Input = $("input#person1").val();
    var person2Input = $("input#person2").val();
    var storeInput = $("input#store").val();
    var animalInput = $("input#animal").val();
    var verbInput = $("verbInput").val();
    var verb2Input = $("verb2Input").val();

    $(".person1").append(person1Input);
    $(".person2").append(person2Input);
    $(".store").append(storeInput);
    $(".animal").append(animalInput);
    $(".verb").append(verbInput);
    $(".verb2").append(verb2Input);

    $("#story").show();

    event.preventDefault();
  });

});
