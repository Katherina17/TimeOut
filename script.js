let timeOutInput = document.getElementById('valuesTimeOut');
let simpleInput = document.getElementById('valuesSimple');
let sliceInput = document.getElementById('valuesSlice');

timeOutInput.addEventListener('input', getTimeOutValue);
simpleInput.addEventListener('input', getSimpleValue);
sliceInput.addEventListener('input', getSliceValue);

function getTimeOutValue(element){
    let newText = element.target.value;
    timeOutInput.textContent = newText;
    setTimeout(() => {
        if(newText == timeOutInput.textContent) console.log(newText);
    }, 1000)
}

function getSimpleValue(element) {
    simpleInput.textContent = element.target.value;
    console.log(simpleInput.textContent);
}

function getSliceValue(element) {
    console.log(element.data);
}




