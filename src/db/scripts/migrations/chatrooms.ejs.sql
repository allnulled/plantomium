create table chatroom (
	id int primary key auto_increment,
	namespace varchar(100)
);
create table chatroom_participant (
	id int primary key auto_increment,
	id_user int,
	id_chatroom int,
	foreign key (id_user) references users(id),
	foreign key (id_chatroom) references chatroom(id)
);
create table chatroom_message (
	id int primary key auto_increment,
	id_user int,
	id_chatroom int,
	message varchar(500),
	foreign key (id_user) references users(id),
	foreign key (id_chatroom) references chatroom(id)
);