git clone https://github.com/Pedro-ls/Shotokawa-dev.git

python -m venv venv

echo "ativando ambiente virtual"

.\venv\Scripts\activate.bat

echo "Instalando dependências"

pip install -r .\Shotokawa-dev\requirements.txt
cd Shotokawa-dev
npm install
cd ..

echo "Fazendo banco de dados"
python manage.py makemigrations
python manage.py migrate



