module.exports = (data, selectorP, defaultValue) => {
    const cms = require(process.env.PROJECT_ROOT + "/src/cms.js");
    const selector = Array.isArray(selectorP) ? selectorP : [].concat(selectorP);
    let dataItem = data;
    let index = 0;
    while (index < selector.length) {
        const property = selector[index];
        if (((["object", "string", "function"].indexOf(typeof dataItem) !== -1) || (index !== selector.length - 1)) && (property in dataItem)) {
            dataItem = dataItem[property];
        } else {
            return defaultValue;
        }
        index++;
    }
    return dataItem;
};