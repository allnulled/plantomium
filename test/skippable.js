module.exports = (process.env.TEST_EVERYTHING === "true")? it : it.skip;