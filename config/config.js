'use strict';

// locale: en, de, es, it, fr ...;   en is mandatory default
module.exports = {
	title: 'AppReg',
	description: 'Registry of available applications',
	port: process.env.PORT || 3334,
	version: '2',
	itemName: 'app',
	collectionName: 'apps',
	mongoUrl: 'mongodb://localhost:27017/'
};


