function gameObject() {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1,
                },
                "Reggie Evens": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7,
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15,
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5,
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1,
                },
            },
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2,
                },
                "Bismack Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10,
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5,
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0,
                },
                "Brendan Hayword": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12,
                },
            },
        },
    };

}
function numPointsScored(PName){
    let pointScores = gameObject().home.players[PName] || gameObject().away.players[PName];
    return pointScores.points;
}   
function shoeSize(PName){
    let ShoeSizes = gameObject().home.players[PName] || gameObject().away.players[PName];
    return ShoeSizes.shoe;
}
function teamColors(TName){
    let team = gameObject().home.teamName === TName ? gameObject().home : gameObject().away;
    return team.colors;
}
function teamNames(){
    return [gameObject().home.teamName, gameObject().away.teamName];
}
function playerNumbers(TName){
    let team = gameObject().home.teamName === TName ? gameObject().home : gameObject().away;
    return Object.values(team.players).map(player => player.number);
}
function playerStats(PName){
    PName = gameObject().home.players[PName] || gameObject().away.players[PName];
    return PName;
}
function bigShoeRebounds(){
    let maxShoeSize = 0;
    let maxRebounds = 0;
    for (let player in gameObject().home.players) {
        if (gameObject().home.players[player].shoe > maxShoeSize) {
            maxShoeSize = gameObject().home.players[player].shoe;
            maxRebounds = gameObject().home.players[player].rebounds;
        }
    }
    for (let player in gameObject().away.players) {
        if (gameObject().away.players[player].shoe > maxShoeSize) {
            maxShoeSize = gameObject().away.players[player].shoe;
            maxRebounds = gameObject().away.players[player].rebounds;
        }
    }
    return maxRebounds;
}
function doesLongestNameStealATon(){
    //this one was a little tougher to setup compared to the rest.
    //Known: longest names are Brendan Hayword and Bismack Biyombo. 
    //Known: Brendan has 22 steals and Bismack has 7 steals.
    //Known: longest name length is 15 characters.
    //Known: output default should be True, -
    //if the values are changed in the playerlist it will output false and fail the test.
    //Find longest Names
    let longestNameLength = 0;
    let longestNames = [];
    for (let player in gameObject().home.players) {
        if (player.length > longestNameLength) {
            longestNameLength = player.length;
            longestNames = [player];
        } else if (player.length === longestNameLength) {
            longestNames.push(player);
        }
    }
    for (let player in gameObject().away.players) {
        if (player.length > longestNameLength) {
            longestNameLength = player.length;
            longestNames = [player];
        } else if (player.length === longestNameLength) {
            longestNames.push(player);
        }
    }
    //Find steals of longest names
    let longestNameSteals = longestNames.map(name => {
        let playerStats = gameObject().home.players[name] || gameObject().away.players[name];
        return playerStats.steals;
    });
    //compare steals of longest names
    let maxSteals = Math.max(...longestNameSteals);
    for (let player in gameObject().home.players) {
        let steals = gameObject().home.players[player].steals;
        if (steals > maxSteals) {
            return false;
        }
    }
    for (let player in gameObject().away.players) {
        let steals = gameObject().away.players[player].steals;
        if (steals > maxSteals) {
            return false;
        }
    }
    //Only when longest name has max steals return true
    return true;
}