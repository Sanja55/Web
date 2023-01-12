/**Create a function that selects the second list and applies a class that sets some
background color to it.*/

function changeTheSecondListBgColor () {

    var list = document.getElementsByTagName("ul");
    var secondList = document.getElementsByTagName("ul")[1];
    secondList.classList.add("second-list");
    secondList.style.backgroundColor = "#2bd659"

}

changeTheSecondListBgColor();


/**Create a second function that, when triggered, selects all <li> elements on the
page. The function also sets a class that sets some bg color to every <li> element. */

function selectAllListElements () {

    var listElements = document.getElementsByTagName("li");

    for (var i = 0; i < listElements.length; i++) {

        listElements[i].classList.add("list-item");
        listElements[i].style.backgroundColor = "#2f5eeb";

    }

    //return listElements;
}

selectAllListElements ();


/**Create one more unordered list and one more function
The function​ should select only <li> elements from that last list
Each <li> element should get a class that sets some bg color and transforms the
text to uppercase.*/

var thirdList = document.createElement("ul");

var thirdListItem = document.createElement("li");
thirdList.appendChild(thirdListItem);

var body = document.querySelector("body");
body.appendChild(thirdList);

var content = document.createTextNode("Element Nine");
thirdListItem.appendChild(content);

function  selectThirsListElements() {

    thirdListItem.classList.add("third-list-item");

    if(thirdListItem.className === "third-list-item") {

        thirdListItem.style.backgroundColor = "#c53bd1";
        thirdListItem.style.textTransform = "upperCase";

    }
    
}

selectThirsListElements ();




