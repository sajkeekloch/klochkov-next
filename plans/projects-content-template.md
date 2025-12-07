# Шаблон контента для проектов

## Дата создания: 24.11.2025

---

## Обзор

Этот документ описывает структуру и формат MDX файлов для описания проектов в портфолио. Каждый проект должен иметь две версии: русскую и английскую.

**Структура папок:**
```
src/content/projects/
├── ru/                    # Русские версии проектов
│   ├── easydocs.mdx
│   ├── easydocs-app.mdx
│   ├── total-research.mdx
│   └── portfolio.mdx
└── en/                    # Английские версии проектов
    ├── easydocs.mdx
    ├── easydocs-app.mdx
    ├── total-research.mdx
    └── portfolio.mdx
```

---

## Структура MDX файла

Каждый MDX файл состоит из двух частей:

### 1. Frontmatter (метаданные)
YAML блок в начале файла, содержащий метаданные проекта.

### 2. Контент (описание)
Markdown контент с описанием проекта.

---

## Описание полей Frontmatter

```yaml
---
id: "уникальный-идентификатор"        # ID проекта (одинаковый для всех языков)
title: "Название проекта"             # Краткое название
subtitle: "Подзаголовок проекта"      # Краткое описание одной строкой
technologies:                          # Массив используемых технологий
  - "React"
  - "TypeScript"
  - "Node.js"
links:                                 # Ссылки на проект
  website: "https://example.com"       # Ссылка на сайт (опционально)
  github: "https://github.com/..."     # Ссылка на GitHub (опционально)
backgroundColor: "#14A5EB"             # Цвет фона слайда (hex или rgb)
order: 1                               # Порядок отображения (меньше = раньше)
featured: true                         # Выделенный проект (опционально)
startDate: "2023-01"                   # Дата начала проекта (опционально)
endDate: "2023-12"                     # Дата окончания (опционально, "present" для текущих)
---
```

### Обязательные поля:
- `id` - уникальный идентификатор (используется для связи языковых версий)
- `title` - название проекта
- `subtitle` - краткое описание
- `technologies` - массив технологий
- `backgroundColor` - цвет фона слайда
- `order` - порядок отображения

### Опциональные поля:
- `links.website` - ссылка на работающий проект
- `links.github` - ссылка на репозиторий
- `featured` - флаг для выделения важного проекта
- `startDate` - когда начали работать над проектом
- `endDate` - когда закончили (или "present" если в работе)

---

## Шаблон MDX файла

### Русская версия (`src/content/projects/ru/project-name.mdx`)

```mdx
---
id: "project-id"
title: "Название проекта"
subtitle: "Краткое описание проекта одной строкой"
technologies:
  - "React"
  - "TypeScript"
  - "Node.js"
  - "MongoDB"
links:
  website: "https://example.com"
  github: "https://github.com/username/repo"
backgroundColor: "#14A5EB"
order: 1
featured: true
startDate: "2023-01"
endDate: "present"
---

## О проекте

Подробное описание проекта. Что это за проект, какую проблему он решает, для кого предназначен.

## Моя роль

Опишите вашу роль в проекте:
- Что вы разрабатывали
- Какие задачи решали
- С какой командой работали

## Ключевые особенности

- **Особенность 1**: Описание первой особенности
- **Особенность 2**: Описание второй особенности
- **Особенность 3**: Описание третьей особенности

## Технические детали

Подробности технической реализации:
- Архитектура приложения
- Использованные библиотеки и фреймворки
- Интересные технические решения

## Результаты

Какие результаты были достигнуты:
- Количество пользователей
- Улучшение метрик
- Отзывы клиентов
- Достижения проекта
```

---

### Английская версия (`src/content/projects/en/project-name.mdx`)

```mdx
---
id: "project-id"
title: "Project Name"
subtitle: "Brief project description in one line"
technologies:
  - "React"
  - "TypeScript"
  - "Node.js"
  - "MongoDB"
links:
  website: "https://example.com"
  github: "https://github.com/username/repo"
backgroundColor: "#14A5EB"
order: 1
featured: true
startDate: "2023-01"
endDate: "present"
---

## About the Project

Detailed project description. What is this project about, what problem does it solve, who is it for.

## My Role

Describe your role in the project:
- What you developed
- What problems you solved
- What team you worked with

## Key Features

- **Feature 1**: Description of the first feature
- **Feature 2**: Description of the second feature
- **Feature 3**: Description of the third feature

## Technical Details

Technical implementation details:
- Application architecture
- Used libraries and frameworks
- Interesting technical solutions

## Results

What results were achieved:
- Number of users
- Metrics improvement
- Client feedback
- Project achievements
```

