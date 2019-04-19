function postLoad()
{
    var orientation = window.orientation;
    if (window.innerWidth > window.outerHeight)
        if (document.getElementById("self_img"))
            document.getElementById("self_img").style.maxHeight = "60vh";
}

window.onorientationchange = function () {
    window.location.href = "../index.php";
}