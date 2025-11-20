/*
What is require()?

Module system for importing code in Node.js
Synchronous function that reads and executes JavaScript files
Implements CommonJS module specification 

*/
// ? 🔧 Basic Syntax 
// Import core module
const fs = require('fs');
// Import local file
const myModule = require('./my-module');
// Import from node_modules
const express = require('express');

// ? 📂 Module Resolution Order
// Core Modules (fs, http, path)
// File Modules (./myFile.js)
// Directory Modules (./myDir → looks for index.js)
// node_modules (local and global)

