## Мини-приложение с круглым прогресс-баром [**[онлайн-демо]**](https://naborbukovok.github.io/progress-app)

### :rocket: О чем проект
Проект представляет из себя небольшое приложение, демонстрирующее работу круглого прогресс-бара. При помощи элементов управления можно задать:

- ```Прогресс выполнения (в %)``` </br>
- ```Анимацию вращения``` </br>
- ```Видимость```

Если задать прогресс-бару некорректное значение (программно или вручную), он продолжит отображать последнее из переданных корректных значений. Форма также валидируется.

### :rocket: Структура
- В ```src/blocks``` лежат стили. </br>
- В ```src/components``` лежат модули ```Progress``` и ```Form```. </br>
- В ```src/vendor``` хранятся шрифты (и файлик с их подключением), а также ```normalize.css```. </br>
- В ```src/pages``` два файла: ```index.js``` (точка входа в приложение) и ```index.css``` (в нем подтягиваются все стили из ```src/blocks``` и ```src/vendor```).

### :rocket: Стек технологий
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=white"/> <img src="https://img.shields.io/badge/HTML-E34F26?style=flat&logo=html5&logoColor=white"/> <img src="https://img.shields.io/badge/CSS-1572B6?style=flat&logo=css3&logoColor=white"/> <img src="https://img.shields.io/badge/npm-CB3837?style=flat&logo=npm&logoColor=white"/> <img src="https://img.shields.io/badge/webpack-8DD6F9?style=flat&logo=webpack&logoColor=white"/>
