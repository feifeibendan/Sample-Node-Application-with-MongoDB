'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = async function (db) {
    await db.createCollection('roles');
    await db.insert('roles', { name: 'System', active: true });
    await db.insert('roles', { name: 'Developer', active: true });
    await db.insert('roles', { name: 'Support', active: true });
    await db.insert('roles', { name: 'Admin', active: true });
    await db.insert('roles', { name: 'User', active: true });
    return;
};

exports.down = async function (db) {
    await db.dropCollection('roles');
    return;
};

exports._meta = {
  "version": 1
};
