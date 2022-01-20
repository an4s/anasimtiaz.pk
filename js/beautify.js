function beautify()
{
    WebFont.load({
        google: {
          families: [
                     'Fredericka the Great',
                     'Tinos'
                    ]
        },
        active: function() {
            var nameDiv = document.getElementById("top_container_left_div_name");
            nameDiv.style.fontFamily = "Fredericka the Great";
            nameDiv.style.fontSize = window.innerWidth > window.innerHeight ? "4.5vw" : "4.5vh";

            var positionDiv = document.getElementById("top_container_left_div_title");
            positionDiv.style.fontFamily = "Tinos";
            positionDiv.style.fontSize = window.innerWidth > window.innerHeight ? "3.5vw" : "3.5vh";
        }
    });
}

$(window).resize(function() {
    document.getElementById("top_container_left_div_name").style.fontSize = window.innerWidth > window.innerHeight ? "4.5vw" : "4.5vh";
    document.getElementById("top_container_left_div_title").style.fontSize = window.innerWidth > window.innerHeight ? "3.5vw" : "3.5vh";
});