---

## Текущие проекты для переноса

Вот текущие проекты из `ProjectsList.tsx`, которые нужно перенести в MDX формат:

### 1. EasyDocs

**Русская версия (`src/content/projects/ru/easydocs.mdx`):**

```mdx
---
id: "easydocs"
title: "EasyDocs"
subtitle: "Электронная платформа управления документами"
technologies:
  - "React"
  - "TypeScript"
  - "effector"
  - "REST API"
links:
  website: "https://www.easydocs.ru"
  github: ""
backgroundColor: "#14A5EB"
order: 1
featured: true
---

## О проекте

Электронная платформа управления документами для бизнеса. Позволяет создавать, хранить, управлять и обмениваться документами в безопасной среде.

## Моя роль

Frontend разработчик в команде. Разработка пользовательского интерфейса, интеграция с backend API, оптимизация производительности.

## Ключевые особенности

- **Управление документами**: Создание, редактирование, удаление и организация документов
- **Безопасность**: Шифрование данных, контроль доступа, аудит действий
- **Совместная работа**: Возможность работы нескольких пользователей над одним документом

## Технические детали

- Использован **effector** для управления состоянием приложения
- TypeScript для типобезопасности
- REST API для взаимодействия с backend
- Адаптивный дизайн для всех устройств

## Результаты

Платформа успешно внедрена в производство и используется множеством компаний для управления своими документами.
```

**Английская версия (`src/content/projects/en/easydocs.mdx`):**

```mdx
---
id: "easydocs"
title: "EasyDocs"
subtitle: "Electronic document management platform"
technologies:
  - "React"
  - "TypeScript"
  - "effector"
  - "REST API"
links:
  website: "https://www.easydocs.ru"
  github: ""
backgroundColor: "#14A5EB"
order: 1
featured: true
---

## About the Project

Electronic document management platform for businesses. Allows creating, storing, managing and sharing documents in a secure environment.

## My Role

Frontend developer in the team. User interface development, backend API integration, performance optimization.

## Key Features

- **Document Management**: Create, edit, delete and organize documents
- **Security**: Data encryption, access control, action audit
- **Collaboration**: Multiple users can work on the same document

## Technical Details

- Used **effector** for application state management
- TypeScript for type safety
- REST API for backend communication
- Responsive design for all devices

## Results

The platform has been successfully deployed to production and is used by many companies to manage their documents.
```

---

### 2. EasyDocs App

**Русская версия (`src/content/projects/ru/easydocs-app.mdx`):**

```mdx
---
id: "easydocs-app"
title: "EasyDocs app"
subtitle: "Мобильное приложение для управления документами"
technologies:
  - "React Native"
  - "TypeScript"
  - "Redux Toolkit"
  - "REST API"
links:
  website: ""
  github: ""
backgroundColor: "#EB5A14"
order: 2
featured: false
---

## О проекте

Мобильная версия платформы EasyDocs для iOS и Android. Позволяет работать с документами на мобильных устройствах с полным функционалом десктопной версии.

## Моя роль

Разработка мобильного приложения на React Native. Адаптация UI/UX для мобильных устройств, оптимизация для низкоскоростных соединений.

## Ключевые особенности

- **Кросс-платформенность**: Одна кодовая база для iOS и Android
- **Офлайн режим**: Возможность работы без интернета с синхронизацией
- **Push уведомления**: Уведомления о важных событиях

## Технические детали

- React Native для разработки под обе платформы
- Redux Toolkit для управления состоянием
- Offline-first архитектура
- Оптимизация производительности для мобильных устройств

## Результаты

Приложение доступно для загрузки и получает положительные отзывы пользователей.
```

**Английская версия (`src/content/projects/en/easydocs-app.mdx`):**

