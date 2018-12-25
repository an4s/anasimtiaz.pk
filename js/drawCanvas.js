function drawCanvas(ratio)
{
    WebFont.load({
        google: {
          families: [
                     'Fredericka the Great',
                     'Cinzel Decorative'
                    ]
        },
        active: function() {
            var canvas = document.getElementById("top_canvas");
            var ctx = canvas.getContext("2d");
            var dpi = window.devicePixelRatio;

            var new_width = getComputedStyle(canvas).getPropertyValue('width').slice(0,-2),
                new_height = getComputedStyle(canvas).getPropertyValue('height').slice(0,-2);

            canvas.setAttribute("width", new_width * dpi);
            canvas.setAttribute("height", new_height * dpi);

            var ratio = 13;
            var fontSize = canvas.getAttribute("width") / ratio, offset = fontSize / 7;

            ctx.font = fontSize + "px Fredericka the Great";
            ctx.textAlign = "center";
            ctx.fillText("Muhammad Anas Imtiaz", canvas.width/2, canvas.height/2);

            ctx.font = (fontSize - 4.75 * offset) + "px Cinzel Decorative";
            ctx.textAlign = "center";
            ctx.fillText("Ph.D. candidate, Computer Engineering, Boston University", canvas.width/2, canvas.height/2 + fontSize/2 + offset * 3);
        }
    });
}