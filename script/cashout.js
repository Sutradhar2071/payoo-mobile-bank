document.getElementById('cash-money-btn')
.addEventListener('click', function(event){
    event.preventDefault();
    const cashoutBalance = document.getElementById('main-balance-cashout').value;
    const convertedcashoutBalance = parseFloat(cashoutBalance);
    const accountPin = document.getElementById('account-pin').value;
    const convertedPin = parseFloat(accountPin);
    const mainBalance = document.getElementById('balane-main').innerText;
    const convertedMainBalanceMain = parseFloat(mainBalance);

    if(convertedPin === 1234){
        const odd = convertedMainBalanceMain - convertedcashoutBalance;
        // document.getElementById('balane-main').innerText = odd;
        document.getElementById('balane-main').innerText = odd;
    }

    else{
        alert('pin thik nai')
    }
})

