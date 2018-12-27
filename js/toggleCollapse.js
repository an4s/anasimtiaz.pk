function toggleCollapse(obj)
{
    var parent = obj.parentNode.parentNode.parentNode;
    var child = document.getElementById(parent.id).lastElementChild;
    if (window.getComputedStyle(child, null).getPropertyValue("display") == "none")
    {
        child.style.display = "block";
        obj.src = "img/minus.png";
    }
    else
    {
        child.style.display = "none";
        obj.src = "img/plus.png";
    }
}