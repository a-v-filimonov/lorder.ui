# Lorder UI [Storybook](https://altiore.github.io/lorder.ui)

## Трекер задач и времени

![Auto-тесты](https://github.com//altiore/lorder.ui/workflows/CI/badge.svg) ![Staging Deployment](https://github.com//altiore/lorder.ui/workflows/Staging%20Deployment/badge.svg)

## Презентация проекта на YouTube:
[![Watch the video](http://i.ytimg.com/vi/8sQIlv48ioc/sddefault.jpg)](https://www.youtube.com/watch?v=8sQIlv48ioc)

### Установка

##### 0. Склонируй текущий репозиторий

##### 1. Для локальной работы необходимо установить [пакетный менеджер npm](https://www.npmjs.com/get-npm) и [node.js server](https://nodejs.org/en/) (обычно устанавливаются вместе)


##### 2. Скопируй файл .env.example -> .env

```bash
$ cp .env.example .env
```

##### 3. Установи локальные зависимости при помощи пакетного менеджера npm

```bash
$ npm i
```

##### 4. Запусти проект локально при помощи пакетного менеджера npm

```bash
$ npm start
```

##### 5. Приложение должно автоматически открыться в браузере и автоматически обновляться при любом изменении кода

[Независимому члену команды](https://github.com/altiore/lorder.ui/wiki/Start)

### Именование файлов и папок

#### Общие принципы

##### 1. Все нужное внутри
Все папки и файлы в них, структурированы по принципу "все нужное внутри". Это означает, что необходимый компонент / вспомогательная функция / файл хранилища расположены именно там, где он используется. Например, если компонент `HiHeader` используется ТОЛЬКО в файле `./src/#/#hi/hi.tsx`, то он ДОЛЖЕН находится в папке `./src/#/#hi/hi-header`, т.е. папка компонента должна находиться рядом с файлом, где этот компонент используется.

##### 2. Модификаторы папок
1. _@_ === _Общее_ - Если компонент, вспомогательнай функция или любой другой полезный файл используется в нескольких местах, то он должен быть вынесен в одну из папок, помеченных модификатором _@_. Или наоборот: если папка помечена модификатором _@_, значит ее содержимое используется минимум в 2 местах
2. _#_ === _Маршрут сайта_ - Если компонент представляет собой страницу проекта (роут, маршрут), то папка с таким компонентом содержит модификатор _#_. (Например, файлы компонентов для роута `/public/f2c6742e-2394-4982-8979-5f01c5ab2a50` находятся в папке `./src/#/#p/#-uuid`).
3. _#_ === _Общий вид для группы страниц_ - Иногда группа страниц может содержать общую часть вида (лейаут). Файл общего вида для группы страниц (роутов) содержится, в этом случае, в промежуточной папке c модификатором _#_, внутри которой находятся дочерние страницы (роуты). Например, для вошедшего пользователя для страниц `/` и `/projects/53/tasks` есть общий вид. Этот общий вид содержится в файле `./src/#/main.tsx`, а сами страницы (роуты) соотвественно в папках `./src/#/#` и `./src/#/#projects/#-uuid`. В свою очередь у страниц `/projects/53/tasks` и `/projects/53/members` есть общая часть вида, содержащаяся в файле `./src/#/#projects/projects.tsx`. И т.д. Таким образом, модификаторы папок позволяют легко понимать, какого рода файлы где находятся и, одновременно, оставляют структуру достаточно простой и понятной.

##### 3. Структура папок

1. _#_ - содержит все страницы сайта (роуты), подписанные на изменения глобальных данных проекта

   1.1. _#/@store_ - содержит сущности данных, используемые в проекте глобально (в любом из файлов внутри _#_ папки) (для некоторых страниц могут встречаться локальные хранилища)

   1.2. _#/@common_ - содержит компоненты подписанные на изменения глобальных данных проекта, которые используются на 2х и более разных страницах (роутах) в любом из файлов внутри _#_ папки

2. _@components_ - содержит переиспользуемые компоненты, которые ничего не знают о данных проекта. Эти компоненты с минимальными изменениями можно использовать в других проектах и независимо разрабатывать [используя storybook](https://github.com/altiore/altiore.ui/wiki/Storybook)
3. _@hooks_ - содержит переиспользуемые хуки и компоненты высшего порядка, которые ничего не знают о данных проекта
4. _@styles_ - содержит общие стили. [смотри стилизацию темы для material-ui библиотеки](https://material-ui.com/customization/theming/)
5. _@types_ - общие типы данных в проекте
6. _@utils_ - полезные утилиты, используемые в проекте.

#### [Участие в разработке](https://github.com/altiore/lorder.ui/wiki/Start)
#### [Начать решать задачи проекта](https://github.com/altiore/lorder.ui/wiki/Start)
#### [Приступить к работе](https://github.com/altiore/lorder.ui/wiki/NoRabota)
