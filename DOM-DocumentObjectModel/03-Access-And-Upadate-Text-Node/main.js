/**Create an unordered list containing <li> items that represent navigation.
Create a function that takes text from one of the <li> elements and presents it on
screen using alert. */

function displayAlert () {

    var navigation = document.querySelector("ul");
    var home = navigation.children[2];

    window.alert(home.textContent);

}

displayAlert ();


/**Create one more function.
The function should take some text as an argument.
The function should select the last <li> element in the list and replace its text with
text passed as the function argument. */

function replaceTheContent (text) {

    var list = document.querySelector("ul");
    var lastListItem = list.lastElementChild;

    lastListItem.textContent = text;
}

replaceTheContent ("Social Media");