```mdx
---
id: "easydocs-app"
title: "EasyDocs app"
subtitle: "Mobile application for document management"
technologies:
  - "React Native"
  - "TypeScript"
  - "Redux Toolkit"
  - "REST API"
links:
  website: ""
  github: ""
backgroundColor: "#EB5A14"
order: 2
featured: false
---

## About the Project

Mobile version of EasyDocs platform for iOS and Android. Allows working with documents on mobile devices with full desktop functionality.

## My Role

Mobile application development with React Native. UI/UX adaptation for mobile devices, optimization for low-speed connections.

## Key Features

- **Cross-platform**: Single codebase for iOS and Android
- **Offline mode**: Ability to work without internet with synchronization
- **Push notifications**: Notifications about important events

## Technical Details

- React Native for development for both platforms
- Redux Toolkit for state management
- Offline-first architecture
- Performance optimization for mobile devices

## Results

The application is available for download and receives positive user reviews.
```

---

### 3. Total Research

**Русская версия (`src/content/projects/ru/total-research.mdx`):**

```mdx
---
id: "total-research"
title: "Total research"
subtitle: "Платформа для проведения маркетинговых исследований"
technologies:
  - "React"
  - "TypeScript"
  - "MobX"
  - "WebSocket"
links:
  website: ""
  github: ""
backgroundColor: "#2ECC71"
order: 3
featured: false
---

## О проекте

Веб-платформа для проведения маркетинговых исследований. Позволяет создавать опросы, собирать данные, анализировать результаты в реальном времени.

## Моя роль

Frontend разработчик. Разработка интерфейса для создания опросов, визуализация данных, реализация real-time обновлений.

## Ключевые особенности

- **Конструктор опросов**: Гибкий инструмент для создания опросов любой сложности
- **Аналитика в реальном времени**: Мгновенное отображение результатов
- **Экспорт данных**: Экспорт в различные форматы (Excel, CSV, PDF)

## Технические детали

- MobX для реактивного управления состоянием
- WebSocket для real-time коммуникации
- Библиотеки для визуализации данных (charts)
- Оптимизированная работа с большими объемами данных

## Результаты

Платформа используется исследовательскими компаниями для проведения масштабных опросов.
```

**Английская версия (`src/content/projects/en/total-research.mdx`):**

```mdx
---
id: "total-research"
title: "Total research"
subtitle: "Platform for conducting marketing research"
technologies:
  - "React"
  - "TypeScript"
  - "MobX"
  - "WebSocket"
links:
  website: ""
  github: ""
backgroundColor: "#2ECC71"
order: 3
featured: false
---

## About the Project

Web platform for conducting marketing research. Allows creating surveys, collecting data, analyzing results in real-time.

## My Role

Frontend developer. Survey creation interface development, data visualization, real-time updates implementation.

## Key Features

- **Survey Builder**: Flexible tool for creating surveys of any complexity
- **Real-time Analytics**: Instant display of results
- **Data Export**: Export to various formats (Excel, CSV, PDF)

## Technical Details

- MobX for reactive state management
- WebSocket for real-time communication
- Data visualization libraries (charts)
- Optimized work with large data volumes

## Results

The platform is used by research companies to conduct large-scale surveys.
```

---

### 4. Portfolio Projects

**Русская версия (`src/content/projects/ru/portfolio.mdx`):**

```mdx
---
id: "portfolio"
title: "Portfolio Projects"
subtitle: "Коллекция личных проектов и экспериментов"
technologies:
  - "React"
  - "TypeScript"
  - "Next.js"
  - "Framer Motion"
links:
  website: ""
  github: "https://github.com/your-username"
backgroundColor: "#9B59B6"
order: 4
featured: false
---

## О проекте

Коллекция моих личных проектов, экспериментов и кейсов. Здесь я пробую новые технологии, реализую интересные идеи и делюсь опытом.

## Моя роль

Автор и единственный разработчик всех проектов. От идеи до реализации и деплоя.

## Ключевые особенности

- **Разнообразие**: Проекты разной сложности и направленности
- **Эксперименты**: Изучение новых технологий и подходов
- **Open Source**: Большинство проектов с открытым исходным кодом

## Технические детали

- Современный стек технологий (React, TypeScript, Next.js)
- Использование актуальных паттернов и best practices
- Внимание к деталям и пользовательскому опыту
- Анимации и микроинтеракции

## Результаты

Постоянное развитие навыков, изучение новых технологий, пополнение портфолио.
```

