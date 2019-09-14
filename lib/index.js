function constructURL(url, param, fl) {
    if (param) url += param + "?";
    Object.keys(fl).forEach(e => {
        // if (e == 'limit' || e == 'skip') return
        if (fl[e] && fl[e] !== "undefined" && fl[e].length > 0)
            url += `${e}=${fl[e]}&`;
    });
    return url;
}

export { constructURL }