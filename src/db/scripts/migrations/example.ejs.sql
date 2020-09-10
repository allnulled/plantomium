create table example_process (
	id int primary key auto_increment,
	id_creator int,
	data text,
	meta text,
	status enum('started', 'continued', 'outdated'),
	created_at datetime default now(),
	foreign key (id_creator) references users(id)
);

create table example_process_transaction (
	id int primary key auto_increment,
	id_process int,
	id_transactor int,
	operation varchar(60),
	description varchar(200),
	created_at datetime default now(),
	foreign key (id_process) references example_process(id),
	foreign key (id_transactor) references users(id)
);