# patrimony-mannagement

- Execute the project

```
    yarn

    yarn start
```


- DATABASE MIGRATIONS TO RUN THE APLICATION 


```
create table tb_senai(
	senai_id serial primary key,
	name varchar(100) not null,
	cep varchar(30) not null,
	unit varchar(30) not null,
	address varchar(30) not null
)

insert into tb_senai (name, cep, unit, address) values('SENAI JANDIRA', '06130090', '323-X', 'Jandira')

insert into tb_senai (name, cep, unit, address) values('SENAI Osasco', '06135493', '323-OZ', 'Osasco')


create table tb_type_patrimony(
	type_patrimony_id serial primary key,
	name varchar(100) not null
)

insert into tb_type_patrimony (name) values('Maquina')

insert into tb_type_patrimony (name) values('Laboratorio')

insert into tb_type_patrimony (name) values('Equipamento')

insert into tb_type_patrimony (name) values('Mobiliario')

 select * from tb_type_patrimony

create table tb_patrimony(
	patrimony_id serial primary key,
	type_patrimony_id int not null,
	senai_id int not null,
	name varchar(100) not null,
	quantity int not null,
		CONSTRAINT FK_TB_SENAI_TB_PATRIMONY
		foreign key(senai_id)
		references tb_senai(senai_id),
		CONSTRAINT FK_TB_TYPE_PATRIMONY_TB_PATRIMONY
		foreign key(type_patrimony_id)
		references tb_type_patrimony(type_patrimony_id)
)
```
