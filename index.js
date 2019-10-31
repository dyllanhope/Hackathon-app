const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const Routes = require('./routes');
const pg = require("pg");
const Pool = pg.Pool;

const app = express();

let useSSL = false;
let local = process.env.LOCAL || false;

if (process.env.DATABASE_URL && !local) {
    useSSL = true;
}

const connectionString = process.env.DATABASE_URL || 'postgresql://coder:pg123@localhost:5432/beggar_db';

const pool = new Pool({
    connectionString,
    ssl: useSSL
});

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

Routes(app, pool);

var PORT = process.env.PORT || 3000;

app.listen(PORT, function () {
    console.log(`Task opened on port: ${PORT}`);
});
