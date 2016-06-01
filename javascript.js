function calculate(amount) {
    var tax;
    
    if(amount < 16000){
        tax = 0 ;
    }
    else if(amount < 52500){
        tax = (amount - 16000) * 10/100; 
    }
    
    else if(amount < 113000){
        tax = (amount - 52500) * 16/100 + 3650;                  
    }
    else if( amount < 184500){
        tax = (amount - 113000) * 24/100 + 13300;    
    }
    else {
        tax = (amount - 184500) * 36/100 + 30490;    
    }    
    return tax;
    }

function calculator() {
    var income = document.getElementById("input").value;
    var tax = calculate(income);
    var output = document.getElementById("output");
    output.value = tax;
}