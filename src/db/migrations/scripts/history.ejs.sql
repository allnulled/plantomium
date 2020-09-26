create table history_data (
  id integer primary key auto_increment,
  user_ip varchar(40),
  user_agent varchar(120),
  user_id varchar(20),
  original_table varchar(120),
  request_data text,
  data text,
  metadata text,
  description varchar(200),
  deleted_at datetime default current_timestamp
);

create table history_event (
  id integer primary key auto_increment,
  user_ip varchar(40),
  user_agent varchar(120),
  user_id varchar(20),
  original_table varchar(120),
  event varchar(120),
  data text,
  metadata text,
  description varchar(200),
  deleted_at datetime default current_timestamp
);