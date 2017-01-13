
 //For Addition
var add = function(number1, number2) {
	return number1 + number2;
};

// For Subtraction
var sub = function(number1, number2) {
	return number1 - number2;
};

// For Multiplication
var mult = function(number1, number2) {
	return number1 * number2;
};

// For Division
var div = function(number1, number2) {
	return number1 / number2;
};


	$(document).ready(function() {
	  $("form#calculator").submit(function(event) {
	    event.preventDefault();
	    var number1 = parseInt($("input#number1").val());
	    var number2 = parseInt($("input#number2").val());
	    var operator = $("input:radio[name=operator]:checked").val();
	    var result;

			if (operator === "add") {
      result = add(number1, number2);
    } else if (operator === "subtract") {
      result = sub(number1, number2);
    } else if (operator === "multiply") {
      result = mult(number1, number2);
    } else if (operator === "divide") {
      result = div(number1, number2);
    }
	    $("#output").text(result);
	  });
});
