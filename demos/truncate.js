const GDB = require("@goblindb/goblindb");
const config = {
    fileName: './db_files/truncate',
    pointerSymbol: '/'
};

const goblinDB = GDB(config, function(err) {
    if (err) {
        throw err;
    }

    // set data in db.admin.deep.reference
    goblinDB.set({"name": "Sebas", "role": "developer"}, "admin/deep/reference");

    // truncate db
    goblinDB.truncate();
});

goblinDB.on('set', function(changed) {
    console.info('------------------');
    console.info('On Set');
    console.info('New Value: ', changed.value);
});

goblinDB.on('truncate', function(changed) {
    console.info('------------------');
    console.info('On Truncate');
    console.info('Old Value: ', changed.oldValue);
});

goblinDB.on('error', function(error) {
    console.info('Error: ', error.msg);
});