#! /usr/bin/env node

const { Client } = require("pg");

const http = require("http");
const { neon } = require("@neondatabase/serverless");
require("dotenv").config();
const SQL = `
CREATE TABLE IF NOT EXISTS users  (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username VARCHAR ( 255 )
);
CREATE TABLE IF NOT EXISTS messages  (
  userId INTEGER REFERENCES users(id),
  message TEXT,
  added  TIMESTAMP NOT NULL  DEFAULT NOW()
);

INSERT INTO users (username) 
VALUES
  ('Bryan'),
  ('Odin'),
  ('Damon');


INSERT INTO messages (userId, message, added)
VALUES
  (1, 'I Love you', NOW()),
  (2, 'I saw you', NOW()),
  (3, 'there you are', NOW());

`;

async function main() {
  console.log("seeding...");
    const {DATABASE_URL} = process.env;
    const client = new Client({
    connectionString:  DATABASE_URL,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
