'use strict';

var users = require('../repositories/users');

function addUser(req, res) {
    let info = req.body;

    users.create(info, function(err, user) {
        if (err) {
            console.log(err);
            return;
        }
        res.json(data);
    })
}

function getUser(req, res) {
    let info = { "_id": req.params.id };

    users.findById(info, function(err, user) {
        if (err) {
            console.log(err);
            return;
        }
        res.json(user);
    })
}

module.exports = {
    addUser,
    getUser
}