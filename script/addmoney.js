document.getElementById('add-money-btn')
.addEventListener('click', function(event){
    event.preventDefault();
    const addBalance = document.getElementById('main-balance').value;
    const convertedBalance = parseFloat(addBalance);
    const accountPin = document.getElementById('account-pin').value;
    const convertedPin = parseInt(accountPin);
    const mainBalance = document.getElementById('balane-main').innerText;
    const convertedMainBalance = parseFloat(mainBalance);
    
    if(convertedPin === 1234){
        const sum = convertedMainBalance + convertedBalance;
        
        document.getElementById('balane-main').innerText= sum;
    }
    else{
        alert('pin thik nai')
    }
})