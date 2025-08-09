# Vitaliy Voloshyn - Portfolio

Multilingual portfolio website built with Next.js and Django.

## 🚀 Features

- **Multilingual Support**: English, Russian, Hebrew
- **Modern Design**: Responsive design with Tailwind CSS
- **Full-Stack**: Next.js frontend + Django REST API backend
- **Dynamic Content**: Admin panel for content management
- **SEO Optimized**: Meta tags and structured data

## 🛠 Tech Stack

### Frontend
- Next.js 15
- TypeScript
- Tailwind CSS
- Framer Motion
- Radix UI

### Backend
- Django 5.1
- Django REST Framework
- PostgreSQL
- Django Parler (i18n)

## 📁 Project Structure

\`\`\`
vitaly-portfolio/
├── frontend/          # Next.js application
│   ├── src/
│   ├── public/
│   └── package.json
├── backend/           # Django application
│   ├── apps/
│   ├── portfolio_backend/
│   └── requirements.txt
└── README.md
\`\`\`

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- Python 3.11+
- PostgreSQL

### Installation

1. Clone the repository:
\`\`\`bash
git clone https://github.com/yourusername/vitaly-portfolio.git
cd vitaly-portfolio
\`\`\`

2. Setup Backend:
\`\`\`bash
cd backend
pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
\`\`\`

3. Setup Frontend:
\`\`\`bash
cd frontend
npm install
npm run dev
\`\`\`

## 🌐 Deployment

- **Frontend**: Deployed on Vercel
- **Backend**: Deployed on Railway
- **Database**: PostgreSQL on Railway

## 📧 Contact

- **Email**: vitaliy@example.com
- **LinkedIn**: [linkedin.com/in/vitaliy-voloshyn](https://linkedin.com/in/vitaliy-voloshyn)
- **GitHub**: [github.com/vitalivo](https://github.com/vitalivo)

## 📄 License

This project is licensed under the MIT License.
