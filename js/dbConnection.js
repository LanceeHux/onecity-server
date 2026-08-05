const mysql = require("mysql2");
const { DB_CONFIG } = require("../config.json");

const db = mysql.createConnection(DB_CONFIG);

db.connect((err) => {
  if (err) console.error("[DB ERROR] Connection failed:", err);
  else console.log("[DB] Connected to MySQL database successfully.");
});

module.exports = db;