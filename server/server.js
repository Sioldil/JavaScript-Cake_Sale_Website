import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('API is runninng....');
});

app.listen(5000, console.log('Server running port 5000'));
