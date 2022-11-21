export const getRangeNbs = (startNb, endNb) => {
    if (startNb && endNb) {
        return [...Array(endNb - startNb + 1).keys()].map(i => i + startNb);
    }
};

export const getSingleDataID = (url) => {
    return url.slice(-3, -1).replace('/', '');
}