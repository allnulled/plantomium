create table plant (
  id integer primary key auto_increment,
  name varchar(200) not null,
  name_scientific varchar(200) unique,
  name_popular text,
  description text,
  field_1 int,
  field_2 int,
  field_3 int,
  field_4 int,
  field_5 int
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