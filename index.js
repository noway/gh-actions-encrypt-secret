#!/usr/bin/env node
const sodium = require('tweetsodium');
const key = process.argv[2];
const value = process.argv[3];
const messageBytes = Buffer.from(value);
const keyBytes = Buffer.from(key, 'base64');
const encryptedBytes = sodium.seal(messageBytes, keyBytes);
const encrypted = Buffer.from(encryptedBytes).toString('base64');
console.log(encrypted);
