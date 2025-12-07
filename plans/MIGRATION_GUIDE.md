# 🚀 Руководство по миграции проекта на Next.js + TypeScript (App Router)

Это пошаговое руководство для самостоятельной миграции проекта на современный Next.js с App Router.

---

# Этап 1: Миграция на Next.js с SSR (App Router)

## Шаг 1: Создание Next.js проекта

### 1.1. Создайте новую ветку в git
```bash
git checkout -b feature/nextjs-migration
```

### 1.2. Создайте Next.js приложение
У вас есть два варианта:

**Вариант А: Создать рядом и потом перенести** (рекомендую)
```bash
# В родительской папке
cd ..
npx create-next-app@latest klochkov-next --typescript --eslint --tailwind=false --app --src-dir --import-alias="@/*"
```

**Вариант Б: Переименовать текущий проект и создать на его месте**
```bash
# Переименовать текущую папку
cd ..
mv klochkov klochkov-old

# Создать новый Next.js проект
npx create-next-app@latest klochkov --typescript --eslint --tailwind=false --app --src-dir --import-alias="@/*"
```

**Что означают флаги:**
- `--typescript` - сразу с TypeScript
- `--eslint` - с ESLint
- `--tailwind=false` - без Tailwind (у нас styled-components)
- `--app` - используем **App Router** (современная архитектура!)
- `--src-dir` - структура с папкой src/
- `--import-alias="@/*"` - алиасы для импортов

---

## Шаг 2: Установка зависимостей

### 2.1. Перейдите в новый проект
```bash
cd klochkov-next  # или klochkov, если выбрали вариант Б
```

### 2.2. Установите styled-components для Next.js
```bash
npm install styled-components
npm install -D @types/styled-components
```

### 2.3. Установите другие необходимые пакеты
```bash
npm install normalize.css
npm install react-burger-menu @types/react-burger-menu
```

---

## Шаг 3: Настройка styled-components для SSR в App Router

### 3.1. Создайте файл `src/lib/registry.tsx`

Это **ключевой файл** для SSR styled-components в App Router!

```typescript
'use client'

import React, { useState } from 'react'
import { useServerInsertedHTML } from 'next/navigation'
import { ServerStyleSheet, StyleSheetManager } from 'styled-components'

export default function StyledComponentsRegistry({
  children,
}: {
  children: React.ReactNode
}) {
  // Создаем sheet только один раз с помощью lazy initial state
  // x-ref: https://reactjs.org/docs/hooks-reference.html#lazy-initial-state
  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet())

  useServerInsertedHTML(() => {
    const styles = styledComponentsStyleSheet.getStyleElement()
    styledComponentsStyleSheet.instance.clearTag()
    return <>{styles}</>
  })

  if (typeof window !== 'undefined') return <>{children}</>

  return (
    <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
      {children}
    </StyleSheetManager>
  )
}
```

**Что здесь происходит:**
1. `useServerInsertedHTML` - новый хук Next.js для вставки HTML на сервере
2. `ServerStyleSheet` - собирает стили на сервере
3. `StyleSheetManager` - управляет стилями в React дереве
4. **Важно:** Компонент помечен как `'use client'`, но работает и на сервере!

### 3.2. Обновите `src/app/layout.tsx`

Замените содержимое на:

```typescript
import type { Metadata } from 'next'
import StyledComponentsRegistry from '@/lib/registry'
import 'normalize.css'
import './globals.css'

export const metadata: Metadata = {
  title: 'Klochkov - Portfolio',
  description: 'Personal portfolio website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body>
        <StyledComponentsRegistry>
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
```

**Ключевые отличия от Pages Router:**
- ❌ Нет `_document.tsx` и `_app.tsx`
- ✅ Все в одном `layout.tsx`
- ✅ `Metadata` API для SEO вместо `<Head>`
- ✅ Registry оборачивает все приложение

---

## Шаг 4: Настройка next.config.ts

### 4.1. Откройте `next.config.ts` и настройте его

```typescript
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  // Если будете деплоить на GitHub Pages
  // basePath: '/klochkov',
  // assetPrefix: '/klochkov/',
  // output: 'export', // для статического экспорта
}

export default nextConfig
```

**Объяснение:**
- `compiler.styledComponents: true` - встроенная оптимизация styled-components
- `basePath` и `assetPrefix` - для GitHub Pages (закомментируйте пока)
- `output: 'export'` - для статического экспорта (понадобится позже)

