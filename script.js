function setCookie() {
    var cookieValue = "Hello, this is a cookie!";
    document.cookie = "exampleCookie=" + cookieValue + "; expires=Fri, 31 Dec 2024 23:59:59 UTC; path=/";
    document.getElementById("value").innerText = cookieValue;
}

function getCookie() {
    var name = "exampleCookie=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var cookieArray = decodedCookie.split(';');
    for(var i = 0; i < cookieArray.length; i++) {
        var cookie = cookieArray[i];
        while (cookie.charAt(0) == ' ') {
            cookie = cookie.substring(1);
        }
        if (cookie.indexOf(name) == 0) {
            return cookie.substring(name.length, cookie.length);
        }
    }
    return "";
}

// Display cookie value on page load
document.getElementById("value").innerText = getCookie();
