function fixFont()
{
    WebFont.load({
        google: {
            families: [
                    'Fredericka the Great',
                    'Tinos'
                    ]
        },
        active: function() {
            document.getElementById("top_container_left_div_name").style.font = "40px Fredericka the Great";
            document.getElementById("top_container_left_div_title").style.font = "30px Tinos";
        }
    })
}