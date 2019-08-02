"use strict";

var DBMigrate = require('db-migrate');

//getting an instance of dbmigrate
var dbm = DBMigrate.getInstance(true);

//execute migration
dbm.up(null, process.env.NODE_ENV)
    .then(function () {
        console.log('Migrations has been successfully migrated up');
        return;
    }); 