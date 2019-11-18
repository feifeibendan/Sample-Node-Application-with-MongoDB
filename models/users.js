'use strict';

var mongoose = require('mongoose');

var usersSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    password: String,
    pin: String,
    email: String,
    birthday: Date,
    active: { type: Boolean, default: true },
    systemUser: { type: Boolean, default: false },
    adminUser: { type: Boolean, default: false }
});

module.exports = usersSchema;