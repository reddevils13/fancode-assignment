
const Tour = require('../controllers/tour');

module.exports = function(app) {
    app.route('/tours').get(async (req, res, next) => {
        try {
            return res.json(await Tour.getAllTours());
        } catch (err) {
            return next(err);
        }
    });

    /* Commented the earlier definition of fetching all tour matches by tour name 
    **/

    // app.route('/tour/matches').get(async (req, res, next) => {
    //     try {
    //         let params = req.query;
    //         let result = await Tour.getMatchesByTourName(params);
    //         return res.json(result);
    //     } catch (err) {
    //         return next(err);
    //     }
    // });

    /* created a new API which will return matches based on tours.id
       as there's DB indexing on tours.id but not on tours.name 
    **/

    app.route('/tour/matches').get(async (req, res, next) => {
        try {
            let params = req.query;
            let result = await Tour.getMatchesByTourId(params);
            return res.json(result);
        } catch (err) {
            return next(err);
        }
    });
}