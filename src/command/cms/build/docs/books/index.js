const fs = require("fs");
const path = require("path");
const cms = require(process.env.PROJECT_ROOT + "/src/cms.js");
cms.utils.trace("cms.command.cms.build.docs.books");

const booksPath = process.env.PROJECT_ROOT + "/docs/books";
const books = fs.readdirSync(booksPath);

const getIndexation = function(base, chapter) {
	return base + (base === "" ? "" : ".") + chapter;
}


for(let indexBooks=0; indexBooks < books.length; indexBooks++) {
	let bookIndexationData = {};
	const anchorKeys = {};
	const toAnchor = function(str) {
		let key = str.toLowerCase()
			.replace(/[^A-Za-z0-9\- ]/g, "")
			.replace(/ /g, "_");
		if(key in anchorKeys) {
			let notFound = true;
			let index = 0;
			while(notFound) {
				index++;
				const keyTmp = key + "-" + index;
				if(!(keyTmp in anchorKeys)) {
					key = keyTmp;
				}
			}
		}
		anchorKeys[key] = true;
		return key;
	}
	const extractPages = function(dir, indexation = "") {
		cms.utils.debug("extracting pages from: " + dir.replace(process.env.PROJECT_ROOT, ""));
		let output = "";
		const indexPath = path.resolve(dir, "index.md");
		const hasIndex = fs.existsSync(indexPath);
		if(hasIndex) {
			const indexContents = fs.readFileSync(indexPath).toString();
			output += indexContents + "\n\n";
		}
		const innerNodes = fs.readdirSync(dir);
		for(let indexNodes=0; indexNodes < innerNodes.length; indexNodes++) {
			const node = path.resolve(dir, innerNodes[indexNodes]);
			const nodeName = path.basename(node).replace(/^[0-9]+\.?/g, "")
			const isDirectory = fs.lstatSync(node).isDirectory();
			if(isDirectory) {
				const nodeIndexation = getIndexation(indexation, indexNodes+1);
				const nodeContents = extractPages(node, nodeIndexation);
				output += nodeContents;
				const nodeTitleMatches = nodeContents.matchAll(/^[\n\t\r ]*(\#+)[ ]*([^\n]+)/g).next().value;
				const nodeTitle = nodeTitleMatches ? nodeTitleMatches[2] : nodeName;
				const nodeLink = nodeTitleMatches ? toAnchor(nodeTitle) : nodeName;
				bookIndexationData[nodeIndexation] = {
					index: nodeIndexation,
					title: nodeTitle,
					name: nodeLink,
				};
			}
		}
		return output;
	}
	const bookName = books[indexBooks];
	const bookPath = path.resolve(booksPath, bookName);
	const bookInnerContents = extractPages(bookPath);
	const bookIndexation = Object.keys(bookIndexationData).sort(function(a,b) {
		const ases = a.split(".");
		const bses = b.split(".");
		let index = -1;
		while(true) {
			index++;
			if(!(index in ases)) {
				return 1;
			}
			if(!(index in bses)) {
				return 1;
			}
			const a = parseInt(ases[index]);
			const b = parseInt(bses[index]);
			if(a < b) {
				return -1;
			} else if(a > b) {
				return 1;
			}
		}
	}).reduce((output, nodeKey) => {
		const node = bookIndexationData[nodeKey];
		const titleAnchor = node.title
			.replace(/^\<\@ *\- *\_\(/g, "<@-cms.utils.toAnchor(_(")
			.replace(/\;* *\@\>$/g, ");@>");
		output += " - [" + node.index + ". " + node.title + "](#" + titleAnchor + ")\n";
		return output;
	}, "");
	const bookInnerStart = "# <@-_(" + JSON.stringify(bookName.replace(/\.md$/g, "").toLowerCase()) + ");@>\n\n# <@-_('index')@>\n\n" + bookIndexation + "\n\n";
	const bookContents = bookInnerStart + bookInnerContents;
	const bookOutputPath = process.env.PROJECT_ROOT + "/docs/templates/" + bookName;
	cms.utils.debug("extracting book to:    " + bookOutputPath.replace(process.env.PROJECT_ROOT, ""))
	fs.writeFileSync(bookOutputPath, bookContents, "utf8");
}