function toggleCollapse(obj)
{
    var parent = obj.parentNode.parentNode.parentNode;
    var child = document.getElementById(parent.id).lastElementChild;
    if (window.getComputedStyle(child, null).getPropertyValue("display") == "none")
    {
        child.style.display = "block";
        obj.childNodes[1].src = "../img/minus.png";
    }
    else
    {
        child.style.display = "none";
        obj.childNodes[1].src = "../img/plus.png";
    }
}