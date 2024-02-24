const { json } = require('express');
const News = require('../controllers/news');
// const bodyparser = require('bodyParser');
module.exports = function(app) {
  app.post('/news', (req, res) => {
    try {
      return res.json( News.createNews(req.body));
    } catch (err) {
      throw new Error('Error: ' + err);
    }
    });

    app.route('/news').get(async (req, res, next) => {
      try {
        let params = req.query;
        return res.json(await News.getNews(params));
      } catch (err) {
          return next(err);
      }
    });

    // API definition for getting news by tour id --> news/tours?tour_id=<tour_id>
    app.route('/news/tours').get(async (req, res, next) => {
      try {
          let params = req.query;
          let result = await News.getNewsByTourId(params);
          return res.json(result);
      } catch (err) {
          return next(err);
      }
    });

  // API definition for getting news by match id --> news/matches?match_id=<match_id>
  app.route('/news/matches').get(async (req, res, next) => {
    try {
        let params = req.query;
        let result = await News.getNewsByMatchId(params);
        return res.json(result);
    } catch (err) {
        return next(err);
    }
  });

  // API definition for getting news by sport id --> news/sports?sport_id=<sport_id>
  app.route('/news/sports').get(async (req, res, next) => {
    try {
        let params = req.query;
        let result = await News.getNewsBySportId(params);
        return res.json(result);
    } catch (err) {
        return next(err);
    }
  });

}