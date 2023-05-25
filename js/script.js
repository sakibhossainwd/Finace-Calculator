
document.getElementById('btn-calculate').addEventListener('click', function(){
    const incomeInputValue = getInputValue('income-input');

    const foodInputValue = getInputValue('food-input');

    const rentInputValue = getInputValue('rent-input');

    const clothesInputValue = getInputValue('clothes-input');

    if(isNaN(incomeInputValue && foodInputValue && rentInputValue && clothesInputValue)){
        alert('Please enter a valid number');
    }
    if(1 > incomeInputValue){
        alert('Please enter a Possitive number');
    }
    if(1 > foodInputValue){
        alert('Please enter a Possitive number');
    }
    if(1 > rentInputValue){
        alert('Please enter a Possitive number');
    }
    if(1 > clothesInputValue){
        alert('Please enter a Possitive number');
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
    if(saveInput <= 100){
        alert('You have reached the maximum savings');
    }
    const savePersenties = saveInput / 100;
    console.log(savePersenties);
    const previousBalance = document.getElementById('balance');
    const previousBalanceNumber = previousBalance.innerText;

    const currentPersentiesValue = previousBalanceNumber * savePersenties;
    if(currentPersentiesValue > previousBalanceNumber){
        alert('You dont have enough money to save');
    }
    getPreviousValue('saving-amount', currentPersentiesValue);
    const remainingAmountValue = previousBalanceNumber - currentPersentiesValue;
    getPreviousValue('remaining-amount', remainingAmountValue);

})
