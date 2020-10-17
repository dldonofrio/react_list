const mysql = require('./db').mysql

exports.fetch = async (req, res) => {
	try {
		console.log("attempting query");
		let list = await mysql.query("SELECT * FROM list_items");
		await mysql.end();
		console.log("done");
		res.send({
			status: 200,
			data: list
		})
	} catch(e) {
		console.log(e);
		res.send({
			status: 400,
			message: e.message
		})
	}
}

exports.add = async (req, res) => {
	try{
		var title = req.body.title;
		var completed = req.body.completed
		let item = await mysql.query("INSERT INTO list_items (title, completed) VALUES(?,?)", [title, completed])
		res.send({
			status: 200,
			message: 'list item added successfully'
		})
	} catch(e) {
		console.log("nono")
		console.log(e.message);
		res.send({
			status: 400,
			message: e.message
		})
	}
}