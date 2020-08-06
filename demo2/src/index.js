import _ from "lodash";
import printMe from "./print.js"
function component() {
    var element = document.createElement("div");
    var btn = document.createElement('div');
    element.innerHTML = _.join(["HELLO", "webpack"], " ");
    
    // bind event
    btn.innerHTML = 'click me to print';
    btn.onclick = printMe;

    element.appendChild(btn);
    return element;
}
document.body.appendChild(component());