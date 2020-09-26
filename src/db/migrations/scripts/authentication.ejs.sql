create table unconfirmed_users (
  id integer primary key auto_increment,
  name varchar(200) unique,
  password varchar(200),
  full_name varchar(400),
  email varchar(300) unique,
  confirmation_token varchar(200) unique
);

create table users (
  id integer primary key auto_increment,
  name varchar(200) not null unique,
  password varchar(200) not null,
  full_name varchar(400) not null,
  email varchar(300) not null unique,
  recovery_token varchar(400),
  deactivation tinyint(1) default 0,
  profile_picture varchar(400) default null
);

create table groups (
  id integer primary key auto_increment,
  name varchar(200) unique,
  description varchar(500) default null
);

create table permissions (
  id integer primary key auto_increment,
  name varchar(200) unique,
  description varchar(500) default null
);

create table sessions (
  id integer primary key auto_increment,
  id_user integer,
  session_token varchar(200) unique,
  refresh_token varchar(200) unique,
  foreign key (id_user) references users(id)
);

create table configuration (
  id integer primary key auto_increment,
  id_user integer not null,
  aspect varchar(600) not null,
  value text,
  foreign key (id_user) references users (id),
  unique key one_aspect_por_user (id_user, aspect)
);

create table combo_user_and_group (
  id integer primary key auto_increment,
  id_user integer,
  id_group integer,
  foreign key (id_user) references users(id),
  foreign key (id_group) references groups(id),
  unique key `unique_user_and_group` (`id_user`,`id_group`)
);

create table combo_user_and_permission (
  id integer primary key auto_increment,
  id_user integer,
  id_permission integer,
  foreign key (id_user) references users(id),
  foreign key (id_permission) references permissions(id),
  unique key `unique_user_and_permission` (`id_user`,`id_permission`)
);

create table combo_group_and_permission (
  id integer primary key auto_increment,
  id_group integer,
  id_permission integer,
  foreign key (id_group) references groups(id),
  foreign key (id_permission) references permissions(id),
  unique key `unique_group_and_permission` (`id_group`,`id_permission`)
);