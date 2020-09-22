module.exports = function(request, silently = false) {
	const cms = require(process.env.PROJECT_ROOT + "/src/cms.js");
	cms.utils.trace("cms.utils.getIpFromRequest");
    let ip = cms.utils.dataGetter(request, ["headers", "x-forwarded-for"], undefined);
    if(typeof ip === "undefined") {
		ip = cms.utils.dataGetter(request, ["connection","remoteAddress"], undefined);
    }
    if(typeof ip === "undefined" && silently === false) {
    	throw new Error("Could not identify request ip [ERR:253]");
    }
    return ip;
};