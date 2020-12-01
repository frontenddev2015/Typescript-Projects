"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertStringToDate = void 0;
var convertStringToDate = function (dateString) {
    var dateParts = dateString.split('/').map(function (value) {
        return parseInt(value);
    });
    return new Date(dateParts[0], dateParts[1] - 1, dateParts[2]);
};
exports.convertStringToDate = convertStringToDate;
