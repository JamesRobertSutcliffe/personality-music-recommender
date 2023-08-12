```
title: Creating .env file from Neon tech db url 
keywords: #db #postgressql #provider #env
```
The decision was taken to host the PostgreSQL database on neon.tech due to their provision of a generous free tier. Considering our project's use of TypeScript, there arose a requirement to employ 'pg' for interfacing with the database.

Here, you'll find a breakdown of the Neon.tech URL and guidance on obtaining the necessary values for the .env variables, which are essential for establishing a connection to the database.

## URL breakdown
```
postgres://sally::n0zCWZoUSN5I@ep-cold-poetry-404091.us-east-2.aws.neon.tech/neondb
             ^              ^       ^                                         ^
             |- <DB_USER>   |       |- <DB_HOST>                              |- <DB_NAME>
                            |- <DB_PASSWORD>
```

## .env variables
```
DB_USER=sally
DB_HOST=ep-cold-poetry-404091.us-east-2.aws.neon.tech
DB_NAME=neondb
DB_PASSWORD=n0zCWZoUSN5I
DB_PORT=5432
```
The default port for PostgresSQL is 5432.

### References
https://neon.tech/docs/connect/connect-postgres-gui
