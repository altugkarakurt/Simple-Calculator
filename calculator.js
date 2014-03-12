function initInps(){
	inp1 = 0;
	inp2 = 0;
	oper = 0;
	digLim = 0;
}

function clearScreen(){
	initInps();
	document.getElementById('res').innerHTML = "" + 0;
}

function setInp(newIn){
	if(digLim < MAX_LIMIT){
		if(oper == 0){
			if (inp1 == 0){
				inp1 = newIn;			
				document.getElementById('res').innerHTML = "" + newIn;
				digLim++;		
			}
			else{
				inp1 = (inp1 * 10) + newIn;
				document.getElementById('res').innerHTML += "" + newIn;		
				digLim++;		
			}
		}
		else{
			if (inp2 == 0){
				inp2 = newIn;			
				document.getElementById('res').innerHTML += "" + newIn;
				digLim++;		
			}
			else{
				inp2 = (inp2 * 10) + newIn;
				document.getElementById('res').innerHTML += "" + newIn;		
				digLim++;
			}
		}
	}
}

function setOperation(newOp){
	if (digLim < MAX_LIMIT + 4){
		if (oper == 0){
			oper = newOp;
			if (oper == 2){
				document.getElementById('res').innerHTML += " - ";
				digLim += 3;
			}
			else if (oper == 1){
				document.getElementById('res').innerHTML += " + ";
				digLim += 3;
			}
			else if (oper == 3){
				document.getElementById('res').innerHTML += " / ";
				digLim += 3;
			}
			else if (oper == 4){
				document.getElementById('res').innerHTML += " * ";
				digLim += 3;
			}
		}
		else{
			calc();
			setInp(document.getElementById('res').innerHTML);
			setOperation(newOp);
		}
	}
}

function addInps(){
	document.getElementById('res').innerHTML = Math.round((inp1 + inp2) * 1000000000) / 1000000000;
	initInps();
}

function subInps(){
	document.getElementById('res').innerHTML = Math.round((inp1 - inp2) * 1000000000) / 1000000000;
	initInps();
}

function multiInps(){
	document.getElementById('res').innerHTML = Math.round(inp1 * inp2 * 1000000000) / 1000000000;
	initInps();
}

function divInps(){
	if (inp2 != 0){
		document.getElementById('res').innerHTML = Math.round(inp1 / inp2 * 1000000000) / 1000000000;
		initInps();
	}
	else{
		alert("Can't divide by zero");
	}
}

function calc(){
	if (oper == 1){
		addInps();
	}
	else if (oper == 2){
		subInps();
	}
	else if (oper == 3){
		divInps();
	}
	else if (oper == 4){
		multiInps();
	}
}
var MAX_LIMIT = 32;
var digLim = 0;
var inp1 = 0;
var inp2 = 0;
var oper = 0;
