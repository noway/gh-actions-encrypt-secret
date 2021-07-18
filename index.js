#!/usr/bin/env node
const fs = require('fs');
const sodium = require('tweetsodium');

const key = process.argv[2];
const value = fs.readFileSync(process.stdin.fd, 'utf-8');

const messageBytes = Buffer.from(value);
const keyBytes = Buffer.from(key, 'base64');
const encryptedBytes = sodium.seal(messageBytes, keyBytes);
const encrypted = Buffer.from(encryptedBytes).toString('base64');
console.log(encrypted);
