"use strict";

const mongoose = require('mongoose');

var mongoServerUrl = process.env.MONGO_SERVER_URL ? process.env.MONGO_SERVER_URL : 'mongodb://192.168.1.180:27077/myproject';

mongoose.connect(mongoServerUrl, { useNewUrlParser: true });

mongoose.connection.on('connected', function () {
    console.log('Mongoose connection open to ' + mongoServerUrl);
});

mongoose.connection.on('error', function (err) {
    console.log('Mongoose connection error: ' + err);
});

mongoose.connection.on('disconnected', function () {
    console.log('Mongoose connection disconnected');
});

mongoose.connection.on('reconnected', function () {
    console.log('Mongoose connection reconnected');
});

process.on('SIGINT', function () {
    mongoose.connection.close(function () {
        console.log('Mongoose connection disconnected through app termination');
        process.exit(0);
    });
});

module.exports = {
    mongoose
};