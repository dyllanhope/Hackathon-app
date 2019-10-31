const AddRecord = require('./services/addRecord');
const DataStorage = require('./services/dataStorage')
module.exports = (app, pool) => {
    const addRecord = AddRecord(pool);
    const dataStorage = DataStorage();

    //app.get('submission', res.render)


    app.get('/statistics', async (req, res, next) => {


        res.render("statistics", {
            statsInfo: await dataStorage.dataReturner()
        });

    });


    app.get('/submission', async (req, res, next) => {
        res.render("submission");
    });

    app.get('/submission/one', async (req, res, next) => {
        res.render("submission");
    });

return {
    displaySubmission,
    displayStatistics
}
}
