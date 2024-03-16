# Описание репозитория:
Это тренировочная практика для отработки навыков работы с массивами и объектами. Добро пожаловать в мир агрегации и анализа :) Надеюсь, вам ~~не~~ понравится.

## Требования к выполнению работы:
1. Нельзя менять уже написанный код, тесты и другие файлы, добавленные в проект.
2. Выполняйте коммиты и пуши как можно чаще. Так вы будете видеть, какие из тестов сработают, а какие нет.
3. Во время работы не забывайте запускать линтер и тесты.
# Рекомендации:
1. Не забудьте перед началом работы изучить `Makefile` и выполнить установку зависимостей.
2. Старайтесь оптимизировать свой код: попробуйте использовать различные операторы и функции, заменяющие классические конструкции (циклы, условия).
3. Не забудьте грамотно выстраивать логику работы: одна функция выполняет одно действие.
4. Не забывайте разделять чистые функции и функции с побочками, если это возможно.
# Разрешенные ресурсы:
- [Javascript](https://developer.mozilla.org/ru/docs/Learn/JavaScript)
- [Web development](https://developer.mozilla.org/en-US/docs/Learn)
- [Node](https://nodejs.org/ru/docs)
- [NPM](https://docs.npmjs.com/)
- [lodash](https://lodash.com/docs)
- [Github](https://github.com/)
- [Github Classroom](https://classroom.github.com/)
- [Github Docs](https://docs.github.com/ru)
- [ESLint](https://eslint.org/docs/latest/)
# Задание №1
Ваша задача написать консольную утилиту, которая анализирует переданные данные из таблицы и показывает статистику по этим данным. Файлы хранятся в директории *\_\_fixtures\_\_* в формате CSV. Они используются для тестов и понадобятся вам, для запуска и проверки утилиты в терминале. Вся информация уже прочитана и содержится в константе content. Вам остается только написать и экспортировать функцию в файле index.js, которая принимает данные в виде строки и работает с ними. Программа выводит строки в консоль, каждая строка является решением определенного шага. Таким образом 5 шагов предполагает 5 строк в консоли.

Пример запуска утилиты:
```bash
bin/messengers.js __fixtures__/messengers.csv
General top messenger: VK Messenger ВКонтакте, VK
Download count: Max count: 1000, Min count: 23
Top-3 Australia: Vider, Signal, LINE
Top downloads: WhatsApp, Facebook Messenger, Telegram, Signal, Viber, Snapchat, WeChat, LINE
Top owner: Tencent
```

Каждая строчка в выводе утилиты, представляет собой небольшое отдельное вычислительное задание. Вам предстоит решать эти задачи по очереди. Ниже список этих заданий:
1. Выведите название приложения и название компании-разработчика для мессенджера, у которого самый высокий средний рейтинг в Google Play и App Store:
```bash
bin/messengers.js __fixtures__/messengers.csv
General top messenger: VK Messenger ВКонтакте, VK 
```
2. Выведите самое большое и самое маленькое количество скачиваний приложений в Индии:
```bash
bin/messengers.js __fixtures__/messengers.csv
General top messenger: VK Messenger ВКонтакте, VK  # Не забывайте что предыдущее решение остается работать
Download count: Max count: 1000, Min count: 23
```
3. Выведите топ-3 приложений по версии Google Play в Австралии:
```bash
bin/messengers.js __fixtures__/messengers.csv
General top messenger: VK Messenger ВКонтакте, VK
Download count: Max count: 1000, Min count: 23
Top-3 Australia: Vider, Signal, LINE
```
4. Выведите список приложений в порядке возрастания среднего количетсва скачиваний по всем странам. *Среднее количество скачиваний* = Общее количество скачиваний приложения по всем странам / Количество стран
```bash
bin/messengers.js __fixtures__/messengers.csv
General top messenger: VK Messenger ВКонтакте, VK
Download count: Max count: 1000, Min count: 23
Top-3 Australia: Vider, Signal, LINE
Top downloads: WhatsApp, Facebook Messenger, Telegram, Signal, Viber, Snapchat, WeChat, LINE
```
5. Выведите название компании, которая владеет двумя или более приложениями из списка:
```bash
bin/messengers.js __fixtures__/messengers.csv
General top messenger: VK Messenger ВКонтакте, VK
Download count: Max count: 1000, Min count: 23
Top-3 Australia: Vider, Signal, LINE
Top downloads: WhatsApp, Facebook Messenger, Telegram, Signal, Viber, Snapchat, WeChat, LINE
Top owner: Tencent
```
# Задание №2
Ваша задача написать консольную утилиту, которая анализирует переданные данные из резюме и показывает статистику по его данным. Файлы хранятся в директории *\_\_fixtures\_\_* в формате CSV. Они используются для тестов и понадобятся вам, для запуска и проверки утилиты в терминале. Вся информация уже прочитана и содержится в константе content. Вам остается только написать и экспортировать функцию в файле index.js, которая принимает данные в виде строки и работает с ними. Программа выводит строки в консоль, каждая строка является решением определенного шага. Таким образом 5 шагов предполагает 5 строк в консоли.

Пример запуска утилиты:
```bash
bin/job-resume.js __fixtures__/job-resume.csv
Job seeker: John Doe, Junior JavaScript Developer
Required stack: 4
GitHub nickname: superProger3000
Experience: 3 years 0 months
Education: A place, B place, C place
```

Каждая строчка в выводе утилиты, представляет собой небольшое отдельное вычислительное задание. Вам предстоит решать эти задачи по очереди. Ниже список этих заданий:
1. Выведите имя и фамилию соискателя:
```bash
bin/job-resume.js __fixtures__/job-resume.csv
Job seeker: John Doe, Junior JavaScript Developer
```
2. Выведите количество фреймворков из списка, которыми владеет соискатель. Список фреймворков:  "React", "Angular", "Vue.js", "JQuery", "Backbone.js", "Node.js", "Ember.js", "Meteor":
```bash
bin/job-resume.js __fixtures__/job-resume.csv
Job seeker: John Doe, Junior JavaScript Developer
Required stack: 4
```
3. Выведите никнейм соискателя на GitHub:
```bash
bin/job-resume.js __fixtures__/job-resume.csv
Job seeker: John Doe, Junior JavaScript Developer
Required stack: 4
GitHub nickname: superProger3000
```
4. Выведите суммарный опыт работы соискателя в количестве полных лет и месяцев (перерывы между местами работы тоже пойдут в счет):
```bash
bin/job-resume.js __fixtures__/job-resume.csv
Job seeker: John Doe, Junior JavaScript Developer
Required stack: 4
GitHub nickname: superProger3000
Experience: 3 years 0 months
```
5. Выведите в алфавитном порядке список названий учебных заведений, в которых учился соискатель:
```bash
bin/job-resume.js __fixtures__/job-resume.csv
Job seeker: John Doe, Junior JavaScript Developer
Required stack: 4
GitHub nickname: superProger3000
Experience: 3 years 0 months
Education: A place, B place, C place
```