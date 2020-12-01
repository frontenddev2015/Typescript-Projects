"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WinsAnalysis = void 0;
var MatchResult_1 = require("../MatchResult");
var WinsAnalysis = /** @class */ (function () {
    function WinsAnalysis(team) {
        this.team = team;
    }
    WinsAnalysis.prototype.run = function (matches) {
        var wins = 0;
        for (var _i = 0, matches_1 = matches; _i < matches_1.length; _i++) {
            var match_1 = matches_1[_i];
            if (match_1[1] === 'Man United' && match_1[5] === MatchResult_1.MatchResult.HomeWin) {
                wins++;
            }
            else if (match_1[2] === 'Man United' &&
                match_1[5] === MatchResult_1.MatchResult.AwayWin) {
                wins++;
            }
        }
        return "Total wins is " + wins;
    };
    return WinsAnalysis;
}());
exports.WinsAnalysis = WinsAnalysis;
