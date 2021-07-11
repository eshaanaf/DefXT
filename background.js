console.log("Welcome to the background !!!")

chrome.runtime.onMessage.addListener(receiver);

window.word = "randommm";
function receiver(request , sender , sendResponse){
    console.log(request);
    window.word = request.text;    
}