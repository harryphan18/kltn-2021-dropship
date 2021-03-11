const path = require('path');


/**
 * convert absolute path to relative path
 * Cre: pqhuy 11/03/2021
 */
exports.abs = function(filePath) {
    return path.resolve("./app", filePath); 
}