

import React, { useState } from 'react'
import Cookies from 'universal-cookie';


const useCookies = (cookieName) => {
    const CookiesParent = new Cookies();
    const [cookieValue, setCookieValue] = useState(CookiesParent.get(cookieName))

    const setCookie = (value, options) => {
        Cookies.set(cookieName, value, options);
        setCookieValue(value);
    };

    const removeCookie = () => {
        Cookies.remove(cookieName);
        setCookieValue(null);
    };

    return [cookieValue, setCookie, removeCookie];
}

export default useCookies;
