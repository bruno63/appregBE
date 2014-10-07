'use strict';
var mongoose = require('mongoose');
var localeTextSchema = new mongoose.Schema(require('./localeTextSchemaDesc.js'));

module.exports = 
{
	appid: {
		type: String,
		trim: true,
		required: true,
		unique: true
	},
	logo: {
		type: String,
		trim: true,
		required: true
	},
	category: {
		type: String,
		trim: true,
		required: true
	},
	name: [localeTextSchema],
	desc: [localeTextSchema]
};

