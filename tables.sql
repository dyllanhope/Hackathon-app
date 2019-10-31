create table beggars(
    id serial not null primary key,
    location text not null,
    count int not null,
    reporter text not null,
    help boolean not null,
    information text
);
