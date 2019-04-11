var Config = {};
Config.db = {};
Config.app={};
Config.auth = {};

Config.db.host = '*';
Config.db.name = '*';
Config.db.user = '*';
Config.db.name = '*';

// Use environment defined port or 3000
Config.app.port = process.env.PORT || 3000;

Config.auth.jwtSecret = "very secret secret";

module.exports = Config;
