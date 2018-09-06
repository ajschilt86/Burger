const connection = require("../config/connection.js");





var orm = {
    selectAll: function(burgers, cb) {
        var queryString = "SELECT * FROM " + burgers + ";";
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    insertOne: function() {

    },
    updateOne: function() {

    }
}




module.exports = orm;