---

## Шаг 5: Перенос компонентов

### 5.1. Скопируйте папку компонентов

Из старого проекта:
```
klochkov-old/src/components/
```

В новый:
```
klochkov-next/src/components/
```

### 5.2. Скопируйте данные

```
klochkov-old/src/dataProjects.js  →  klochkov-next/src/data/dataProjects.ts
klochkov-old/src/dataHobby.js     →  klochkov-next/src/data/dataHobby.ts
```

### 5.3. Скопируйте стили

```
klochkov-old/src/style/          →  klochkov-next/src/styles/
klochkov-old/src/assets/         →  klochkov-next/src/assets/
```

### 5.4. Скопируйте public файлы

```
klochkov-old/public/             →  klochkov-next/public/
```

---

## Шаг 6: Создание страниц в App Router

### 6.1. Замените `src/app/page.tsx` на вашу главную страницу

**Важно понять структуру App Router:**
```
app/
  page.tsx        → `/` (главная страница)
  layout.tsx      → обертка для всех страниц
  about/
    page.tsx      → `/about`
  projects/
    [id]/
      page.tsx    → `/projects/1`, `/projects/2` и т.д.
```

Создайте главную страницу:

```typescript
import type { Metadata } from 'next'
import Main from '@/components/Main/Main'

export const metadata: Metadata = {
  title: 'Klochkov - Portfolio',
  description: 'Personal portfolio website',
}

export default function Home() {
  return <Main />
}
```

### 6.2. Создайте страницу About

Создайте файл `src/app/about/page.tsx`:

```typescript
import type { Metadata } from 'next'
import About from '@/components/About/About'

export const metadata: Metadata = {
  title: 'About - Klochkov',
  description: 'About me',
}

export default function AboutPage() {
  return <About />
}
```

### 6.3. Понимание Server Components vs Client Components

**По умолчанию все компоненты в App Router - Server Components!**

Если компонент использует:
- `useState`, `useEffect`, `useContext`
- Обработчики событий (`onClick`, `onChange`)
- Browser APIs (`window`, `localStorage`)
- Хуки styled-components с динамикой

То добавьте в начало файла:
```typescript
'use client'
```

**Примеры:**

Server Component (по умолчанию):
```typescript
// src/app/page.tsx
export default function Home() {
  return <div>Hello</div> // ✅ работает на сервере
}
```

Client Component:
```typescript
// src/components/Button/Button.tsx
'use client' // ⚠️ обязательно!

import { useState } from 'react'

export default function Button() {
  const [count, setCount] = useState(0) // ✅ теперь можно
  return <button onClick={() => setCount(count + 1)}>{count}</button>
}
```

---

## Шаг 7: Замена react-router-dom на Next.js App Router

### 7.1. Найдите все `import { Link } from 'react-router-dom'`

Замените на:
```typescript
import Link from 'next/link'
```

### 7.2. Измените синтаксис Link

Было (react-router):
```jsx
<Link to="/about">About</Link>
```

Стало (Next.js):
```jsx
<Link href="/about">About</Link>
```

### 7.3. Замените useHistory/useNavigate

Было:
```javascript
import { useHistory } from 'react-router-dom'
const history = useHistory()
history.push('/about')
```

Стало:
```typescript
'use client' // ⚠️ обязательно для хуков!

import { useRouter } from 'next/navigation' // ⚠️ navigation, не router!
const router = useRouter()
router.push('/about')
```

**Важно:** В App Router используется `next/navigation`, а не `next/router`!

---

## Шаг 8: Тестирование

### 8.1. Удалите старую папку pages (если есть)
```bash
rm -rf src/pages
```

### 8.2. Запустите dev-сервер
```bash
npm run dev
```

### 8.3. Откройте браузер
```
http://localhost:3000
```

### 8.4. Проверьте:
- ✅ Страница загружается
- ✅ Стили применяются (нет мигания)
- ✅ Навигация работает
- ✅ Нет ошибок в консоли
- ✅ В консоли браузера нет варнингов о гидрации

---

## Шаг 9: Исправление TypeScript ошибок

На этом этапе у вас будут ошибки TypeScript, это нормально!

### 9.1. Временно отключите строгую проверку

В `tsconfig.json` найдите и измените:
```json
{
  "compilerOptions": {
    "strict": false,
    "noImplicitAny": false
  }
}
```

**Почему:** Пока компоненты в .js, TypeScript будет ругаться. Мы исправим это на этапе 3.

