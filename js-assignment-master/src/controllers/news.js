const News = require('../models/news');
const Match = require('../models/match');
const Tour = require('../models/tour');

const createNews = async params => {
    return await News.createNews(params);
}

const getNews = async params => {
  return await News.getNews(params);
}

const getNewsByMatchId = async params => {

  const news = await News.getNews(params);
  const res = [];
  news.forEach(news => {
    const {title, description, entityType, entityId} = news

    if(entityType == "matchId" && entityId == params.match_id){
      newNews = {}
      newNews["title"] = title
      newNews["description"] = description
      res.push(newNews)
    }

  });

  return res;
}

const getNewsByTourId = async params => {

  const news = await News.getNews(params);
  const matches = await Match.getMatchesByTourId(params);
  const res = [];
  news.forEach(news => {
    const {title, description, entityType, entityId} = news

    if(entityType == "tourId" && entityId == params.tour_id){
      newNews = {}
      newNews["title"] = title
      newNews["description"] = description
      res.push(newNews)
    }

    if(entityType == "matchId"){
      matches.forEach(match => {
        if(match.id == entityId){
          newNews = {}
          newNews["title"] = title
          newNews["description"] = description
          res.push(newNews)
        }
      });
    }
  });

  return res;
}

const getNewsBySportId = async params => {
  const matchNews = await News.getMatchNewsBySportId(params);
  const tourhNews = await News.getTourNewsBySportId(params);
  const res = []; //will contain match news + tour news which are already filtered by sports 

  matchNews.forEach(news => {
    const {title, description, entityType, entityId} = news
    newNews = {}
    newNews["title"] = title
    newNews["description"] = description
    res.push(newNews)
  });

  tourhNews.forEach(news => {
    const {title, description, entityType, entityId} = news
    newNews = {}
    newNews["title"] = title
    newNews["description"] = description
    res.push(newNews)
  });

  return res;
}


module.exports = {
  createNews: createNews,
  getNews:getNews,
  getNewsByMatchId:getNewsByMatchId,
  getNewsByTourId:getNewsByTourId,
  getNewsBySportId:getNewsBySportId
}