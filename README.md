# YumSnap!

## Database Setup

If you don't have Postgres on your computer run
```
brew install postgres
```
Run npm install
and then run:
```
npm install -g knex
```
Then start your database and run:
```
postgres -D /usr/local/var/postgres
```
In another terminal window:
```
createdb yumsnap
knex migrate:latest
knex seed:run
```
If the db gets effed up:
```
dropdb yumsnap
createdb yumsnap
```

Do not CTRL-C to stop Postgres
To stop your database:
```
pg_ctl -D /usr/local/var/postgres stop -s -m fast
```
Some helpful bash aliases:
```
alias fukyum='dropdb yumsnap; createdb yumsnap'
alias startyum='postgres -D /usr/local/var/postgres'
alias stopyum='pg_ctl -D /usr/local/var/postgres stop -s -m fast'
```
