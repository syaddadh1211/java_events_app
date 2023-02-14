---follow this file to create simple database with table and testing it in browser/
--postman, we use PostgreSQL

--Create Postgree database
CREATE DATABASE user_db;

--Create Postgree tables

create table ev_cat (
	city_id varchar(10) not null primary key,
	title varchar(20),
	description varchar(100),
	image_link varchar(100),
	created_date date
)

--Insert data
insert into ev_cat values ('sby','Surabaya Online Event','All Surabaya Online Event that you looking for',null, now())
insert into ev_cat values ('sda','Sidoarjo Online Event','All Sidoarjo Online Event that you looking for',null, now())
insert into ev_cat values ('grs','Gresik Online Event','All Gresik Online Event that you looking for',null, now())

create table event_creator (
	id BIGSERIAL not null primary key,
	name varchar(20),
	address varchar(100),
	email varchar(100) not null,
	phone varchar(20),
	description varchar(50),
	created_date date
)

insert into event_creator(name,address,email,phone,description,created_date) values ('Syaddad','Surabaya','coba@mail.com','081232223','Testing to register new event', now())

create table events (
	id varchar(20) not null primary key,
	city_id varchar(10) references ev_cat(city_id),
	title varchar(50),
	description varchar(100),
	image_link varchar(100),
	event_date timestamp,
	quota varchar(10),
	creator_id BIGINT references event_creator(id)	
)

insert into events values ('sby-machine-learning','sby','Machine Learning','Do you curious about how far ML can help us now especially chatGPT ? attend this webinar to reveal this fenomena',null, 
timestamp '2023-01-10 00:51:14','1000',1)
insert into events values ('sby-chatgpt','sby','chatGPT','This webinar focus just discussion about chatGPT',null, 
timestamp '2023-02-10 10:51:14','1000',1)

create table reg_users (
	email varchar(100) not null primary key,
	event_id varchar(20) references events(id)
)

insert into reg_users values ('coba@mail.com','sby-chatgpt')
insert into reg_users values ('test@gmail.com','sby-machine-learning')
