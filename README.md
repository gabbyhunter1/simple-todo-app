
# ToDo App

Лёгкое и аккуратное To-Do приложение на React + TypeScript + Vite с базовым набором фич: добавление задач, переключение выполненности, фильтры, счётчик оставшихся и очистка выполненных. ￼

[Демо](simple-todo-app-six-alpha.vercel.app)


## Screenshots

![App Screenshot](https://previews.dropbox.com/p/thumb/ACvohkOWf2KrUleYup8dqAZka3wlRY4Swdeo3ZdOZGrwduzTUiwtks-cwcQRj-5lGivtI29WKO_0MRUXM8kDq2tzuV3TyXHEu-UPfwUJEt5CNjym0qeTcV0C7yBkfqLvWeT_rVCOr3zNCvKfwteipS5lGiVGf6wsoPOIP0jOG3xkTlYKt7CscLRIGFyvi1xP9VdFkQ8HU--JUeEIVlZmrHvKMmDybxPlE1RO7HRjZtfBHKBIprBEv1cS9LX9A7BP1j6fbCpxP2qB9J-8bzJXQVVnOw-jNCfA40BH6RlHavOe-Huc3gWaLx9-bzDdHo6XhgRjvTvRH5j2A6rcISmIaMJw/p.png?is_prewarmed=true)


## Features
- Добавление новой задачи с клавиатуры (Enter) или кнопкой
- Фильтры: Все задачи, Активные, Завершенные
- Счётчик сколько задач осталось
- Быстрая очистка завершенных и всех задач
- Сохранение в localStorage
- Попытался реализовать базовая доступность: роли/лейблы, управление с клавиатуры, живой анонс изменений (aria-live)
## Installation

```bash
  npm i && npm run start
```
    
## Running Tests

To run tests, run the following command

```bash
  # Тесты
  npm test
  # или
  npm run test:watch
  # или
  npm run test:ui
```


## Lessons Learned

В этом проекте я решил немного углубиться в accessibility и в работу скрин ридеров. Очень много нового узнал, поскольку раньше с этим как-то не разбирался. Немного научился ролям и лейблам.

Попрактиковал Context API - реализовал глобал стейт менеджмент, создал провайдер.

Впервые занялся тестами - пока еще совсем начало, но понимание есть. Сделал совсем простые тесты, далее по мере изучения буду добавлять усовершенствовать старые и добавлять новые.

В целом понравилось писать это простенькое приложение. Практика никогда не бывает лишней :)


## Tech Stack

[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-grey?style=for-the-badge&logo=tailwind-css&logoColor=38B2AC)](https://tailwindcss.com/)
[![React](https://img.shields.io/badge/-ReactJs-61DAFB?logo=react&logoColor=white&style=for-the-badge)](https://react.dev/)
[![Vitest](https://img.shields.io/badge/vitest-6E9F18?style=for-the-badge&logo=vitest&logoColor=white)](https://vitest.dev/)

