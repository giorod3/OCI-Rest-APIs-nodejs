var database = require( './services/database.js' );
var objectStore = require( './services/objectStore.js' );
var core = require( './services/core.js' );
var iam = require( './services/iam.js' );
var fileStorage = require( './services/fileStorage.js' );
var audit = require( './services/audit.js' );
var email = require( './services/email.js' );
var dns = require( './services/dns.js' );
var internetIntel = require( './services/internetIntel.js' );
var kms = require( './services/kms.js' );
var loadBalance = require( './services/loadBalance.js' );
var search = require( './services/search.js' );

module.exports = {
    database: database,
    objectStore: objectStore,
    core: core,
    iam: iam,
    fileStorage: fileStorage,
    audit: audit,
    email: email,
    dns: dns,
    internetIntel: internetIntel,
    kms: kms,
    loadBalance: loadBalance,
    search: search
}