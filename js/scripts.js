//business logic//
var a = 0;
var b = 0;
var c = 0;
var d = 0;

//UI logic//
$(document).ready(function() {
  $("#Quiz").submit(function (event) {
    debugger;
    var climate = $("input:radio[name=climate]:checked").val();
    var intensity = $("input:radio[name=intensity]:checked").val();
    var amenities = $("input:radio[name=amenities]:checked").val();
    var meal = $("input:radio[name=meal]:checked").val();
    var perfect = $("input:radio[name=perfect]:checked").val();

    if (climate === "a"){
      a += 1;
    } if (climate === "b"){
      b += 1;
    } if (climate === "c"){
      c += 1;
    } if (climate === "d"){
      d += 1;
    }
    //end of question 1//
    if (intensity === "a"){
      a += 1;
    } if (intensity === "b"){
      b += 1;
    } if (intensity === "c"){
      c += 1;
    } if (intensity === "d"){
      d += 1;
    }
    //end of question 2//
    if (amenities === "a"){
      a += 1;
    } else if (amenities === "b"){
      b += 1;
    } else if (amenities === "c"){
      c += 1;
    } else if (amenities === "d"){
      d += 1;
    }
    //end of question 3//
    if (meal === "a"){
      a += 1;
    } else if (meal === "b"){
      b += 1;
    } else if (meal === "c"){
      c += 1;
    } else if (meal === "d"){
      d += 1;
    }
    //end of question 4//
    if (perfect === "a"){
      a += 1;
    } else if (perfect === "b"){
      b += 1;
    } else if (perfect === "c"){
      c += 1;
    } else if (perfect === "d"){
      d += 1;
    }
    //end of question 5//
    if (a>b && a>c && a>d) {
    $("#vegas").show();
    $("#vancouver").hide();
    $("#costarica").hide();
    $("#finland").hide();
    }
    else if (b>a && b>c && b>d) {
    $("#vegas").hide();
    $("#vancouver").show();
    $("#costarica").hide();
    $("#finland").hide();
    }
    else if (c>a && c>b && c>d) {
    $("#vegas").hide();
    $("#vancouver").hide();
    $("#costarica").show();
    $("#finland").hide();
    }
    else if (d>a && d>b && d>c) {
    $("#vegas").hide();
    $("#vancouver").hide();
    $("#costarica").hide();
    $("#finland").show();
    };
    event.preventDefault();
  });
});
