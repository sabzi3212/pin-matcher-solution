function getPin(){
    const pin = generatePin();
    const pinString = pin + '';
    if(pinString.length === 4){
        return pin;
    }
    else{
        return getPin();
    }
}

function generatePin(){
    const random = Math.round(Math.random()*10000)
    return random;
}

document.getElementById('generate-pin').addEventListener('click', function(){
    const pin = getPin();
    const pinField = document.getElementById('pin-field');
    pinField.value = pin;
});

document.getElementById('calculator').addEventListener('click', function(event){
    const number = event.target.innerText;
    const submitPin = document.getElementById('submit-pin');
    const previousTypedNumber = submitPin.value;
    if(isNaN(number)){
        if(number === 'C'){
            submitPin.value = '';
        }
        else if(number === '<'){
            const digits = previousTypedNumber.split('');
            digits.pop();
            const remainingDigits = digits.join('');
            submitPin.value = remainingDigits;
        }
    }
    else{
        const previousTypedNumber = submitPin.value;
        const newTypedValue = previousTypedNumber + number;
        submitPin.value = newTypedValue;
    }
    
})

document.getElementById('verify-pin').addEventListener('click',function(){
    const displayPinField = document.getElementById('pin-field');
    const displayPinFieldValue = displayPinField.value;
    const submitPinField = document.getElementById('submit-pin');
    const submitPinFieldValue = submitPinField.value;

    const pinSuccess = document.getElementById('pin-success');
    const pinUnsuccessful = document.getElementById('pin-unsuccessful');
    if(displayPinFieldValue === submitPinFieldValue){     
        pinSuccess.style.display = 'block';
        pinUnsuccessful.style.display = 'none';
    }
    else{
       pinUnsuccessful.style.display = 'block';
       pinSuccess.style.display = 'none';
    }
    
})