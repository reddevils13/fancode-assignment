const Sport = require('../models/sport');

//  Modify the endpoint /sport/tour/match to also return match's id, startTime and format
const getAllSportsToursAndMatches = async () => {
    const matches = await Sport.getAllSportsToursAndMatches();
    const res = {};
    matches.forEach(match => {
        const { sportName, tourName, matchName, matchId, startTime, format } = match;
        if (!res[sportName]) {
            res[sportName] = {};
        }
        if (!res[sportName][tourName]) {
            res[sportName][tourName] = [];
        }
        
        matchDetails = {}
        matchDetails["matchId"] = matchId
        matchDetails["matchName"] = matchName
        matchDetails["format"] = format
        matchDetails["startTime"] = startTime

        res[sportName][tourName].push(matchDetails);
    });
    return res;
}

module.exports = {
    getAllSportsToursAndMatches: getAllSportsToursAndMatches
}