/**Create two unordered lists.
Each list should be wrapped in a div element.
One <li> element in the second list should have a class “active”, which sets its
background color.*/

var secondList = document.getElementsByTagName("ul")[1];
var listItems = secondList.children;
var activeLisItem = listItems[2].classList.add("active");



/**Create a function that selects the <li> element with class “active”.
Remove the class from that element, and then select the first <li> element in the
first unordered list using node relations.
Apply class to that newly selected <li> element */

function selectFirstItemOfTheFirstList () {
    
    var active = document.querySelector(".active");

    active.classList.remove("active");

    var firstElementOfTheFirstList = active.parentElement.parentElement.previousElementSibling.firstElementChild.firstElementChild.classList.add("active");

    return firstElementOfTheFirstList;

}

selectFirstItemOfTheFirstList ();
