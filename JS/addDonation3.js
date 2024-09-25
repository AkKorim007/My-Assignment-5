document.getElementById('btn-add-money3')
    .addEventListener('click', function (event) {
        event.preventDefault();

        const addMoney = getInputFieldValueById('input-add-money3');

        if (addMoney <= 0 || isNaN(addMoney)) {
            document.getElementById('my_modal_3').classList.add('hidden');
            alert('Invalid Donation Amount!');
            return
        }

        const mainBalance = getTextFieldValueById('input-cash-out');
        if (addMoney > mainBalance) {
            document.getElementById('my_modal_3').classList.add('hidden');
            alert('You do not have enough money to donate');
            return;
        }

        const balance = getTextFieldValueById('account-balance3');
        const newBalance = balance + addMoney;

        document.getElementById('account-balance3').innerText = newBalance;


        // transaction history 
        const historyContainer = document.getElementById('history-title3').innerText;
        const div = document.createElement('div');
        div.classList.add();
        div.innerHTML = `
        <div class="card-body p-6 space-y-2 font-bold bg-base-100 w-auto h-28 border-2 border-gray-200 rounded-xl">
        <p class="text-black">${addMoney} Taka is ${historyContainer} </p>
        <p class="text-gray-bg">Date: ${new Date().toLocaleDateString()} Time: ${new Date().toLocaleTimeString()} GMT +0600 (Bangladesh Standard Time)</p>
        </div>
        `

        document.getElementById('transaction-container').appendChild(div);


    })
    
    // Main balance 
    document.getElementById('btn-add-money3').addEventListener('click', function(event){
        event.preventDefault();
    
        const cashOut = getInputFieldValueById('input-add-money3');
        if(cashOut <= 0){
            document.getElementById('my_modal_3').classList.add('hidden');
            return;
            
        }
        
        const mainBalance = getTextFieldValueById('input-cash-out');
        if(cashOut > mainBalance){
            document.getElementById('my_modal_3').classList.add('hidden');
            return;
        }
        
        const newBalance = mainBalance - cashOut;
        document.getElementById('input-cash-out').innerText = newBalance;
        
    })

