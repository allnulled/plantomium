create table chat_messages (
	id int primary key auto_increment,
	id_user int null,
	message varchar(500),
	created_at datetime default now(),
	foreign key (id_user) references users (id)
);