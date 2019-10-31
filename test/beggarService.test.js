const assert = require('assert');
const BeggarService = require('../beggarsService');
const pg = require("pg");
const Pool = pg.Pool;

const connectionString = process.env.DATABASE_URL || 'postgresql://localhost:5432/my_products_tests';

const pool = new Pool({
    connectionString
});
describe('Beggar service tests', () => {
    
    after(function () {
        pool.end();
    })
});