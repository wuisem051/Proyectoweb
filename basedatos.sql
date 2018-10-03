drop database if exists basedatosmaster;
create database basedatosmaster;
use basedatosmaster;

create table Usuarios
(
	password int not null,
	nombre_usuario varchar(50)
)