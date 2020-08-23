drop database if exists plants_bd;
create database if not exists plants_bd;

use plants_bd;

drop table if exists unconfirmed_users;
drop table if exists users;
drop table if exists groups;
drop table if exists permissions;
drop table if exists sessions;
drop table if exists configuration;
drop table if exists combo_user_and_group;
drop table if exists combo_user_and_permission;
drop table if exists combo_group_and_permission;

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
  deactivation tinyint(1) default 0
);

create table groups (
  id integer primary key auto_increment,
  name varchar(200) unique
);

create table permissions (
  id integer primary key auto_increment,
  name varchar(200) unique
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
  foreign key (id_group) references groups(id)
);

create table combo_user_and_permission (
  id integer primary key auto_increment,
  id_user integer,
  id_permission integer,
  foreign key (id_user) references users(id),
  foreign key (id_permission) references permissions(id)
);

create table combo_group_and_permission (
  id integer primary key auto_increment,
  id_group integer,
  id_permission integer,
  foreign key (id_group) references groups(id),
  foreign key (id_permission) references permissions(id)
);

drop table if exists combo_trait_and_plant;
drop table if exists combo_compound_and_plant;
drop table if exists combo_localization_and_plant;
drop table if exists combo_environment_and_plant;
drop table if exists localization;
drop table if exists environment;
drop table if exists trait;
drop table if exists compound;
drop table if exists usages;
drop table if exists plant;

create table plant (
  id integer primary key auto_increment,
  name varchar(200) not null,
  name_scientific varchar(200) unique,
  name_popular text,
  description text
);
create table specimen (
  id integer primary key auto_increment,
  id_plant integer null,
  id_user integer null,
  description text,
  foreign key (id_user) references users(id)
);
create table image (
  id integer primary key auto_increment,
  id_specimen integer null,
  id_user integer null,
  description text,
  foreign key (id_user) references users(id)
);

create table trait (
  id integer primary key auto_increment,
  name varchar(1000) unique not null,
  description text not null
);

create table compound (
  id integer primary key auto_increment,
  name varchar(200) unique not null,
  referencia varchar(500),
  description text
);

create table localization (
  id integer primary key auto_increment,
  name varchar(300) unique not null,
  description text
);

create table environment (
  id integer primary key auto_increment,
  name varchar(300) unique not null,
  description text
);

create table usages (
  id integer primary key auto_increment,
  name varchar(300) unique not null,
  description text
);

create table combo_trait_and_plant (
  id integer primary key auto_increment,
  id_plant integer not null,
  id_trait integer not null,
  description text,
  foreign key (id_trait) references trait (id),
  foreign key (id_plant) references plant (id)
);

create table combo_compound_and_plant (
  id integer primary key auto_increment,
  id_plant integer not null,
  id_compound integer not null,
  percentage integer(100),
  description text,
  foreign key (id_compound) references compound (id),
  foreign key (id_plant) references plant (id)
);

create table combo_usage_and_plant (
  id integer primary key auto_increment,
  id_plant integer not null,
  id_usage integer not null,
  description text,
  foreign key (id_usage) references usages (id),
  foreign key (id_plant) references plant (id)
);

create table combo_localization_and_plant (
  id integer primary key auto_increment,
  id_plant integer not null,
  id_localization integer not null,
  description text,
  foreign key (id_localization) references localization (id),
  foreign key (id_plant) references plant (id)
);

create table combo_environment_and_plant (
  id integer primary key auto_increment,
  id_plant integer not null,
  id_environment integer not null,
  description text,
  foreign key (id_environment) references environment (id),
  foreign key (id_plant) references plant (id)
);

create table combo_image_and_plant (
  id integer primary key auto_increment,
  id_plant integer not null,
  id_image integer not null,
  description text,
  foreign key (id_image) references image (id),
  foreign key (id_plant) references plant (id)
);

create table combo_image_and_specimen (
  id integer primary key auto_increment,
  id_specimen integer not null,
  id_image integer not null,
  description text,
  foreign key (id_image) references image (id),
  foreign key (id_specimen) references specimen (id)
);

create table combo_trait_and_specimen (
  id integer primary key auto_increment,
  id_specimen integer not null,
  id_trait integer not null,
  description text,
  foreign key (id_trait) references trait (id),
  foreign key (id_specimen) references specimen (id)
);



