$(function() {

    //Select the first element of the list and give it a bottom border
    
    var $firstLi = $("ul li:first").css("border-bottom", "3px solid crimson");
    console.log($firstLi);

    //Select all list elements and transform their text to uppercase

    var $allListElements = $("ul li").css("text-transform", "upperCase");
    console.log($allListElements);

    //Select active element of the list and change its font color

    var $activeElement = $(".active").css("color", "blue");
    console.log($activeElement);
    
    //Find the middle one and change its background color
    

    var $medianElement = Math.floor($allListElements.length / 2);
    $allListElements.eq($medianElement).css("background-color", "#02E9AC");
    
})