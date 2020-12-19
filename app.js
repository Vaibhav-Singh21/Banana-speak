var btnTranslate = document.querySelector(".btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");
 // api for minion translator
var serverURL = "https://api.funtranslations.com/translate/minion.json"
//error handling
function errHandler(error) {
    console.log("error occured, "+ error);
    alert("Server is down !! try again after some time");

}

function getTranslationURL(text) {
    return serverURL + "?" + "text=" + text;
}

btnTranslate.addEventListener("click", function clickEventHandler(){
    var text = txtInput.value;  // taking input

    fetch(getTranslationURL(text))
    .then(response => response.json())
    .then(json =>{ 
        outputDiv.innerText = (json.contents.translated)})
    .catch(errHandler);
});