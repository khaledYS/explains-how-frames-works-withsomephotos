var img = document.getElementById("imgrate");
var imgStatus;
function updateFrame() {
    "use strict";
    var attr = img.getAttribute('src');
        if(attr == "images/frame-rate/charcter-skill/frame-1.png")
        {
            img.setAttribute('src', 'images/frame-rate/charcter-skill/frame-2.png')
        }
        else if(attr == "images/frame-rate/charcter-skill/frame-2.png")
        {
            img.setAttribute('src', 'images/frame-rate/charcter-skill/frame-3.png')
        }
        else if(attr == "images/frame-rate/charcter-skill/frame-3.png")
        {
            img.setAttribute('src', 'images/frame-rate/charcter-skill/frame-4.png')
        }
        else if(attr == "images/frame-rate/charcter-skill/frame-4.png")
        {
            img.setAttribute('src', 'images/frame-rate/charcter-skill/frame-5.png')
        }
        else if(attr == "images/frame-rate/charcter-skill/frame-5.png")
        {
            img.setAttribute('src', 'images/frame-rate/charcter-skill/frame-6.png')
        }
        else if(attr == "images/frame-rate/charcter-skill/frame-6.png")
        {
            img.setAttribute('src', 'images/frame-rate/charcter-skill/frame-7.png')
        }
        else if(attr == "images/frame-rate/charcter-skill/frame-7.png")
        {
            img.setAttribute('src', 'images/frame-rate/charcter-skill/frame-8.png')
        }
        else if(attr == "images/frame-rate/charcter-skill/frame-8.png")
        {
            img.setAttribute('src', 'images/frame-rate/charcter-skill/frame-9.png')
        }
        else if(attr == "images/frame-rate/charcter-skill/frame-9.png")
        {
            img.setAttribute('src', 'images/frame-rate/charcter-skill/frame-1.png')
        }
        else
        {
            img.setAttribute('alt', "your browser is shit");
        }
};

setInterval(updateFrame, 12);