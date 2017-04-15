# k8s-load-test

This application is meant to be deployed on top of Deis Workflow. It also assumes that a postgres database is installed on the same cluster, has a table `employee`, with a million records, and that these two variables available in the environment: `PG_HOST`, `PG_HOST`, the host and password of the postgres database.

For convenience, this repository includes a sqldump of the database which ccan be used to create the table and restore the content.