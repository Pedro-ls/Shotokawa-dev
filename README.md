

<img align="center" src="https://shotokawa.com.br/static/Shotokawa/logo_name.png" />

<h1 align="center">Shotokawa Comics, Backend</h1>

<p align="center">
  <img align="center" src="https://img.shields.io/badge/python-darkblue?style=for-the-badge&logo=python&logoColor=yellow" />
  <img align="center" src="https://img.shields.io/badge/django-white?style=for-the-badge&logo=django&logoColor=darkgreen" alt="Bootstrap" />
  <img align="center" src="https://img.shields.io/badge/Swagger-green?style=for-the-badge&logo=swagger&logoColor=white" />
  <img align="center" src="https://img.shields.io/badge/Tailwindcss-blue?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Bootstrap" />

  <img align="center" src="https://img.shields.io/badge/Javascript-yellow?style=for-the-badge&logo=javascript&logoColor=black" />
  <img align="center" src="https://img.shields.io/badge/Jquery-blue?style=for-the-badge&logo=jquery&logoColor=black" />
</p>

<p align="center">
   <img src="http://img.shields.io/static/v1?label=STATUS&message=%20EM%20andamento&color=yellow&style=for-the-badge" />
</p>

## Tecnologias usadas
- DJANGO -> Server
- DJANGO-NINJA -> API
- TAIWINDCSS -> Style Dashboard
- JWT -> AUTH API

# Rotas principais

- /admin # o super usuario criado é usado aqui
- /dashboard
- /v1/api/docs

# Instalação no Windows

## Para baixar o python
- Entre no site https://www.python.org/downloads/windows/

## Baixando repositorio
### Baixe o Git
- https://github.com/git-for-windows/git/releases/download/v2.43.0.windows.1/Git-2.43.0-64-bit.exe
### Clone o repositorio
- Entre em uma pasta no cmd
- clone o repositorio com o comando abaixo 
- ` git clone https://github.com/Pedro-ls/Shotokawa-dev.git `
## Criando ambiente virtual
- fora da pasta criada pelo git
- digite o comando abaixo
- ` python -m venv venv `
- Para ativar o ambiente criado
- ` .\venv\Scripts\activate.bat ` 
## Instalando dependências
- Entre na pasta criada pelo git
- Instale as dependencias do python com o comando abaixo
- `pip install -r requirements.txt`
- Depois instale as dependencias do javascript
- `npm install `
## Rodando migrações
- Digite os comandos abaixo
- `python manage.py makemigrations `
- `python manage.py migrate `
## Crie um super usuario

- Digite o comando abaixo
- `python manage.py createsuperuser`
- Ele vai fazer uma serie de perguntas é só responder, como username, email e senha

- com ele você vai ter acesso ao /admin

## Rode o servidor
- crie uma pasta chamada "media" na raiz do projeto baixado
- python manage.py runserver

# Instalando projeto no Linux

# Inicialmente

- Instale o Python 3 e o pip
- cd ./pasta_do_projeto
- python -m venv venv
- source ./venv/bin/activate # procurar como ativar o ambiente virtual com python

## Instalando dependências
- pip install -r requirements.txt
- npm install

## Rodando migrações do banco de dados

- python manage.py makemigrations
- python manage.py migrate

## Rodando Projeto
### Criando super usuário

- python manage.py createsuperuser

## Comandos para funcionar o servidor django...

- npm run compress
- python manage.py runserver

# Maked by Pedro Henrique da Silva
