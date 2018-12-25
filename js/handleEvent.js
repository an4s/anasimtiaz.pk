function handleEvent(e)
{
    if (e == 'Y')
    {
        var proto = "mailto:",
            usr1  = "anas",
            usr2  = "_",
            usr3  =  "imtiaz",
            at    = "@",
            dom   = "yahoo.com";
        window.location.href = proto + usr1 + usr2 + usr3 + at + dom;
        return false;
    }
    if (e == 'G')
    {
        var proto = "mailto:",
            usr1  = "anas",
            usr2  = "_",
            usr3  =  "imt",
            at    = "@",
            dom   = "gmail.com";
        window.location.href = proto + usr1 + usr2 + usr3 + at + dom;
        return false;
    }
    if (e == 'S')
    {
        var proto = "skype:",
            usr1  = "anas",
            usr2  = "-",
            usr3  = "imtiaz",
            q     = "?",
            act   = "chat";
        window.location.href = proto + usr1 + usr2 + usr3 + q + act;
        return false;
    }
}