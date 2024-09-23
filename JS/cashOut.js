document.getElementById('btn-add-money').addEventListener('click', function(event){
    event.preventDefault();

    const cashOut = getInputFieldValueById('input-add-money');
    if(isNaN(cashOut)){
        alert('Failed to cash out');
        return;
        
    }
    if(cashOut <= 0){
        alert('Failed to cash out');
        return;
    }

    const balance = getTextFieldValueById('input-cash-out');
    if(cashOut > balance){
        alert('You do not have enough money to cash out');
        return;
    }
    
    const newBalance = balance - cashOut;
    document.getElementById('input-cash-out').innerText = newBalance;
})