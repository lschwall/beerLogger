create table beerlogger

create table 'beer' (
    "id" SERIAL PRIMARY KEY
    "beer_name" VARCHAR(255)
    "brewery_name" VARCHAR(255)
    "review" VARCHAR(1000)
    "score" INTEGER
    "image" VARCHAR(1000)
)

create table 'users' (
    "id" SERIAL PRIMARY KEY
    "user_name" VARCHAR(255)
    "user_password" VARCHAR(1000)
    "email" VARCHAR(255)
)