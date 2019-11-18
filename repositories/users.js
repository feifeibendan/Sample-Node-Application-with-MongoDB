'use strict';

var mongoose = require('mongoose');

var userSchema = require('../models/users');

userSchema.statics = {
	findById : function(query, cb) {
		this.findOne(query, cb);
	},
	create : function(data, cb) {
		let user = new this(data);
		user.save(cb);
	},
	update : function(query, data, cb) {
		this.findOneAndUpdate(query, {$set: data}, {new: true}, cb);
	},
	delete: function(query, cb) {
		this.findOneAndDelete(query, cb);
	}
}

module.exports = mongoose.model('user', userSchema);