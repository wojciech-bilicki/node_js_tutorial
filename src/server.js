import express from 'express';

const app = express();
app.set('view engine', 'pug');
app.set('views', __dirname + '/views');

const users = [
  {
    name: 'Wojtek'
  },
  {
    name: 'Carrie'
  }
];

app.get('/', (req, res) => {
  res.render('index', {
    title: 'Hello',
    bet: 'Juventus vs Roma',
    users: users,
    renderBetterFooter: false
  });
});

app.get('/about', (req, res) => {
  res.render('about', { renderBetterFooter: true });
});

app.get('/users', (req, res) => {
  res.send(users);
});

app.listen(4000, () => {
  console.log('listening on a port 4000');
});
