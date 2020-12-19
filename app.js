var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input"); // selector using id of tags
var outputDiv = document.querySelector("#output");


btnTranslate.addEventListener("click", function clickEventHandler(){
    outputDiv.innerText =  txtInput.value;
    
})