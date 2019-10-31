const AddRecord = require('./services/addRecord');
const DataStorage = require('./services/dataStorage')
module.exports = (app, pool) => {
    const addRecord = AddRecord(pool);
    const dataStorage = DataStorage();

    //app.get('submission', res.render)

    app.get('/login/:user', (req, res) => {
        dataStorage.reporterAdder(req.params.user);
        res.render('index');
    })

    app.get('/', async (req, res, next) => {
        res.render('login')
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
        dataStorage.countAdder(1);
        res.render("onePerson");
    });

    app.get('/submission/group', async (req, res, next) => {
        res.render("group");
    });

    app.post('/final', async (req, res, next) => {
        let data = req.body; //{location: '', count: 3, reporter: '', help: false, information: ''}
        await addRecord.addRecord(data);
        res.render("final");
    });

}