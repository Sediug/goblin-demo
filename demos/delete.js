const GDB = require("@goblindb/goblindb");
const config = {
    fileName: './db_files/delete',
    pointerSymbol: '/'
};

const goblinDB = GDB(config, function(err) {
    if (err) {
        throw err;
    }

    // set data in db.admin.deep.reference
    goblinDB.set({"name": "Sebas", "role": "developer"}, "admin/deep/reference");

    // truncate db
    goblinDB.delete('admin.deep');

    console.info('------------------');
    console.info('Delete Demo. Result:');
    console.info(goblinDB.get());
    console.info('------------------');
});

goblinDB.on('delete', function(changed) {
    console.info('------------------');
    console.info('On Delete');
    console.info('Old Value: ', changed.oldValue);
});

goblinDB.on('error', function(error) {
    console.info('Error: ', error.msg);
});