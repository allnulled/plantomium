<%
const cms = require(process.env.PROJECT_ROOT + "/src/cms.js");
const encPassword = await cms.utils.encryptPassword("admin123");
const sqlString = require("sqlstring");
%>
INSERT INTO users (
	name,
	password,
	full_name, 
	email,
	recovery_token,
	profile_picture
) VALUES (
	'administrator',
	<%-sqlString.escape(encPassword)%>,
	'Administrator',
	'<%-process.env.EMAIL_USER%>',
	NULL,
	NULL
);
INSERT INTO groups (
	name
) VALUES (
	'administration'
);
INSERT INTO permissions (
	name
) VALUES (
	'to administrate'
);
INSERT INTO combo_user_and_group (
	id_user,
	id_group
) VALUES (
	1,
	1
);
INSERT INTO combo_group_and_permission (
	id_group,
	id_permission
) VALUES (
	1,
	1
);