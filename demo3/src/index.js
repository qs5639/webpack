import _ from "lodash";
import printMe from "./print.js"
import "./style.css"
function component() {
    var element = document.createElement("div");
    var btn = document.createElement('button');
    element.innerHTML = _.join(["HELLO", "webpack"], " ");

    // bind event
    btn.innerHTML = 'click me to print';
    btn.onclick = printMe;
    element.appendChild(btn);
    return element;
}
let element = component();
document.body.appendChild(element);

// if (module.hot) {
//     module.hot.accept('./print.js', function () {
//         console.log("允许通过 updated module")
//         // printMe();
//         document.body.removeChild(element)
//         element = component();
//         document.body.appendChild(element)
//     })
// }