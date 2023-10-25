


const express = require('express');

const bodyParser = require('body-parser');

const app = express();

date = new Date()
app.get('/', (req, res) => {
  res.status(200);
  res.send({ "unix": date.getTime(), "utc": date.toUTCString() });
});

app.get(`/api/:DATE`, (req, res) => {
  res.status(200);
  let time = req.params.DATE;
  console.log(time);
  x = Date.UTC(time);
  console.log(x);
  res.send({ "unix": time, "utc": x.toUTCString() });
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.warn(`App listening on http://localhost:${PORT}`);
});