**Английская версия (`src/content/projects/en/portfolio.mdx`):**

```mdx
---
id: "portfolio"
title: "Portfolio Projects"
subtitle: "Collection of personal projects and experiments"
technologies:
  - "React"
  - "TypeScript"
  - "Next.js"
  - "Framer Motion"
links:
  website: ""
  github: "https://github.com/your-username"
backgroundColor: "#9B59B6"
order: 4
featured: false
---

## About the Project

Collection of my personal projects, experiments and cases. Here I try new technologies, implement interesting ideas and share experience.

## My Role

Author and sole developer of all projects. From idea to implementation and deployment.

## Key Features

- **Variety**: Projects of different complexity and direction
- **Experiments**: Learning new technologies and approaches
- **Open Source**: Most projects with open source code

## Technical Details

- Modern technology stack (React, TypeScript, Next.js)
- Using current patterns and best practices
- Attention to detail and user experience
- Animations and micro-interactions

## Results

Continuous skill development, learning new technologies, portfolio expansion.
```

---

## Рекомендации по цветам фона

Выбирайте цвета, которые:
- Хорошо сочетаются с темной и светлой темой
- Обеспечивают достаточный контраст с текстом
- Отражают характер проекта

**Примеры цветовых схем:**

```
Синие тона (технологические):
- #14A5EB (яркий синий)
- #3498DB (средний синий)
- #2C3E50 (темно-синий)

Оранжевые/красные (энергичные):
- #EB5A14 (оранжевый)
- #E74C3C (красный)
- #FF6B6B (коралловый)

Зеленые (природные, стабильные):
- #2ECC71 (ярко-зеленый)
- #27AE60 (средне-зеленый)
- #16A085 (бирюзовый)

Фиолетовые (креативные):
- #9B59B6 (фиолетовый)
- #8E44AD (темно-фиолетовый)
- #E91E63 (розовый)

Нейтральные (профессиональные):
- #34495E (серо-синий)
- #7F8C8D (серый)
- #95A5A6 (светло-серый)
```

---

## Возможности форматирования

MDX поддерживает все возможности Markdown, а также JSX компоненты:

### Заголовки
```markdown
# H1 заголовок
## H2 заголовок
### H3 заголовок
```

### Списки
```markdown
- Пункт 1
- Пункт 2
  - Вложенный пункт

1. Нумерованный пункт 1
2. Нумерованный пункт 2
```

### Выделение текста
```markdown
**Жирный текст**
*Курсив*
~~Зачеркнутый~~
`Код`
```

### Ссылки и изображения
```markdown
[Текст ссылки](https://example.com)
![Альтернативный текст](/images/image.jpg)
```

### Цитаты
```markdown
> Это цитата
> Может быть многострочной
```

### Код
````markdown
```javascript
const hello = () => {
  console.log('Hello World')
}
```
````

### Таблицы
```markdown
| Заголовок 1 | Заголовок 2 |
|-------------|-------------|
| Ячейка 1    | Ячейка 2    |
| Ячейка 3    | Ячейка 4    |
```

### Горизонтальная линия
```markdown
---
```

---

## Best Practices

### 1. Согласованность
- Используйте одинаковую структуру для всех проектов
- Одинаковый порядок секций
- Согласованный стиль написания

### 2. Краткость
- Подзаголовок не более одной строки
- Описания лаконичные, но информативные
- Избегайте повторений

### 3. Читаемость
- Используйте форматирование для акцентов
- Разбивайте текст на параграфы
- Списки для перечислений

### 4. SEO
- Используйте ключевые слова естественно
- Информативные заголовки
- Качественные описания

### 5. Актуальность
- Регулярно обновляйте информацию
- Добавляйте новые проекты
- Удаляйте устаревшие

### 6. Двуязычность
- Следите за синхронизацией версий
- Одинаковые `id` для языковых версий
- Одинаковый `order` для правильной сортировки

---

## Процесс добавления нового проекта

