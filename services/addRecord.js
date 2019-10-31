module.exports = (pool) => {
    const addRecord = async(data) => {               //{location: '', count: 3, reporter: '', help: false, information: ''}
        const record = [
            data.location,
            data.count,
            data.reporter,
            data.help,
            data.info
        ];
        await pool.query('INSERT INTO beggars(location, count, reporter, help, information) VALUES ($1,$2,$3,$4,$5)', record);
    }

    return{
        addRecord
    }
}