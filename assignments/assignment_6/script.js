$(document).ready(function () {

  var text = "!";
  var box = $("#box");
  var addTextToBox = function () {
    box.prepend(text);
  }
  box.click(addTextToBox);

});

$(document).ready(function () {
  $(".one").mouseover(function () {
    $(".one").css("background-color", "lightpink");
  });

  $(".three").mouseout(function () {
    $(".three").css("background-color", "lightblue");
  });

  $(document).ready(function () {
    $(".four").click(function () {
      $("button:first").removeClass(".square");
      $("button:first").addClass(".circle");
    });

    $(document).ready(function () {
      $("button").click(function () {
        $(".four").hide(".four");
      });
    });
    var x = 0;
    $(document).ready(function () {
      $(window).resize(function () {
        $(".five").text(x += 10);
      });
      $(".five").click(function () {
        $(window).resize();
      });
    });


  });
});