### Шаг 1: Создание файлов
Создайте два файла (русская и английская версии):
- `src/content/projects/ru/project-slug.mdx`
- `src/content/projects/en/project-slug.mdx`

### Шаг 2: Заполнение frontmatter
Заполните метаданные, используя шаблон выше.

### Шаг 3: Написание описания
Напишите описание проекта на обоих языках.

### Шаг 4: Выбор цвета
Выберите подходящий цвет фона для слайда.

### Шаг 5: Проверка
- Проверьте корректность YAML
- Убедитесь, что `id` одинаковый в обеих версиях
- Проверьте форматирование

### Шаг 6: Тестирование
- Запустите dev-сервер
- Проверьте отображение в слайдере
- Проверьте переключение языков
- Проверьте ссылки

---

## Примеры использования

### Минимальный проект
```mdx
---
id: "simple-project"
title: "Simple Project"
subtitle: "A simple project description"
technologies:
  - "React"
  - "CSS"
links:
  website: ""
  github: ""
backgroundColor: "#3498DB"
order: 5
---

## About

A simple project with minimal description.
```

### Полный проект
```mdx
---
id: "complex-project"
title: "Complex Project"
subtitle: "A comprehensive enterprise solution"
technologies:
  - "React"
  - "TypeScript"
  - "Node.js"
  - "PostgreSQL"
  - "Docker"
  - "AWS"
links:
  website: "https://example.com"
  github: "https://github.com/username/repo"
backgroundColor: "#2C3E50"
order: 1
featured: true
startDate: "2022-06"
endDate: "2023-12"
---

## About the Project

Comprehensive description...

## My Role

Detailed role description...

## Key Features

- Feature 1
- Feature 2
- Feature 3

## Technical Details

Technical implementation...

## Challenges

What challenges were faced...

## Solutions

How challenges were solved...

## Results

Measurable results...

## Learnings

What was learned...

## Future Plans

Future development plans...
```

---

## Чек-лист перед публикацией

- [ ] Frontmatter заполнен корректно
- [ ] `id` одинаковый в обеих языковых версиях
- [ ] Заголовок информативный и краткий
- [ ] Подзаголовок не более одной строки
- [ ] Технологии перечислены полностью
- [ ] Ссылки проверены и работают
- [ ] Цвет фона выбран и указан
- [ ] Порядок (`order`) установлен правильно
- [ ] Описание полное и понятное
- [ ] Форматирование корректное
- [ ] Нет опечаток
- [ ] Английская версия синхронизирована с русской

---

## Частые ошибки

### 1. Неправильный YAML
```yaml
# ❌ Неправильно
technologies: "React, TypeScript"  # Должен быть массив

# ✅ Правильно
technologies:
  - "React"
  - "TypeScript"
```

### 2. Разные ID в языковых версиях
```yaml
# ❌ Неправильно
# ru/project.mdx
id: "proekt"
# en/project.mdx
id: "project"

# ✅ Правильно
# Одинаковый id в обоих файлах
id: "project"
```

### 3. Отсутствие обязательных полей
```yaml
# ❌ Неправильно (нет backgroundColor)
---
id: "project"
title: "Project"
---

# ✅ Правильно
---
id: "project"
title: "Project"
subtitle: "Description"
technologies: ["React"]
backgroundColor: "#3498DB"
order: 1
---
```

### 4. Неправильный формат ссылок
```yaml
# ❌ Неправильно
links: "https://example.com"

# ✅ Правильно
links:
  website: "https://example.com"
  github: "https://github.com/user/repo"
```

---

## Дополнительные ресурсы

**Markdown:**
- [Markdown Guide](https://www.markdownguide.org/)
- [GitHub Flavored Markdown](https://github.github.com/gfm/)

**MDX:**
- [MDX Documentation](https://mdxjs.com/)
- [MDX Playground](https://mdxjs.com/playground/)

**YAML:**
- [YAML Syntax](https://yaml.org/)
- [YAML Validator](https://www.yamllint.com/)

**Цвета:**
- [Color Hunt](https://colorhunt.co/)
- [Coolors](https://coolors.co/)
- [Adobe Color](https://color.adobe.com/)

---

**Статус:** 📝 Готов к заполнению контента
