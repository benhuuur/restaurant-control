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
	IsAdm bit not null,
	Password varchar(MAX) not null,
	Salt varchar(200) not null,
);
go

create table Requests(
	ID int identity primary key,
	UserID int references Users(ID) not null
);
go

create table Products(
	ID int identity primary key,
	Name varchar(100) not null,
	Description varchar(150) not null,
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
	Total float not null
);
go