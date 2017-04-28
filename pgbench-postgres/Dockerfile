FROM postgres:9.6.2
ENV PG_MAJOR 9.6
RUN echo 'deb http://apt.postgresql.org/pub/repos/apt/ jessie-pgdg main' $PG_MAJOR > /etc/apt/sources.list.d/pgdg.list
RUN apt-get update
RUN apt-get install -y postgresql-contrib
COPY ./postgresql.conf /etc/postgresql/postgresql.conf
CMD ["postgres", "-c", "config_file=/etc/postgresql/postgresql.conf"]