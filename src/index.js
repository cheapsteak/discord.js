module.exports = {
	Client : require("./Client/Client.js")
}

var a = new module.exports.Client();
a.login("email", "password").catch((e)=>console.log(e));