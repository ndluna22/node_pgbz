/** Database setup for BizTime. */

const { Client } = require("pg");

const client = new Client({
  connectionString: "postgresql:///biztime",
});

client.connect();

//db or client to connect

module.exports = client;
