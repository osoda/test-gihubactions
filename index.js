const getSecret = require("@osodatech/sumSecret");

const secret = getSecret("test");

console.log(secret);
