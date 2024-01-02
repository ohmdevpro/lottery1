const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');

const app = express();

// Enable CORS for the specified origin
app.use(cors({
  origin: ["https://p1n3r3n.vercel.app", "http://localhost:5173"], // change your domain...
  methods: ["POST"]
}));

// Use bodyParser middleware to parse JSON
app.use(bodyParser.json());

// Define your API endpoint
app.post('/api/getLottery', (req, res) => {
  // Make a request to the Glo API
  axios.post('https://www.glo.or.th/api/lottery/getLatestLottery')
    .then((responseFromGlo) => {
      // Log the data from Glo API
      console.log(responseFromGlo.data);

      // Send the Glo API response back to the client
      res.json(responseFromGlo.data);
    })
    .catch((error) => {
      console.error(error);

      // Send an error response to the client
      res.status(500).json({ error: 'Internal Server Error' });
    });
});

app.get(`/api/lotto/${date}`, (req, res) => {
  axios.get(`https://lotto.api.rayriffy.com/lotto/${date}`)
  .then((res) => {
    res.json(res.data)
  })
  .catch((err) => {
    console.log(err)
  })
})


// Start the server on port 3000
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
