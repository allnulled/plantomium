const asynchandler = require("@allnulled/asynchandler");
const nodemailer = require("nodemailer");
const Agent = require(__dirname + "/../agent.js");

class AdministratorBaseAgent extends Agent {

	static get SETTINGS() {
		return {
			service: "gmail",
			auth: {
				user: process.env.EMAIL_USER,
				pass: process.env.EMAIL_PASSWORD,
			}
		}
	}

	onPrepare(parameters) {
		const cms = require(process.env.PROJECT_ROOT + "/src/cms.js");
		cms.utils.trace("email.agents.base.administrator.onPrepare");
		parameters.transporter = nodemailer.createTransport(this.settings);
	}

	onSend(parameters) {
		const cms = require(process.env.PROJECT_ROOT + "/src/cms.js");
		cms.utils.trace("email.agents.base.administrator.onSend");
		return new Promise(function(ok, fail) {
			parameters.transporter.sendMail(parameters.parameters, asynchandler(ok, fail));
		}).then(data => {
			parameters.data = data;
			return data;
		});
	}

	onSent(parameters) {
		const cms = require(process.env.PROJECT_ROOT + "/src/cms.js");
		cms.utils.trace("email.agents.base.administrator.onSent");
	}

}

module.exports = AdministratorBaseAgent;