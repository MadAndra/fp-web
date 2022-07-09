CREATE TABLE login ( 
    id int(11) NOT NULL AUTO_INCREMENT, 
    role varchar (20) DEFAULT NULL, 
    name varchar(50) DEFAULT NULL, 
    email varchar(50) DEFAULT NULL, 
    password text DEFAULT NULL, 
    PRIMARY KEY (id) 
);

CREATE TABLE stok (
    id INT(11) NOT NULL AUTO_INCREMENT,
    tipe_mobil VARCHAR (50) DEFAULT NULL,
    harga VARCHAR (20) DEFAULT NULL,
    picture VARCHAR(200) NOT NULL,
    PRIMARY KEY (id)
);
