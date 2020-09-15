module.exports = function(a, b) {
	let aPriority, bPriority;
	if((typeof a !== "object") || (typeof b !== "object")) {
		throw new Error("Required hooks to be objects on <cms.hooks.sorter> [ERR:283]");
	}
	if((typeof a.priority !== "number") && (typeof a.priority !== "string")) {
		aPriority = 0;
	} else {
		aPriority = parseInt(a.priority);
	}
	if((typeof b.priority !== "number") && (typeof b.priority !== "string")) {
		bPriority = 0;
	} else {
		bPriority = parseInt(b.priority);
	}
	if(aPriority > bPriority) {
		return -1;
	}
	if(aPriority < bPriority) {
		return 1;
	}
	return 0;
}