'use strict';

var users = require('../models/users');

function addUser(req, res) {
    let info = req.body;

    let dao = new users(info);

    dao.save(function (err, data) {
        if (err) {
            console.log(err);
            return;
        }
        res.json(data);
    });
}

function getUser(req, res) {
    let info = { "_id": req.params.id };

    users.findOne(info).exec(function (err, data) {
        if (err) {
            console.log(err);
            return;
        }
        res.json(data);
    }) 
}

module.exports = {
    addUser,
    getUser
}