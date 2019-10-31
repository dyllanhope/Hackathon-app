const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const pg = require("pg");
const Pool = pg.Pool;

const app = express();

let useSSL = false;
let local = process.env.LOCAL || false;

if (process.env.DATABASE_URL && !local) {
    useSSL = true;
}

const connectionString = process.env.DATABASE_URL || 'postgresql://coder:pg123@localhost:5432/begger_db';

const pool = new Pool({
    connectionString,
    ssl: useSSL
});

app.get('/', (req, res) => {
    res.send('Hello World');
});



var PORT = process.env.PORT || 3000;

app.listen(PORT, function () {
    console.log(`Task opened on port: ${PORT}`);
});
