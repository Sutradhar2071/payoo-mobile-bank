document.getElementById('cashout').style.display='none'

document.getElementById('add-money')
.addEventListener('click', function(){
    document.getElementById('addmoney').style.display='block'
    document.getElementById('cashout').style.display='none'
})
document.getElementById('cashout-money')
.addEventListener('click', function(){
    document.getElementById('addmoney').style.display='none'
    document.getElementById('cashout').style.display='block'
})