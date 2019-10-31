const AddRecord = require('./services/addRecord');
const DataStorage = require('./services/dataStorage');
const FetchStats = require('./services/fetchStats');
module.exports = (app, pool) => {
    const fetchStats = FetchStats(pool);
    const addRecord = AddRecord(pool);
    const dataStorage = DataStorage();

    //app.get('submission', res.render)

    app.post('/login', (req, res) => {
        dataStorage.reporterAdder(req.body.user);
        res.render('index');
    })

    app.get('/', async (req, res, next) => {
        res.render('login')
    })


    app.get('/statistics', async (req, res, next) => {
        res.render("dailyStats", {
            reports: await fetchStats.fetch()
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
        let data = req.body;
        let tempData = dataStorage.dataReturner();
        if (!req.body.count){
            let count = tempData.count;
            data.count = count;
        }
        data.reporter = tempData.reporter;
        console.log(data)
        await addRecord.addRecord(data);
        res.render("final");
    });

}