function setCookie(key, value, exdays){
    const d = new Date();
    //d.setTime(d.getTime() + (exdays*24*60*60*1000));
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    const expires = "expires="+ d.toUTCString();
    const v = encodeURIComponent(value)
    document.cookie = key + "=" + v + "; " + expires + "; path=/";
}

function getCookie(key){
    const name = key + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(';');
    const re = new RegExp(name);
    const result = ca.filter(
        c => re.test(c)
    )

    if (result.length !== 0) return result[0].slice(result[0].indexOf('=') + 1, result[0].length);
    else return "";
  }

function deleteCookie(key){
    const d = new Date();
    d.setTime(d.getTime() + (-10*24*60*60*1000));
    document.cookie = key + "=; expires="+ d.toUTCString() + "; path=/";
}
const Cookies = {setCookie, getCookie, deleteCookie};

export default Cookies;