use master
go

if exists(select * from.sys.databases where name = 'restaurant')
	drop database restaurant

create database restaurant
go

use restaurant
go

create table Images(
	ID int identity primary key,
	Picture varbinary(MAX) not null
);
go

create table Users(
	ID int identity primary key,
	Name varchar(100) not null,
	Email varchar(100) not null,
	Cpf varchar(20) not null,
	IsAdm bit not null,
	Password varchar(MAX) not null,
	Salt varchar(200) not null,
);
go

create table Requests(
	ID int identity primary key,
	UserID int references Users(ID) not null,
	Total float not null,
	IsRedy bit not null,
	IsDelivered bit not null
);
go

create table Products(
	ID int identity primary key,
	Name varchar(100) not null,
	Description varchar(150) not null,
	Type int not null,
	Price float not null,
	OffersPrice float,
	IsOffers bit not null,
	Picture int references Images(ID) not null
);
go

create table ProductsRequests(
	ID int identity primary key,
	ProductID int references Products(ID) not null,
	RequestID int references Requests(ID) not null,
	Quantity int not null,
);
go

-- .\createModel.ps1 CT-C-001P5\SQLEXPRESS restaurant   

-- use master 
-- go
-- use restaurant
-- go
-- INSERT INTO Users (Name, Email, Cpf, IsAdm, Password, Salt)
-- VALUES ('Benhur Feld', 'benhurfeld@gmail.com', '10100272983', 1, 'ehKTRxz8cujBzOmJHfjKZjpkP9M8za3nBF/y2mpWIqE=', 'gYm4Oz/UEEWVzpKE9uGZVWp5V3xvOZxf');