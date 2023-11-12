require('dotenv/config');
const express = require('express');
const app = express();
const connnectToDB = require('./config/db');
const cors = require('cors');

const PORT = process.env.PORT || 3000;

const router = require('./routes');

connnectToDB();

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(PORT, () => {
  console.log('server running in port ' + PORT);
});
