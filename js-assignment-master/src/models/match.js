const mysql = require('../lib/mysql');

const getAllMatches = async () => {
    const statement = 'select * from matches;';
    const parameters = [];
    return await mysql.query(statement, parameters);
}

const getMatchesByTourId = async params => {
    const statement = 'select * from matches where tourId = ?;';
    const parameters = [params.tour_id];
    return await mysql.query(statement, parameters);
}

module.exports = {
    getAllMatches: getAllMatches,
    getMatchesByTourId:getMatchesByTourId
}