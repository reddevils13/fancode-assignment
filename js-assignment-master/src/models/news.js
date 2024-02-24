const mysql = require('../lib/mysql');

const createNews = async params => {
  const statement = 'insert into news (title, description, entityType, entityId) values (?, ?, ?, ?)';
  const parameters = [ params.title, params.description, params.entityType, params.entityId ];
  return await mysql.query(statement, parameters);
}

const getNews = async params => {
  const statement = 'select * from news ;';
  return await mysql.query(statement, []);
}

const getNewsByMatchId = async params => {
  const statement = 'select * from news where entityType = "matchId" and entityId = ? ;';
  const parameters = [ params.match_id ]
  return await mysql.query(statement, parameters);
}

const getNewsByTourId = async params => {
  const statement = 'select * from news ;';
  return await mysql.query(statement, parameters);
}

const getTourNewsBySportId = async params => {
  const statement = 'select n.* from news n join tours t on t.id = n.entityId and n.entityType = "tourId" join sports s on t.sportId = s.id where s.id = ? ;';
  const parameters = [ params.sport_id ]
  return await mysql.query(statement, parameters);
}

const getMatchNewsBySportId = async params => {
  const statement = 'select n.* from news n join matches m on m.id = n.entityId and n.entityType = "matchId" join  tours t on t.id = m.tourId join sports s on t.sportId = s.id where s.id = ?;';
  const parameters = [ params.sport_id ]
  return await mysql.query(statement, parameters);
}

module.exports = {
    createNews: createNews,
    getNews:getNews,
    getNewsByMatchId:getNewsByMatchId,
    getNewsByTourId:getNewsByTourId,
    getTourNewsBySportId:getTourNewsBySportId,
    getMatchNewsBySportId:getMatchNewsBySportId
}