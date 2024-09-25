document.getElementById('btn-add-money')
    .addEventListener('click', function (event) {
        event.preventDefault();

        const addMoney = getInputFieldValueById('input-add-money');

        if (addMoney <= 0 || isNaN(addMoney)) {
            document.getElementById('my_modal_1').classList.add('hidden');
            alert('Invalid Donation Amount!');
            return
        }

        const mainBalance = getTextFieldValueById('input-cash-out');
        if (addMoney > mainBalance) {
            document.getElementById('my_modal_1').classList.add('hidden');
            alert('You do not have enough money to donate');
            return;
        }

        const balance = getTextFieldValueById('account-balance');
        const newBalance = balance + addMoney;

        document.getElementById('account-balance').innerText = newBalance;

        // transaction history 
        const historyContainer = document.getElementById('history-title').innerText;
        const div = document.createElement('div');
        div.classList.add();
        div.innerHTML = `
        <div class="card-body p-6 space-y-2 font-bold bg-base-100 w-auto md:h-28 h-40 border-2 mx-5 md:mx-0 border-gray-200 rounded-xl">
        <p class="text-black">${addMoney} Taka is ${historyContainer} </p>
        <p class="text-gray-bg">Date: ${new Date().toLocaleDateString()} Time: ${new Date().toLocaleTimeString()} GMT +0600 (Bangladesh Standard Time)</p>
        </div>
        `

        document.getElementById('transaction-container').appendChild(div);


    })

    document.getElementById('btn-add-money').addEventListener('click', function(event){
        event.preventDefault();
    
        const cashOut = getInputFieldValueById('input-add-money');
        if(cashOut <= 0){
            document.getElementById('my_modal_1').classList.add('hidden');
            return;
            
        }
        
        const mainBalance = getTextFieldValueById('input-cash-out');
        if(cashOut > mainBalance){
            document.getElementById('my_modal_1').classList.add('hidden');
            return;
        }
        
        const newBalance = mainBalance - cashOut;
        document.getElementById('input-cash-out').innerText = newBalance;
        
    })

