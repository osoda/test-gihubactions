const getSecret = require("@osoda/sumSecret");

const secret = getSecret("test");

console.log(secret);
