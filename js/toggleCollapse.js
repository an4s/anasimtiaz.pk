function toggleCollapse(obj)
{
    var parent = obj.parentNode.parentNode.parentNode;
    var child = document.getElementById(parent.id).lastElementChild;
    if (window.getComputedStyle(child, null).getPropertyValue("display") == "none")
    {
        child.style.display = "block";
        obj.children[0].innerText = "-";
    }
    else
    {
        child.style.display = "none";
        obj.children[0].innerText = "+";
    }
}