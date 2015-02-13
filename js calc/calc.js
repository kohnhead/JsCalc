var memory = 0;
function buttonClicked(obj) {
	var val = obj.value;

	switch(val) {
	case 'C':
		document.getElementById("screen_input").innerHTML = "";
		document.getElementById("screen_output").innerHTML = "";
		break;
	case 'CE':
		document.getElementById("screen_input").innerHTML = "";
		break;
	case 'MS':
		if(document.getElementById("screen_input").innerHTML != ""){
			var opps = {value:"="};
			buttonClicked(opps);
		}
		memory = document.getElementById("screen_output").innerHTML;
		break;
	case 'MC':
		memory = 0;
		document.getElementById("screen_output").innerHTML = document.getElementById("screen_input").innerHTML;
		document.getElementById("screen_input").innerHTML = "";
		break;
	case 'MR':
		document.getElementById("screen_input").innerHTML += memory;
		break;
	case 'M-':
		if(document.getElementById("screen_input").innerHTML != ""){
			var opps = {value:"="};
			buttonClicked(opps);
		}

		memory = eval(memory + "-" + document.getElementById("screen_output").innerHTML);

		document.getElementById("screen_output").innerHTML = memory;

		break;
	case 'M+':
		if(document.getElementById("screen_input").innerHTML != ""){
			var opps = {value:"="};
			buttonClicked(opps);
		}

		memory = eval(memory + "+" + document.getElementById("screen_output").innerHTML);

		document.getElementById("screen_output").innerHTML = memory;
		break; 
	case "√":
		sqrt();
		break;
<<<<<<< HEAD
	case '1/x':
		if(Calc.Input.value === 0){
			window.alert("No reciprocal!"); //error message when value = 0
		}
		else{
			Calc.Input.value = 1 / Calc.Input.value;
		}
		break;
=======
	case "1/x":
		recip();
		break;
	case "←":
		var length = document.getElementById("screen_input").innerHTML.length;
		document.getElementById("screen_input").innerHTML = document.getElementById("screen_input").innerHTML.substring(0, length-1);
		break;
	case '=':
		var input = document.getElementById("screen_input").innerHTML;
		document.getElementById("screen_output").innerHTML = eval(document.getElementById("screen_input").innerHTML);

		document.getElementById("screen_output").innerHTML = eval(input);
		document.getElementById("screen_input").innerHTML = "";
		break; 
	case "(":
		possiblyAddMultOp(val);
	case ")":
		handleParenthesis();
		break;
	case " +/- ":
		switchSign();
		break;
	case "+":
	case "-":
	case "/":
	case "*":
		var output = document.getElementById("screen_output").innerHTML;
		var input = document.getElementById("screen_input").innerHTML;

		// Include previous output for next input expression.
		if (output.length != 0 && input.length == 0 && output != "Invalid Input") {
			document.getElementById("screen_input").innerHTML = output + input;
		} 

		// Switch operators if two operators are inputted back to back.
		if (isOperatorLastDigit()) {
			switchOperator(val);
			break; 
		}

		val = " " + val + " ";
>>>>>>> origin
	default:
		document.getElementById("screen_input").innerHTML += val;
		break;
	}	
}
<<<<<<< HEAD
=======

function possiblyAddMultOp(val) {
	// Add multiplication operator for eval function if applicable for expression.

	input = document.getElementById("screen_input").innerHTML; 
	if (input.length != 0) {
		lastChar = input.substring(input.length-1);
		if (lastChar != " " && lastChar != "+" && lastChar != "-" && lastChar != "/" && lastChar != "*") {
			input += "(";
			document.getElementById("screen_input").innerHTML = input.substring(0, input.indexOf("(")) + " * ";
		}
	}
}

function switchOperator(operator) {
	var val = document.getElementById("screen_input").innerHTML;
	document.getElementById("screen_input").innerHTML = val.substring(0, val.length - 2) + " " + operator + " "; 
}

function switchSign() {
	// Switches the sign of the last digit in an expression. 
	var val = document.getElementById("screen_input").innerHTML;
	var lastDig = "";
	var length = val.length-1;

	// Determine the last digit in an expression.
	while (length >= 0 && isDigit(val.substring(length))) {
		lastDig = val[length] + lastDig;
		val = val.substring(0, length);
		length--;
	}

	length--; 

	// Determine the sign of the last digit in expression and flip.
	if ((length >= 0 && val.substring(length) != "-") || length != -1) {
		if (val[length] == "+") {
			val = val.substring(0, length);
		}
		document.getElementById("screen_input").innerHTML = val + "-" + lastDig;
	} else {
		document.getElementById("screen_input").innerHTML = val.substring(0, length) + lastDig;
	}
}

function isDigit(val) {
	return (val == "1" || val == "2" || val == "3" || val == "4" || val == "5" || val == "6" || val == "7" || val == "8" || val == "9" || val == "0");
}

function isOperatorLastDigit() {
	var val = document.getElementById("screen_input").innerHTML;
	lastChar = val.substring(val.length-1);
	return (lastChar == "-" || lastChar == "+" || lastChar == "/" || lastChar == "*" || lastChar == " ");
}

function handleParenthesis() {
	var text = document.getElementById("screen_input").innerHTML;
	var countOpen = text.match(/\(/g) || [];
	var countClosed = text.match(/\)/g) || [];

	if (countOpen.length == countClosed.length) {
		document.getElementById("screen_input").innerHTML += "(";
	} else {
		document.getElementById("screen_input").innerHTML = text + ")"
	}
}

<<<<<<< HEAD
>>>>>>> origin
=======
function sqrt() {
	var val = eval(document.getElementById("screen_input").innerHTML);
	if (val < 0) {
		document.getElementById("screen_output").innerHTML = "Invalid Input";
	} else {
		document.getElementById("screen_output").innerHTML = Math.sqrt(val);
	}
	document.getElementById("screen_input").innerHTML = "";
}

function recip() {
	var val = eval(document.getElementById("screen_input").innerHTML);
	document.getElementById("screen_output").innerHTML = (1/val);
	document.getElementById("screen_input").innerHTML = "";
}

>>>>>>> origin
