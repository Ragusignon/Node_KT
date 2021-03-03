select * from users;

create table users
(
user_id int auto_increment primary key,
user_name varchar(30) not null,
gender varchar(10) not null,
phone_number varchar(15) not null,
address varchar(50) not null,
password varchar(50) not null,
blood_group varchar(5),
date_of_birth timestamp,
date_Of_registration timestamp default  current_timestamp 
); 

Alter table users add updated_info varchar(500);

create table roles
(
role_id int auto_increment primary key,
role_name varchar(30) not null,
role_descriptions varchar(300) not null,
date_Of_registration timestamp default  current_timestamp 
);

create table users_role
(
user_role_id int auto_increment primary key,
user_id int,
role_id int,
FOREIGN KEY (user_id) REFERENCES users(user_id), 
FOREIGN KEY (role_id) REFERENCES roles(role_id),
date_of_mappping timestamp default  current_timestamp 
);

insert into users (user_name, gender, phone_number, address, password, blood_group, date_of_birth) 
values ('Ragu', 'M', '9159355953', '12 SA, Jain Pebble Brooks, Thoraipakkam, Chennai', 'ragu', 'B+', '1991-04-29');
insert into users (user_name, gender, phone_number, address, password, blood_group, date_of_birth) 
values ('Riya', 'F', '9159355953', '12 SA, Jain Pebble Brooks, Thoraipakkam, Chennai', 'riya', 'B+', '1997-11-03');
insert into users (user_name, gender, phone_number, address, password, blood_group, date_of_birth) 
values ('Arun', 'M', '9159355953', '12 SA, Jain Pebble Brooks, Thoraipakkam, Chennai', 'arun', 'B+', '1997-11-03');
insert into users (user_name, gender, phone_number, address, password, blood_group, date_of_birth) 
values ('Akash', 'M', '9159355953', '12 SA, Jain Pebble Brooks, Thoraipakkam, Chennai', 'akash', 'B+', '1997-11-03');
insert into users (user_name, gender, phone_number, address, password, blood_group, date_of_birth) 
values ('Varsha', 'F', '9159355953', '12 SA, Jain Pebble Brooks, Thoraipakkam, Chennai', 'varsha', 'B+', '1997-11-03');
insert into users (user_name, gender, phone_number, address, password, blood_group, date_of_birth) 
values ('Surya', 'M', '9159355953', '12 SA, Jain Pebble Brooks, Thoraipakkam, Chennai', 'surya', 'B+', '1997-11-03');


INSERT INTO roles (role_name, role_descriptions) VALUES ('admin','Admin who has all priviledges');
INSERT INTO roles (role_name, role_descriptions) VALUES ('employee','Employee who has view access priviledges');
INSERT INTO roles (role_name, role_descriptions) VALUES ('customer','Customer who has read access priviledges');


insert into users_role (user_id, role_id) values (1,1);
insert into users_role (user_id, role_id) values (2,2);
insert into users_role (user_id, role_id) values (3,3);
insert into users_role (user_id, role_id) values (4,3);
insert into users_role (user_id, role_id) values (5,3);
insert into users_role (user_id, role_id) values (6,3);

create table categories
(
category_id int auto_increment primary key,
category_name varchar(300),
category_discriptions varchar(600),
created_timestamp timestamp default  current_timestamp,
created_user_id int, 
updated_timestamp timestamp default  current_timestamp, 
updated_user_id int,
FOREIGN KEY (created_user_id) REFERENCES users(user_id), 
FOREIGN KEY (updated_user_id) REFERENCES users(user_id) 
);

create table product_details 
(
product_detail_id int auto_increment primary key,
product_name varchar(300),
product_descriptions varchar(600),
unit_price int,
brand_name varchar(100),
category_id int,
created_timestamp timestamp default  current_timestamp,
created_user_id int, 
updated_timestamp timestamp default  current_timestamp, 
updated_user_id int,
FOREIGN KEY (category_id) REFERENCES categories(category_id), 
FOREIGN KEY (created_user_id) REFERENCES users(user_id), 
FOREIGN KEY (updated_user_id) REFERENCES users(user_id)
);

create table product_inventory
(
product_inventory_id int auto_increment primary key,
product_count int,
product_detail_id int ,
created_timestamp timestamp default  current_timestamp,
created_user_id int, 
updated_timestamp timestamp default  current_timestamp, 
updated_user_id int,
FOREIGN KEY (created_user_id) REFERENCES users(user_id), 
FOREIGN KEY (updated_user_id) REFERENCES users(user_id), 
FOREIGN KEY (product_detail_id) REFERENCES product_details(product_detail_id)
);