---

## Шаг 10: Первый коммит

```bash
git add .
git commit -m "feat: initial Next.js migration with App Router and styled-components SSR

- Setup Next.js with App Router
- Configure styled-components for SSR using Registry pattern
- Add layout.tsx with StyledComponentsRegistry
- Copy components from old project
- Replace react-router with Next.js navigation"
```

---

## 📝 Чек-лист Этапа 1

Проверьте, что вы сделали:

- [ ] Создали Next.js проект с TypeScript и App Router (`--app`)
- [ ] Установили styled-components
- [ ] Создали `src/lib/registry.tsx` для SSR стилей
- [ ] Настроили `src/app/layout.tsx` с Registry
- [ ] Настроили `next.config.ts`
- [ ] Скопировали все компоненты, данные, стили
- [ ] Создали страницы в `app/` (page.tsx, about/page.tsx)
- [ ] Заменили react-router на Next.js navigation
- [ ] Удалили папку `src/pages` (если была)
- [ ] Проект запускается на `localhost:3000`
- [ ] Сделали коммит

---

## ❓ Частые проблемы и решения

**Проблема:** Стили "мигают" при загрузке
**Решение:** Проверьте `registry.tsx` - скорее всего не подключен в `layout.tsx`

**Проблема:** Ошибка "Module not found" для компонентов
**Решение:** Проверьте алиасы в `tsconfig.json`:
```json
"paths": {
  "@/*": ["./src/*"]
}
```

**Проблема:** Ошибка "You're importing a component that needs useState..."
**Решение:** Добавьте `'use client'` в начало файла компонента

**Проблема:** styled-components не работает
**Решение:** Проверьте `next.config.ts` → `compiler.styledComponents: true`

**Проблема:** Ошибка при использовании `useRouter`
**Решение:** Используйте `next/navigation`, а не `next/router` в App Router

---

## 🎯 Ключевые отличия App Router от Pages Router

| Аспект | Pages Router | App Router |
|--------|-------------|------------|
| Файлы страниц | `pages/about.tsx` | `app/about/page.tsx` |
| Layout | `_app.tsx`, `_document.tsx` | `layout.tsx` |
| Metadata | `<Head>` компонент | `metadata` экспорт |
| Router hook | `next/router` | `next/navigation` |
| Компоненты | Все Client | Server по умолчанию |
| SSR styled-components | `_document.tsx` | `registry.tsx` |

---

## 🎯 Следующий шаг

После выполнения Этапа 1 переходите к **Этапу 2: Обновление зависимостей** (будет добавлен позже).

---

# Этап 2: Обновление зависимостей

> Этот раздел будет заполнен после завершения Этапа 1

---

# Этап 3: Миграция на TypeScript

> Этот раздел будет заполнен после завершения Этапа 2

---

# Этап 4: Atomic Design структура

> Этот раздел будет заполнен после завершения Этапа 3

---

# Этап 5: Redux Toolkit

> Этот раздел будет заполнен после завершения Этапа 4

**Примечание для App Router:**
В App Router Redux можно использовать только в Client Components. Понадобится создать провайдер:
```typescript
'use client'
import { Provider } from 'react-redux'
```

---

# Этап 6: Интернационализация (next-intl)

> Этот раздел будет заполнен после завершения Этапа 5

**Важно:** Для App Router рекомендуется использовать `next-intl` вместо `next-i18next`!

---

# Этап 7: Новые возможности React 19

> Этот раздел будет заполнен после завершения Этапа 6

**Возможности React 19 в App Router:**
- Server Actions
- `use` хук
- Асинхронные компоненты
- Streaming с Suspense

---

# Этап 8: Система тем

> Этот раздел будет заполнен после завершения Этапа 7

---

# Этап 9: Дизайн и адаптивность

> Этот раздел будет заполнен после завершения Этапа 8

---

# Этап 10: Дополнительные улучшения

> Этот раздел будет заполнен после завершения Этапа 9

---

## 📚 Полезные ресурсы по App Router

- [Next.js App Router документация](https://nextjs.org/docs/app)
- [Server и Client Components](https://nextjs.org/docs/app/building-your-application/rendering/server-components)
- [styled-components в Next.js](https://nextjs.org/docs/app/building-your-application/styling/css-in-js)
- [Миграция с Pages на App Router](https://nextjs.org/docs/app/building-your-application/upgrading/app-router-migration)
