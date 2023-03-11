//Element By Id
let getButtonElement = document.getElementById('button');
let getHeadingElement = document.getElementById('heading');


//Event Handler
function EventHandlerByClick() {
    getHeadingElement.innerHTML = "I'm Clicked Result";
}

// function EventHandlerByMouseOver(key) {
//     key.title = "Click Here for details";
// }

function EventHandlerByMouseOver() {
    getButtonElement.title = "Click Here for details";
}


//Event Lisetener
function clickEventListener() {
    getButtonElement.addEventListener("click", EventHandlerByClick);//click work but onclick doesn't work because onclick event is a html attribute

}

function mouseEventListener() {
    getButtonElement.addEventListener("mousemove", EventHandlerByMouseOver, true); //but onmouseover not working because onmouseover is a html attribute that work as event in html file or document
}


//Handler Call
mouseEventListener();
clickEventListener();