create table product_discount
(
product_discount_id int auto_increment primary key,
product_detail_id int,
discount_precentage int,
expire_date_timestamp timestamp,
created_timestamp timestamp default  current_timestamp,
created_user_id int, 
updated_timestamp timestamp default  current_timestamp, 
updated_user_id int,
FOREIGN KEY (created_user_id) REFERENCES users(user_id), 
FOREIGN KEY (updated_user_id) REFERENCES users(user_id),
FOREIGN KEY (product_detail_id) REFERENCES product_details(product_detail_id) 
);

create table product_review
(
product_review_id int auto_increment primary key,
review_count int,
review_comments varchar(600),
product_detail_id int,
customer_id int,
created_timestamp timestamp default current_timestamp, 
FOREIGN KEY (product_detail_id) REFERENCES product_details(product_detail_id),
FOREIGN KEY (customer_id) REFERENCES users(user_id)  
);

create table product_summary 
(
product_summary_id int auto_increment primary key,
product_detail_id int, 
unit_price int,
inventory_count int,
average_customer_rating int,
category_id int,
discount_percentage int,
FOREIGN KEY (product_detail_id) REFERENCES product_details(product_detail_id)
);

create table user_cart
(
user_card_id int auto_increment primary key,
user_id int,
product_detail_id int,
unit_count int,
unit_price int,
created_timestamp timestamp default  current_timestamp,
updated_timestamp timestamp default  current_timestamp, 
updated_user_id int,
FOREIGN KEY (updated_user_id) REFERENCES users(user_id),
foreign key (product_detail_id) references product_details(product_detail_id),
foreign key (user_id) references users(user_id)
);

create table order_summary
(
order_id int auto_increment primary key,
user_id int,
order_status varchar(100),
payment_mode varchar(100),
total_price int,
delivery_date timestamp,
shipping_address varchar(600),
billing_address varchar(600),
gift_wrap boolean,
orderded_date timestamp,
updated_timestamp timestamp default  current_timestamp, 
updated_user_id int,
FOREIGN KEY (updated_user_id) REFERENCES users(user_id),
foreign key (user_id) references users(user_id)
);

create table order_transactions
(
order_transaction_id int auto_increment primary key,
order_id int,
product_detail_id int,
unit_count int,
unit_price int,
created_timestamp timestamp default  current_timestamp,
created_user_id int, 
updated_timestamp timestamp default  current_timestamp, 
updated_user_id int,
FOREIGN KEY (created_user_id) REFERENCES users(user_id), 
FOREIGN KEY (updated_user_id) REFERENCES users(user_id),
foreign key (product_detail_id) references product_details(product_detail_id),
foreign key (order_id) references order_summary(order_id)
);



create table users_multiple_column
(
user_id int auto_increment,
user_type varchar(3),
year int default 0,
user_name varchar(30) not null,
gender varchar(10) not null,
phone_number varchar(15) not null,
address varchar(50) not null,
password varchar(50) not null,
blood_group varchar(5),
date_of_birth timestamp,
date_Of_registration timestamp default  current_timestamp,
primary key(user_id, user_type, year) 
); 


CREATE TRIGGER year_trigger BEFORE INSERT ON users_multiple_column 
FOR EACH ROW SET NEW.year = date_format((NOW()), '%y');

insert into users_multiple_column (user_type, user_name, gender, phone_number, address, password, blood_group, date_of_birth) 
values ('USR', 'Ragu', 'M', '9159355953', '12 SA, Jain Pebble Brooks, Thoraipakkam, Chennai', 'ragu', 'B+', '1991-04-29');

insert into users_multiple_column (user_type, user_name, gender, phone_number, address, password, blood_group, date_of_birth) 
values ('CUS', 'Riya', 'F', '9159355953', '12 SA, Jain Pebble Brooks, Thoraipakkam, Chennai', 'riya', 'B+', '1991-04-29');

insert into users_multiple_column (user_type, user_name, gender, phone_number, address, password, blood_group, date_of_birth) 
values ('CUS', 'Arun', 'M', '9159355953', '12 SA, Jain Pebble Brooks, Thoraipakkam, Chennai', 'arun', 'B+', '1991-04-29');

insert into users_multiple_column (user_type, user_name, gender, phone_number, address, password, blood_group, date_of_birth) 
values ('CUS', 'Akash', 'M', '9159355953', '12 SA, Jain Pebble Brooks, Thoraipakkam, Chennai', 'arun', 'B+', '1991-04-29');

drop trigger year_trigger;

SELECT * FROM shoppingdb.users_multiple_column;

-- CUS216  ->
select * from users_multiple_column where user_id = '6' and year ='21' and user_type ='CUS'