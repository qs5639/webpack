import _ from "lodash";
import "./style.css"
import IMG1 from "../resources/banner1.jpg"
import XMLD from "MOCKities/data.xml"
import UserD from "MOCKities/user.json"

function component() {
    var element = document.createElement("div");
    element.innerHTML = _.join(["HELLO", "webpack"], " ");
    element.classList.add("hello");

    // append image
    var myImg = new Image();
    myImg.src = IMG1;
    element.append(myImg)

    // log xml data
    console.log("XML DATA::", XMLD);
    
    // log json data
    console.log("JSON DATA::", UserD);
    return element;
}
document.body.appendChild(component());