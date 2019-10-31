const AddRecord = require('./services/addRecord');
const DataStorage = require('./services/dataStorage')
module.exports = (app, pool) => {
    const addRecord = AddRecord(pool);
    const dataStorage = DataStorage();

    //app.get('submission', res.render)


    app.get('/', async (req, res, next) => {
        res.render('index')
    })


    app.get('/statistics', async (req, res, next) => {

        res.render("dailyStats", {
            statsInfo: await dataStorage.dataReturner()
        });

    });


    app.get('/submission', async (req, res, next) => {
        res.render("whatDoYouSee");
    });

    app.get('/submission/onePerson', async (req, res, next) => {
        res.render("onePerson");
    });

    app.get('/submission/group', async (req, res, next) => {
        res.render("group");
    });

    app.get('/final', async (req, res, next) => {
        res.render("final");
    });

}