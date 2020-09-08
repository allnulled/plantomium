module.exports = (data, selectorP, value, force = false) => {
    if(!Array.isArray(selectorP)) {
        throw new Error("Required <selector> to be an array of strings [ERR:788]");
    }
    const selector = Array.isArray(selectorP) ? selectorP : [].concat(selectorP);
    let dataItem = data;
    let index = 0;
    const lastIndex = selector.length - 1;
    while (index < selector.length) {
        const property = selector[index];
        if (index === lastIndex) {
            dataItem[property] = value;
        } else if (["object", "string", "function"].indexOf(typeof dataItem) !== -1) {
            if (!(property in dataItem)) {
                dataItem[property] = {};
            }
            dataItem = dataItem[property];
        } else if (force) {
            dataItem[property] = {};
            dataItem = dataItem[property];
        } else {
            throw new Error("SetterError:" + property);
        }
        index++;
    }
    return data;
};