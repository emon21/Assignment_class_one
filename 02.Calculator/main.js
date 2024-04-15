

const res = document.getElementById('result');


function calculate(){
    
    let num1 = parseInt(document.getElementById('num1').value);
    let num2 = parseInt(document.getElementById('num2').value);
    let oper = document.getElementById('operator').value;
    
    if (isNaN(num1) && isNaN(num2)) {
        result.innerText = 'Please enter valid numbers';
        return;
    }

    if (num2 === 0) {

        res.textContent='Cannot divide by zero';
        return;
    }
    
    switch (oper) {
        case '+':
            res.innerText= num1 + num2;
            break;

        case '-':
            res.innerText= num1 - num2;
            break;

        case '*':
            res.innerText= num1 * num2;
            break;

        case '/':
            res.innerText= num1 / num2;
            break;
    
        default:
            
        res.innerText = 'Enter Your Number';    
    }
}
