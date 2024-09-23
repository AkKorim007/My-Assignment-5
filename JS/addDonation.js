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
        

        // transaction history 
        const div = document.createElement('div');
        div.classList.add('card-body');
        div.innerHTML =`
        <div class="px-5 py-10 font-bold bg-base-100 w-auto h-28 border-2 border-gray-100 rounded-xl">
        <p>${addMoney} Taka is Donated for flood at Noakhali, Bangladesh</p>
        </div>
        `
        document.getElementById('transaction-container').appendChild(div);
        document.getElementById(input-add-money).value = '';

  
})