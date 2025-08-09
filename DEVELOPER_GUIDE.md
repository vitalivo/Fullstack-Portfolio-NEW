# 🛠️ Руководство разработчика

## 📁 Структура проекта

\`\`\`
vitaly-portfolio/
├── frontend/                 # Next.js приложение
│   ├── src/
│   │   ├── app/             # App Router страницы
│   │   ├── components/      # React компоненты
│   │   ├── lib/            # Утилиты и API функции
│   │   └── types/          # TypeScript типы
│   ├── dictionaries/       # Файлы переводов
│   ├── public/            # Статические файлы
│   └── package.json
├── backend/                # Django приложение
│   ├── apps/              # Django приложения
│   │   ├── core/         # Основные модели (Profile, Experience)
│   │   ├── skills/       # Навыки и категории
│   │   ├── portfolio/    # Проекты и технологии
│   │   ├── certificates/ # Сертификаты
│   │   ├── blog/        # Блог система
│   │   └── contacts/    # Контактная информация
│   ├── config/          # Настройки Django
│   └── requirements.txt
└── README.md
\`\`\`

## 🚀 Быстрый старт

### Требования
- Node.js 18+
- Python 3.9+
- PostgreSQL (для продакшена)

### Установка и запуск

#### Backend (Django)
\`\`\`bash
cd backend
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
\`\`\`

#### Frontend (Next.js)
\`\`\`bash
cd frontend
npm install
npm run dev
\`\`\`

## 🔧 Технологический стек

### Frontend
- **Next.js 15** - React фреймворк с App Router
- **TypeScript** - Типизация
- **Tailwind CSS** - Стилизация
- **Framer Motion** - Анимации
- **Radix UI** - UI компоненты
- **Lucide React** - Иконки

### Backend
- **Django 5.0** - Web фреймворк
- **Django REST Framework** - API
- **django-parler** - Многоязычность
- **django-cors-headers** - CORS
- **Pillow** - Обработка изображений
- **PostgreSQL** - База данных (продакшен)

## 📡 API Endpoints

### Core
- `GET /api/v1/core/profiles/` - Профиль пользователя
- `GET /api/v1/core/experiences/` - Опыт работы

### Skills
- `GET /api/v1/skills/categories/` - Категории навыков
- `GET /api/v1/skills/categories/with_skills/` - Категории с навыками

### Portfolio
- `GET /api/v1/portfolio/projects/` - Список проектов
- `GET /api/v1/portfolio/projects/{id}/` - Детали проекта
- `GET /api/v1/portfolio/projects/featured/` - Избранные проекты

### Certificates
- `GET /api/v1/certificates/certificates/` - Список сертификатов
- `GET /api/v1/certificates/certificates/{id}/` - Детали сертификата

### Blog
- `GET /api/v1/blog/posts/` - Список постов
- `GET /api/v1/blog/posts/{slug}/` - Пост по slug
- `GET /api/v1/blog/categories/` - Категории блога
- `GET /api/v1/blog/tags/` - Теги блога

### Contacts
- `GET /api/v1/contacts/info/` - Контактная информация
- `POST /api/v1/contacts/messages/` - Отправка сообщения

## 🌐 Многоязычность

### Поддерживаемые языки
- `en` - English (по умолчанию)
- `ru` - Русский
- `he` - עברית (Hebrew)

### Добавление нового языка

1. **Frontend**: Добавить в `i18n-config.ts`
\`\`\`typescript
export const i18n = {
  defaultLocale: 'en',
  locales: ['en', 'ru', 'he', 'новый_язык']
} as const
\`\`\`

2. **Backend**: Добавить в `settings.py`
```python
LANGUAGES = [
    ('en', 'English'),
    ('ru', 'Русский'),
    ('he', 'עברית'),
    ('новый_код', 'Новый язык'),
]
