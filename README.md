# Sbox Store
sandbox marketplace web application using django/react.

## Development Setup
- Clone project
- Install latest python, npm, nodejs, docker

### Docker Environment
- Create environment files: `touch sboxstore/.env sboxstore/.env.db`
- .env:
```
SECRET_KEY="my_secret_key"
DEBUG=1
ALLOWED_HOSTS=localhost 127.0.0.1 [::1]

SQL_ENGINE=django.db.backends.postgresql
SQL_DATABASE=dbname
SQL_USER=dbuse
SQL_PASSWORD=dbpass
SQL_HOST=db
SQL_PORT=5432

DATABASE=postgres
```
- .env.db:
```
POSTGRES_USER=dbuser
POSTGRES_PASSWORD=dbpass
POSTGRES_DB=dbname
```

### Backend
- Install pip `python3 -m pip install --upgrade pip`
- Install virtualenv `pip install --upgrade virtualenv`
- Create python environment `virtualenv sboxstore/backend/.sboxenv`
- Source into python environment `source sboxstore/backend/.sboxenv`
- Install requirements `pip install -r sboxstore/backend/requirements.txt`

### Frontend
