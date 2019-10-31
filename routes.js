const AddRecord = require('./services/addRecord');
module.exports = (app, pool) => {
    const addRecord = AddRecord(pool);

    app.get('/', (req, res) => {
        res.send('Hello World');
    })
}