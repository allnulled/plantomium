const { expect } = require("chai");
const cms = require(process.env.PROJECT_ROOT + "/src/cms.js");
const axios = require("axios");

describe("AUTH:ONLY Test", function() {

	this.timeout(1000 * 5);

	const skippable = require(process.env.PROJECT_ROOT + "/test/skippable.js");

	before(function() {
		//
	});

	after(function() {
		// 
	});

	skippable("can use actor only", function(done) {
		
		done();
	});

	skippable("can use middleware only", async function() {
		try {
			const app = cms.app;
			const answer = (request, response) => response.json({ msg: "ok" });
			app.get("/0", cms.auth.middlewares.onlyAuthenticated(), answer);
			app.get("/1", cms.auth.middlewares.only([["users", ["administrator"]]]), answer);
			app.get("/2", cms.auth.middlewares.only([["groups", ["administration"]]]), answer);
			app.get("/3", cms.auth.middlewares.only([["permissions", ["to administrate"]]]), answer);
			app.get("/4", cms.auth.middlewares.only([["permissions", ["to fly over da rainbow"]]]), answer);
			app.get("/5", cms.auth.middlewares.onlyUsers(["administrator"]), answer);
			app.get("/6", cms.auth.middlewares.onlyGroups(["administration"]), answer);
			app.get("/7", cms.auth.middlewares.onlyPermissions(["to administrate"]), answer);
			const baseUrl = process.env.APP_URL + ":" + process.env.APP_PORT;
			const loginResponse = await axios.post(baseUrl + "/auth/v1/login", { name: "administrator", password: "admin123" });
			const data = loginResponse.data;
			const session_token = data.data.session_token;
			const prepackedOptions = {
				headers: {
					authorization: "Bearer: " + session_token
				}
			};
			const { data: resp0 } = await axios.get(baseUrl + "/0", prepackedOptions);
			const { data: resp1 } = await axios.get(baseUrl + "/1", prepackedOptions);
			const { data: resp2bad } = await axios.get(baseUrl + "/2", {});
			const { data: resp2 } = await axios.get(baseUrl + "/2", prepackedOptions);
			const { data: resp3 } = await axios.get(baseUrl + "/3", prepackedOptions);
			const { data: resp4 } = await axios.get(baseUrl + "/4", prepackedOptions);
			const { data: resp5 } = await axios.get(baseUrl + "/5", prepackedOptions);
			const { data: resp6 } = await axios.get(baseUrl + "/6", prepackedOptions);
			const { data: resp7 } = await axios.get(baseUrl + "/7", prepackedOptions);

			expect(resp0).to.deep.equal({msg: "ok"});
			expect(resp1).to.deep.equal({msg: "ok"});
			expect(resp2).to.deep.equal({msg: "ok"});
			expect(resp2bad.error.message).to.equal('Unauthorized resource: Could not identify user due to a lack of credentials [ERR:5000]');
			expect(resp3).to.deep.equal({msg: "ok"});
			expect(resp4.error.message).to.equal('Unauthorized resource: this user is not allowed to access the specified resource [ERR:814]');
			expect(resp5).to.deep.equal({msg: "ok"});
			expect(resp6).to.deep.equal({msg: "ok"});
			expect(resp7).to.deep.equal({msg: "ok"});
			
		} catch(error) {
			LL(error);
			throw error;
		}
	});

});