//? What is Module Caching?
// Node.js caches modules after the first time they are loaded to improve performance and ensure consistency.

// Module is loaded and cached on first require
const firstImport = require('./my-module');

// Subsequent requires return the CACHED instance
const secondImport = require('./my-module');

console.log(firstImport === secondImport); // true - Same instance!