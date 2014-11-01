'use strict';

module.exports = {
	title: 'AppReg',
	description: 'Registry of available applications',

	// Server IP
	ip:     process.env.OPENSHIFT_NODEJS_IP ||
            process.env.IP ||
            undefined,

	// Server port
	port:   process.env.OPENSHIFT_NODEJS_PORT ||
            process.env.PORT ||
            3334,

	// MongoDB connection options
	mongo: {
		uri:    process.env.MONGOLAB_URI ||
				process.env.MONGOHQ_URL ||
				process.env.OPENSHIFT_MONGODB_DB_URL+process.env.OPENSHIFT_APP_NAME ||
				'mongodb://localhost:27017/app_v2'
	},
	version: '2',
	itemName: 'app',
	collectionName: 'apps'
};
