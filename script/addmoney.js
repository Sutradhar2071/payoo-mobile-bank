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

        const container = document.getElementById
        ('transaction-container')

        const div = document.createElement ('div')
        div.classList.add('bg-red-400');
        div.innerHTML =div.innerHTML = `
        <h1 class = "text-xl font-semibold">Added Money</h1>
        <h3>${convertedBalance} dollar</h3>
    `;
        container.appendChild(div);
    }
    else{
        alert('pin thik nai')
    }
})