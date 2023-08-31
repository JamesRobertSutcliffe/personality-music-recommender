FROM postgres:13

COPY ./scripts/update_pg_hba.sh /docker-entrypoint-initdb.d/

ENV POSTGRES_USER testuser 
ENV POSTGRES_PASSWORD qwerty
ENV POSTGRES_DB testdb
