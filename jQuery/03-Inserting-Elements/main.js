$(function () {
    
    var $listOfImages = ["./Images/winter1.jpg", "./Images/winter2.jpg", "./Images/winter3.jpg", 
                        "./images/winter4.jpg", "./Images/winter5.jpg", "./Images/winter6.jpg"];
    
    var $gallery = $("<div class='gallery'></div>");
    $gallery.insertBefore("script");

    $listOfImages.forEach(function (imageUrl) {
        var $image = $("<img>");
        $image.attr("src", imageUrl);
        $image.appendTo($gallery);
    });

    $gallery.prepend("<h1>The Winter Magic</h1>");

     $gallery.find("img").each(function () {

        var width = Math.floor(Math.random () * 600) + 100;
        var height = Math.floor(Math.random () * 600) + 100;
        $(this).css({
            width: width + "px",
            height: height + "px"
        });
    });

    $gallery.find("img").each(function () {
        
        var width = $(this).width();
        if (width < 200) {
            $(this).css("border", "5px solid #34ebc0")
        } 
    }); 

})