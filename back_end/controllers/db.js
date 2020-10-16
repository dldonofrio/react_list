const mysql = require('serverless-mysql') ({ 
	config: {
		host: 'localhost',
		database: 'react_list',
		user: 'root',
		password: ''
	}
})

exports.mysql = mysql