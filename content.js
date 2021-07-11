console.log("Extension is up and running!");

window.addEventListener('mouseup' , wordSelected);

function wordSelected(){
    let selectedText = window.getSelection().toString().trim();
    console.log(selectedText);
    let msg = {
        text:selectedText
    };
    if(selectedText.length>0){
        chrome.runtime.sendMessage(msg);
    }
}