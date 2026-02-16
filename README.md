# Portfolio Project

A full-stack portfolio web application built using Django, React, and PostgreSQL.  
This project showcases personal projects, skills, and profile information through a REST API backend and a modern React frontend.

---

## 🚀 Tech Stack

### Backend
- Django
- Django REST Framework
- PostgreSQL
- Python

### Frontend
- React
- Axios
- CSS

### Tools
- Git & GitHub
- npm
- Virtual Environment (venv)

---

## ✨ Features

- Portfolio project showcase
- Skills management system
- REST API powered backend
- Dynamic React frontend
- Admin dashboard (Django Admin)
- PostgreSQL database integration
- Responsive user interface
- Clean modular project structure

---

## 📂 Project Structure

portfolio-project/
│
├── backend/      → Django backend API
├── frontend/     → React frontend app
├── README.md
└── requirements.txt

---
## Installation Guide

### Clone repository

git clone https://github.com/DHATSHETH-ROSHAN/Portfolio-using-django-and-react-with-rest-framework
cd portfolio

---

## Backend Setup (Django)

cd backend

Create virtual environment:

python -m venv main

Activate environment:

Windows:
venv\Scripts\activate

Mac/Linux:
source venv/bin/activate

Install dependencies:

pip install -r requirements.txt

Run migrations:

python manage.py migrate

Start backend server:

python manage.py runserver

Backend runs at:
http://127.0.0.1:8000/

---

## Frontend Setup (React)

Open new terminal:

cd frontend

Install dependencies:

npm install

Start frontend:

npm start

Frontend runs at:
http://localhost:3000/

---

## Environment Variables

Create `.env` file inside backend:

SECRET_KEY=your_secret_key
DATABASE_NAME=your_db_name
DATABASE_USER=your_user
DATABASE_PASSWORD=your_password

---

## API Endpoints

/api/projects/
/api/skills/

---

## Screenshots

![alt text](<Screenshot 2026-02-16 212136.png>) ![alt text](<Screenshot 2026-02-16 212125.png>)  ![alt text](<Screenshot 2026-02-16 212509.png>) 

---

## Author

Dhatsheth Roshan