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
			status: "bad",
			message: e.message
		})
	}
}