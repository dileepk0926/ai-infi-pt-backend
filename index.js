const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('AI INFI PT backend is running.');
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
