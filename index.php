<?php
function isMobile() {
    return preg_match("/(android|avantgo|blackberry|bolt|boost|cricket|docomo|fone|hiptop|mini|mobi|palm|phone|pie|tablet|up\.browser|up\.link|webos|wos)/i", $_SERVER["HTTP_USER_AGENT"]);
}
$useragent=$_SERVER['HTTP_USER_AGENT'];
if (isMobile())
    header('Location: ./pages/mobile.html');
else
    header('Location: ./pages/desktop.html');
?>