function getInputValue(elementId){
    const inputField = document.getElementById(elementId);
    const inputFieldString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldString);

    return inputFieldValue;

}

function getPreviousValue(elementId, value){
    const previousValue = document.getElementById(elementId);
    const previousValueString = previousValue.innerText;
    const previousValueNumber = parseFloat(previousValueString);
    previousValue.innerText = value;
    return previousValueNumber;
    
}
