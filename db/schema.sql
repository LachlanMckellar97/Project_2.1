userDROP DATABASE IF EXISTS planner_db;

CREATE DATABASE planner_db;

USE planner_db;

CREATE TABLE user (
  id int NOT NULL AUTO_INCREMENT,
  firstname varchar(255) NOT NULL,
  lastname varchar(255) NOT NULL,
  age integer(3) NOT NULL,
  height integer(3) NOT NULL,
  weight integer(3) NOT NULL,
  PRIMARY KEY (id)
);

insert into user (firstname, lastname, age, height , weight) values ('james', 'Wong', 30, 180, 80);

CREATE TABLE date (
  id int NOT NULL AUTO_INCREMENT,
  firstname varchar(255) NOT NULL,
  lastname varchar(255) NOT NULL,
  set_date integer(8) NOT NULL,
  interval_0400 varchar(255) DEFAULT "sleep",
  interval_0430 varchar(255) DEFAULT "sleep",
  interval_0500 varchar(255) DEFAULT "sleep",
  interval_0530 varchar(255) DEFAULT "sleep",
  interval_0600 varchar(255) DEFAULT "sleep",
  interval_0630 varchar(255) DEFAULT "sleep",
  interval_0700 varchar(255) DEFAULT "sleep",
  interval_0730 varchar(255) DEFAULT "sleep",
  interval_0800 varchar(255) DEFAULT "sleep",
  interval_0830 varchar(255) DEFAULT "sleep",
  interval_0900 varchar(255) DEFAULT "Eat",
  interval_0930 varchar(255) DEFAULT NULL,
  interval_1000 varchar(255) DEFAULT NULL,
  interval_1030 varchar(255) DEFAULT NULL,
  interval_1100 varchar(255) DEFAULT NULL,
  interval_1130 varchar(255) DEFAULT NULL,
  interval_1200 varchar(255) DEFAULT "Eat",
  interval_1230 varchar(255) DEFAULT NULL,
  interval_1300 varchar(255) DEFAULT NULL,
  interval_1330 varchar(255) DEFAULT NULL,
  interval_1400 varchar(255) DEFAULT NULL,
  interval_1430 varchar(255) DEFAULT NULL,
  interval_1500 varchar(255) DEFAULT NULL,
  interval_1530 varchar(255) DEFAULT NULL,
  interval_1600 varchar(255) DEFAULT NULL,
  interval_1630 varchar(255) DEFAULT NULL,
  interval_1700 varchar(255) DEFAULT NULL,
  interval_1730 varchar(255) DEFAULT NULL,
  interval_1800 varchar(255) DEFAULT NULL,
  interval_1830 varchar(255) DEFAULT NULL,
  interval_1900 varchar(255) DEFAULT NULL,
  interval_1930 varchar(255) DEFAULT NULL,
  interval_2000 varchar(255) DEFAULT NULL,
  interval_2030 varchar(255) DEFAULT NULL,
  interval_2100 varchar(255) DEFAULT NULL,
  interval_2130 varchar(255) DEFAULT NULL,
  interval_2200 varchar(255) DEFAULT "sleep",
  interval_2230 varchar(255) DEFAULT "sleep",
  interval_2300 varchar(255) DEFAULT "sleep",
  interval_2330 varchar(255) DEFAULT "sleep",
  PRIMARY KEY (id)
);

insert into date (firstname, lastname, set_date, interval_1100, interval_1200) values ('james', 'Wong', 26052020, "eat", "work");

CREATE TABLE Category (
category varchar(255),
activity varchar(255)
);

insert into Category (category) VALUES ("sleep");
insert into Category (category) VALUES ("eat");
insert into Category (category) VALUES ("work");
insert into Category (category, activity) VALUES ("fitness","running");


/*------------------------------PSEUDO CODE----------------------*/
/*interval_2, -- 00:30 01:00 
interval_3, -- 01:00 01:30
....
...
interval_48 --
(1,1,26/05/2020, gop running, Sleep, Go to bathroom, ..)
(1,1,27/05/2020, Party, Sleep, Go to bathroom, ..) 
Table activities
id,
name,
category
1, go running, workout
2, go riding, workout
3, go swimming, workout,
4, have dinner, eating
5, have lunch, eating.
select distinct category from activities
workout
eating
select name from activities where category = 'workout'
go riding
go running
go swimimng*/