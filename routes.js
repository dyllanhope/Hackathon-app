const AddRecord = require('./services/addRecord');
const DataStorage = require('./services/dataStorage');
const FetchStats = require('./services/fetchStats');
module.exports = (app, pool) => {
    const fetchStats = FetchStats(pool);
    const addRecord = AddRecord(pool);
    const dataStorage = DataStorage();

    //app.get('submission', res.render)

    app.get('/login', (req, res) => {
        // dataStorage.reporterAdder(req.body.user);
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
        dataStorage.infoAdder(req.body.location);
        dataStorage.helpAdder(req.body.help);
        dataStorage.countAdder(1);
        
        res.render("onePerson");
    });

    app.get('/submission/group', async (req, res, next) => {
        res.render("group");
    });

    app.post('/final', async (req, res, next) => {
        let data = req.body;
        if (!req.body.count){
            let count = dataStorage.dataReturner();
            count = count.count;
            data.count = count;
        }
        console.log(data);
        // await addRecord.addRecord(data);
        res.render("final");
    });

}