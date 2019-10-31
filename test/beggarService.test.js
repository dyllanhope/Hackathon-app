const assert = require('assert');
const BeggarService = require('../services/addRecord');
const pg = require("pg");
const Pool = pg.Pool;

const connectionString = process.env.DATABASE_URL || 'postgresql://coder:pg123@localhost:5432/beggar_db';

const pool = new Pool({
    connectionString

});
describe('Beggar service tests', () => {
    beforeEach(async () => {
        await pool.query('DELETE FROM beggars');
    })
    it('Should return that the database has a new record', async () => {
        const beggarsService = BeggarService(pool);
        await beggarsService.addRecord({ location: 'Harrington', count: 3, reporter: 'dyllanhope', help: false, info: '' });
        let response = await pool.query('SELECT * FROM beggars');
        console.log(response.rows);
    });
    after(function () {
        pool.end();
    })
});