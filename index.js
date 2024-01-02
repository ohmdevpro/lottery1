const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const cors = require('cors');

const app = express();

app.use(cors({
  origin: "https://p1n3r3n.vercel.app"
}));

app.use(bodyParser.json());

app.get('/api/lotto/:date', (req, res) => {
  const date = req.params.date;
  console.log(date);

  axios.get(`https://lotto.api.rayriffy.com/lotto/${date}`)
    .then((response) => {
      res.json(response.data);
      console.log(response.data);
    })
    .catch((err) => {
      console.log('Something went wrong...', err);
    });
});

app.listen(3000, () => {
  console.log('Server running...');
});
