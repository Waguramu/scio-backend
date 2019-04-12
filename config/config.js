var Config = {};
Config.db = {};
Config.app={};
Config.auth = {};

Config.db.url = 'mongodb://vpt1.org:29876/test';
Config.db.user = 'deeplegal';
Config.db.pass = 'd/o|F(/yY\\XjeD)a';

// Use environment defined port or 3000
Config.app.port = process.env.PORT || 3000;

Config.auth.jwtSecret = "very secret secret";

module.exports = Config;
