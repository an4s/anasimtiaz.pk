function toggleMOOCList()
{
    var mooc_size = document.getElementById("moocs_body").getElementsByTagName("ul")[0].getElementsByTagName("li").length
    if (mooc_size == 5)
        extractJSON("moocs");
    else
        extractJSON("moocs_reduced");
}
