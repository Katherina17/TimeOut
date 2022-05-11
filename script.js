let timeOutInput = document.getElementById('valuesTimeOut');
let simpleInput = document.getElementById('valuesSimple');
let sliceInput = document.getElementById('valuesSlice');

timeOutInput.addEventListener('input', getTimeOutValue);
simpleInput.addEventListener('input', getSimpleValue);
sliceInput.addEventListener('input', getSliceValue);

function getTimeOutValue(element){
    if(element.target.value == 'Привет'){
        console.log('Привет');
    }  
}

function getSimpleValue(element) {
    simpleInput.textContent = element.target.value;
    console.log(simpleInput.textContent);
}

function getSliceValue(element) {
    console.log(element.data);
}




