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
	try {
		var title = req.body.title;
		var completed = req.body.completed
		await mysql.query("INSERT INTO list_items (title, completed) VALUES(?,?)", [title, completed], (err, row, fields) => {
			if (err) throw error;
			console.log(row.insertId);
			console.log(fields)
				res.send({
					status: 200,
					data: row.insertId,
					message: 'list item added successfully'
				})
		})

	} catch(e) {
		console.log(e.message);
		res.send({
			status: 400,
			message: e.message
		})
	}
}

exports.check = async (req, res) => {
	try {
		var id = req.body.id;
		let check = await mysql.query("UPDATE list_items SET completed = !completed WHERE id = ?", [id])
		await mysql.end()
		console.log(check);
		res.send({
			status: 200,
			message: 'checkbox updated successfully'
		})
	} catch(e) {
		console.log(e.message);
		res.send({
			status: 400,
			message: e.message
		})
	}
}

exports.delete = async (req, res) => {
	try {
		var id = req.body.id;
		let del = await mysql.query("DELETE FROM list_items WHERE id = ?", [id])
		await mysql.end();
		console.log(del);
		res.send({
			status: 200,
			message: 'list item deleted successfully'
		})
	} catch(e) {
		console.log(e.message);
		res.send({
			status: 400,
			message: e.message
		})
	}
}