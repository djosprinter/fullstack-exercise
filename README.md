# Full Stack Engineer Challenge



Структура проекта представлена ниже:

```bash
├── api
├── dashboard
├── docker-compose.yml
└── README.md
```

Для проверки работы сервиса необходимо выполнить команды:
```bash
# Сборка контейнера
$ docker-compose build

# Запуск
$ docker-compose up
```

## Описание Backend части

Сервис написан на Node.js с помощью фреймворка NestJS.

Конфигурация вынесена в  `.env` файлы, для разработки и продакшена соответсвенно.
Написана миграция для создания таблиц и заполнения таблицы со статусами.

Документация Swagger доступна по [ссылке](http://localhost:5000/api/docs/ "ссылке")


## Описание Frontend части

Сервис написан на фреймворке Vue.js и доступен по адресу [http://localhost:8080/](http://localhost:8080/ "http://localhost:8080/")
