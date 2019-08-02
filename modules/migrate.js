"use strict";

var DBMigrate = require('db-migrate');

//getting an instance of dbmigrate
var dbm = DBMigrate.getInstance(true);

//execute any of the API methods
dbm.up(null,'prod')
    .then(function () {
        console.log('Migrations has been successfully migrated up');
        return;
    }); 