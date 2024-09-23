document.getElementById('btn-add-money')
    .addEventListener('click', function(event){
        event.preventDefault();

        const addMoney = getInputFieldValueById('input-add-money');

        if(isNaN(addMoney)){
            alert('Failed to add money');
            return
        }
        if(addMoney <= 0){
            alert('Failed to cash out');
            return;
        }

        const balance = getTextFieldValueById('account-balance');
        if(addMoney > balance){
            alert('You do not have enough money to cash out');
            return;
        }
        const newBalance = balance + addMoney;

        document.getElementById('account-balance').innerText = newBalance;
  
})