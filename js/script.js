
document.getElementById('btn-calculate').addEventListener('click', function(){
    const incomeInputValue = getInputValue('income-input');

    const foodInputValue = getInputValue('food-input');

    const rentInputValue = getInputValue('rent-input');

    const clothesInputValue = getInputValue('clothes-input');

    if(isNaN(incomeInputValue && foodInputValue && rentInputValue && clothesInputValue)){
        alert('Please enter a valid number');
    }
    
    
    const calculateTotalExpenses = foodInputValue + rentInputValue + clothesInputValue;

    getPreviousValue('total-expenses', calculateTotalExpenses);

    if(incomeInputValue < calculateTotalExpenses){
        alert('Your expenses is more then your income');
    }
    else{
        const balanceNumber = incomeInputValue - calculateTotalExpenses;
        getPreviousValue('balance', balanceNumber);
    
    }
    
})

// Save part
document.getElementById('btn-save').addEventListener('click', function(){
    const saveInput = getInputValue('save-input');
    const savePersenties = saveInput / 100;
    console.log(savePersenties);
    const previousBalance = document.getElementById('balance');
    const previousBalanceNumber = previousBalance.innerText;

    const currentPersentiesValue = previousBalanceNumber * savePersenties;
    getPreviousValue('saving-amount', currentPersentiesValue);
    const remainingAmountValue = previousBalanceNumber - currentPersentiesValue;
    getPreviousValue('remaining-amount', remainingAmountValue);

})
