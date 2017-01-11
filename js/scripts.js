
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

	$("form#add").submit(function(event) {
		var number1 = parseInt($("#add1").val());
		var number2 = parseInt($("#add2").val());
		var result = (add(number1, number2));
		$("#output").text(result);
		event.preventDefault();
	});

});
