// https://stackoverflow.com/a/33928558
// Copies a string to the clipboard. Must be called from within an
// event handler such as click. May return false if it failed, but
// this is not always possible. Browser support for Chrome 43+,
// Firefox 42+, Safari 10+, Edge and Internet Explorer 10+.
// Internet Explorer: The clipboard feature may be disabled by
// an administrator. By default a prompt is shown the first
// time the clipboard is used (per session).
function copyToClipboard(text) {
    if (window.clipboardData && window.clipboardData.setData) {
        // Internet Explorer-specific code path to prevent textarea being shown while dialog is visible.
        return window.clipboardData.setData("Text", text);

    }
    else if (document.queryCommandSupported && document.queryCommandSupported("copy")) {
        var textarea = document.createElement("textarea");
        textarea.textContent = text;
        textarea.style.position = "fixed";  // Prevent scrolling to bottom of page in Microsoft Edge.
        document.body.appendChild(textarea);
        textarea.select();
        try {
            return document.execCommand("copy");  // Security exception may be thrown by some browsers.
        }
        catch (ex) {
            console.warn("Copy to clipboard failed.", ex);
            return false;
        }
        finally {
            document.body.removeChild(textarea);
        }
    }
}

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
        copyToClipboard(usr1 + usr2 + usr3 + at + dom);
        window.location.href = proto + usr1 + usr2 + usr3 + at + dom;
        alert('Email copied to clipboard');
        return false;
    }
    if (e == 'G')
    {
        var proto = "mailto:",
            usr1  = "anas",
            usr2  = "",
            usr3  =  "imt",
            at    = "@",
            dom   = "gmail.com";
        copyToClipboard(usr1 + usr2 + usr3 + at + dom);
        window.location.href = proto + usr1 + usr2 + usr3 + at + dom;
        alert('Email copied to clipboard');
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