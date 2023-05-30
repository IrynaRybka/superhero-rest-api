
### Команди:

- `npm start` &mdash; старт сервера в режимі production
- `npm run start:dev` &mdash; старт сервера в режимі розробки (development)
- `npm run lint` &mdash; запустити виконання перевірки коду з eslint, необхідно виконувати перед кожним PR та виправляти всі помилки лінтера
- `npm lint:fix` &mdash; та ж перевірка лінтера, але з автоматичними виправленнями простих помилок

### Робота з url

  '/'  - post - createHero - створює нового супергероя
  '/' - get - getHeroes - отримати лист з всіма супеогероями
  '/' - get - getPaginationHero - отримати лист з всіма супергероями з пагінацією але не більше ніж 5 за раз;



  '/:id'
   '/:id' - get -getHeroById - отримати супергероя за id
   '/:id' - patch - updateHeroById - перейменувати героя або внести інші зміни
   '/:id' - delete - deleteHeroById - видалити героя по id;

  '/update-image' - patch - updateImageHero - обновити зображення супергероя;
