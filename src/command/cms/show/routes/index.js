const treeRoutes = require("fs").readFileSync(process.env.PROJECT_ROOT + "/tree.routes.txt").toString();
console.log(treeRoutes);