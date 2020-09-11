create table filesystem (
  id integer primary key auto_increment,
  nodetype enum('branch', 'leaf'),
  path varchar(200) not null unique,
  contents text,
  description text
);