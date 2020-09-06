INSERT INTO users (
	name,
	password,
	full_name, 
	email,
	recovery_token,
	profile_picture
) VALUES (
	'administrator',
	'admin123',
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