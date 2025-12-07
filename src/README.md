# srcNew - Portfolio Redesign

Новый дизайн портфолио, построенный с использованием **Atomic Design** методологии.

## Структура проекта

```
srcNew/
├── atoms/              # Базовые UI элементы
│   ├── Button/        # Кнопка с анимациями
│   ├── Text/          # Типографические компоненты
│   ├── Link/          # Ссылки с эффектами
│   ├── Tag/           # Теги технологий
│   ├── Cursor/        # Анимированный курсор
│   └── Icon/          # Обертка для иконок
│
├── molecules/          # Составные компоненты
│   ├── NavItem/       # Элемент навигации
│   ├── SkillCard/     # Карточка навыка
│   ├── ProjectCard/   # Карточка проекта
│   ├── SectionTitle/  # Заголовок секции
│   └── ThemeToggle/   # Переключатель темы
│
├── organisms/          # Сложные блоки
│   ├── Navigation/    # Навигационная панель
│   ├── Hero/          # Героическая секция
│   ├── SkillsGrid/    # Сетка навыков
│   ├── ProjectsList/  # Список проектов
│   ├── ContactSection/ # Секция контактов
│   └── CodeBackground/ # Анимированный фон
│
├── templates/          # Шаблоны страниц
│   └── MainTemplate/  # Основной шаблон
│
├── pages/             # Страницы приложения
│   └── HomePage/      # Главная страница
│
├── context/           # React Context
│   └── ThemeContext/  # Контекст темы
│
├── hooks/             # Custom hooks
│   ├── useTheme.ts    # Хук для темы
│   └── useSmoothScroll.ts # Плавная прокрутка
│
├── theme/             # Система темизации
│   ├── colors.ts      # Цветовые схемы
│   ├── typography.ts  # Типографика
│   ├── breakpoints.ts # Брейкпоинты
│   └── GlobalStyles.ts # Глобальные стили
│
├── types/             # TypeScript типы
│   └── index.ts
│
└── utils/             # Утилиты
    └── animations.ts  # Конфигурация анимаций
```

## Технологии

- **Next.js 16** - React фреймворк
- **TypeScript** - Статическая типизация
- **styled-components** - CSS-in-JS
- **Framer Motion** - Анимации
- **Lucide React** - Иконки

## Особенности

### Atomic Design
Проект полностью следует методологии Atomic Design:
- **Atoms** - базовые неделимые компоненты
- **Molecules** - простые группы atoms
- **Organisms** - сложные UI компоненты
- **Templates** - макеты страниц
- **Pages** - конечные страницы

### Темизация
- Dark/Light режимы
- Сохранение в localStorage
- Определение системных предпочтений
- Плавные переходы между темами
- Защита от FOUC (Flash of Unstyled Content)

### Анимации
- Scroll-based анимации (Framer Motion)
- Hover эффекты на всех интерактивных элементах
- Плавная прокрутка по якорям
- Анимация появления элементов

### Адаптивность
- Mobile-first подход
- Responsive grid системы
- Адаптивная типографика
- Оптимизация для всех устройств

## Запуск

Проект доступен по маршруту: `/new`

```bash
npm run dev
# Откройте http://localhost:3000/new
```

## Дизайн-система

### Цветовая палитра

**Light Theme:**
- Primary: #14A5EB (синий)
- Secondary: #EB5A14 (оранжевый)
- Background: #ffffff
- Foreground: #4a4a4a

**Dark Theme:**
- Primary: #14A5EB (синий)
- Secondary: #EB5A14 (оранжевый)
- Background: #000000
- Foreground: #a0a0a0

### Типографика
- Font Family: SF Mono, Monaco, Inconsolata, Fira Code, Consolas
- Размеры: от 12px до 80px
- Line heights: tight (1.2), normal (1.6), relaxed (1.7)

### Breakpoints
- Mobile: 425px
- Tablet: 768px
- Desktop: 1024px
- Large: 1200px

## Компоненты

### Использование

```tsx
import { HomePage } from 'srcNew'

export default function Page() {
  return <HomePage />
}
```

### Кастомизация темы

```tsx
import { ThemeProvider, useTheme } from 'srcNew'

function MyComponent() {
  const { theme, toggleTheme, isDark } = useTheme()

  return (
    <button onClick={toggleTheme}>
      {isDark ? 'Light' : 'Dark'} Mode
    </button>
  )
}
```

## Best Practices

1. **Компонентная изоляция** - каждый компонент независим
2. **TypeScript** - строгая типизация везде
3. **Styled Components** - скоупированные стили
4. **Композиция** - переиспользование через композицию
5. **Performance** - lazy loading, мемоизация
6. **Accessibility** - семантичный HTML, ARIA атрибуты

## Дальнейшие улучшения

- [ ] Добавить юнит-тесты (Jest + Testing Library)
- [ ] Добавить Storybook для документации компонентов
- [ ] Оптимизация изображений (next/image)
- [ ] SEO оптимизация
- [ ] i18n поддержка (мультиязычность)
- [ ] Анимация загрузки страницы
- [ ] Добавить реальную контактную форму
- [ ] Интеграция с CMS для управления контентом
