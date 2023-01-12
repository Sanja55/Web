/**Do the following exercise in two ways: using DOM manipulation methods and
using innerHTML.
Create a function that is used for building a dropdown/select element.
It first builds a dropdown and then adds it to the DOM.
The function takes two arguments: the first is an array of strings and the second
is a DOM node to which the dropdown will be added.
Create options that correspond to items in the passed array and add them to the
select element.
Add the whole dropdown list to DOM . */


function createFirstDropdownList () {

    var divNode = document.querySelector("div").innerHTML = "<select name='dropdown' id='dropdown'><option value='Option One'>Option One</option><option value='Option two'>Option Two</option><option value='Option Three'>Option Three</option><option value='Option Four'>Option Four</option><option value='Option Five'>Option Five</option></select>"

}

createFirstDropdownList ()


function createSecondDropdownList (array) {

    var secondDiv = document.querySelectorAll("div")[1];
    var select = document.createElement("select");

    secondDiv.appendChild(select);

    for (var i = 0; i < array.length; i++) {

        var option = document.createElement("option");
        option.value = array[i];
        option.text = array[i];
        select.appendChild(option);
    }
}

createSecondDropdownList (["Option One", "Option Two", "Option Three", "Option Four"]);
