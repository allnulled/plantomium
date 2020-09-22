const introspectableTypes = ["object", "string", "function"];

module.exports = (data, selectorP, defaultValue) => {
    const cms = require(process.env.PROJECT_ROOT + "/src/cms.js");
    // cms.utils.trace("cms.utils.dataGetter");
    if(!Array.isArray(selectorP)) {
        throw new Error("Required <selector> to be an array of strings [ERR:789]");
    }
    const selector = Array.isArray(selectorP) ? selectorP : [].concat(selectorP);
    let dataItem = data;
    let index = 0;
    while (index < selector.length) {
        const property = selector[index];
        const isIntrospectable = introspectableTypes.indexOf(typeof dataItem) !== -1;
        if (isIntrospectable && (dataItem !== null) && (property in dataItem)) {
            dataItem = dataItem[property];
        } else {
            return defaultValue;
        }
        index++;
    }
    return dataItem;
};