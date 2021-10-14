var screen = document.getElementById("screen");
var values = {prev:null , new:null}
var operType = '';
var isLastNumber = false;
var sum;

function getNumber (num){
    if (isLastNumber){
        var result;
        if(values.new){
            result = values.new + '' + num;
            values.new = result;
            screen.value = result
        }else {
            result = values.prev + '' + num;
            values.prev = result;
            screen.value = result
        }
    }else{
        screen.value = num;
        if(values.prev){
            values.new = num;
        }else{
            values.prev = num;
        }
        isLastNumber = true;
    }
}


function getOperators(oper){
    operType = oper;
    isLastNumber = false;
}

function calculate(){
        if(!values.new){
            return;
        }
        if(values.prev && values.new && operType){
            if(operType === "+"){
                var newValue = Number(values.prev) + Number(values.new);
                screen.value = newValue;
                values.prev = newValue;
            }
            if(operType === "-"){
                var newValue = Number(values.prev) - Number(values.new);
                screen.value = newValue;
                values.prev = newValue;
            }
            if(operType === "*"){
                var newValue = Number(values.prev) * Number(values.new);
                screen.value = newValue;
                values.prev = newValue;
            }
            if(operType === "/"){
                var newValue = Number(values.prev) / Number(values.new);
                screen.value = newValue;
                values.prev = newValue;
            }
        }
        isLastNumber = false;

}
function getStoE (num){
    sum = num/3.73;
    screen.value = sum; 
}
function getEtoS (num){
    sum = num*3.73;
    screen.value = sum;
}
function getStoD (num){
    sum = num/3.23;
    screen.value = sum;
}
function getDtoS (num){
    sum = num*3.23;
    screen.value = sum;
}


