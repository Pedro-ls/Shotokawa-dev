# Shotokawa SERVER

## TECHS
- DJANGO -> Server
- DJANGO-NINJA -> API
- TAIWINDCSS -> Style Dashboard
- JWT -> AUTH API

#Install Project
## Install Env

- Install Python 3 e pip
- cd ./pasta_do_projeto
- python -m venv venv
- source ./venv/bin/activate # procurar como ativar o ambiente virtual com python

## Instalando dependências
- pip install -r requirements.txt

## used SQLITE
## Install DB

- python manage.py makemigrations
- python manage.py migrate

## Run project
### create superuser

- python manage.py createsuperuser

## commands running...

- npm run compress
- python manage.py runserver

# ROUTES

/admin # o super usuario criado é usado aqui
/dashboard
/v1/api/docs

END.
