CREATE TABLE login ( 
    id int(11) NOT NULL AUTO_INCREMENT, 
    role varchar (20) DEFAULT NULL, 
    name varchar(50) DEFAULT NULL, 
    email varchar(50) DEFAULT NULL, 
    password text DEFAULT NULL, 
    PRIMARY KEY (id) 
);