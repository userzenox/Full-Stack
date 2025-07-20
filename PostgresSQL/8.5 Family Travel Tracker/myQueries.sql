
--create tables person
create table person(
   id serial primary key
	first_name text
	last_name text
)

insert into person(first_name, last_name )
values ('angela', 'yu') ,('nick', 'kira')

CREATE TABLE visit (
    person_id   integer REFERENCES person(id),
    country_id  integer REFERENCES countries(id),
    PRIMARY KEY (person_id, country_id)
);

insert into visit(person_id, country_id)
values (1,3), (2,6), (1,8) , (3,3)

--main
select person_id, first_name , country_code
from visit
join person on person.id = visit.person_id
join countries on countries.id = visit.country_id
where person.id = 1