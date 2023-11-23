# Shotokawa SERVER

# Install in Windows

## para baixar o python
- Entre no site https://www.python.org/downloads/windows/

## Baixando repositorio
### Baixe o Git
- https://github.com/git-for-windows/git/releases/download/v2.43.0.windows.1/Git-2.43.0-64-bit.exe
### Clone o repositorio
- Entre em uma pasta no cmd
- clone o repositorio com o comando abaixo 
` git clone https://github.com/Pedro-ls/Shotokawa-dev.git `
## Criando ambiente virtual
- fora da pasta criada pelo git
- digite o comando abaixo
` python -m venv venv `
- Para ativar o ambiente criado
` .\venv\Scripts\activate.bat ` 
## Instalando dependências
- Entre na pasta criada pelo git
- Instale as dependencias do python com o comando abaixo
` pip install -r requirements.txt`
- Depois instale as dependencias do javascript
` npm install `
## Rodando migrações
- Digite os comandos abaixo
` python manage.py makemigrations ``
` python manage.py migrate `
## crie um super usuario

- Digite o comando abaixo
`python manage.py createsuperuser`
- Ele vai fazer uma serie de perguntas é só responder, como username, email e senha

- com ele você vai ter acesso ao /admin

## Rode o servidor
python manage.py runserver




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
