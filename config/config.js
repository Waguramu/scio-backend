var Config = {};
Config.db = {};
Config.app={};
Config.auth = {};

Config.db.url = 'mongodb+srv://cluster0-i3jck.gcp.mongodb.net';
Config.db.user = 'deeplegal';
Config.db.pass = 'CRFtI1BAtouDXn9O';

// Use environment defined port or 3000
Config.app.port = process.env.PORT || 3000;

Config.auth.jwtSecret = "very secret secret";

module.exports = Config;
