


const express = require('express');


const app = express();

date = new Date()
app.get('/', (req, res) => {
  res.status(200);
  res.send({ "unix": date.getTime(), "utc": date.toUTCString() });
});



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.warn(`App listening on http://localhost:${PORT}`);
});