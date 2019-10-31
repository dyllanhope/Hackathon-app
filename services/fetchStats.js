module.exports = (pool) => {
    const fetch = async () =>{
        let response = await pool.query('SELECT location, count, reporter, help, information FROM beggars');
        return response.rows;
    }

    return{
        fetch
    }
}