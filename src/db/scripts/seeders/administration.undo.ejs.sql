DELETE FROM combo_user_and_permission WHERE id_user = 1;
DELETE FROM combo_user_and_group WHERE id_user = 1;
DELETE FROM combo_group_and_permission WHERE id_group = 1;
DELETE FROM users WHERE name = 'administrator';
DELETE FROM groups WHERE name = 'administration';
DELETE FROM permissions WHERE name = 'to administrate';