const GDB = require("@goblindb/goblindb");
const config = {
    fileName: './db_files/set',
    pointerSymbol: '/'
};

const goblinDB = GDB(config, function(err) {
    if (err) {
        throw err;
    }

    // clean db before start
    goblinDB.truncate();
    
    // set data in db.admin.deep.reference
    goblinDB.set({"name": "Sebas", "role": "developer"}, "admin/deep/reference");

    // update data in db.admin.deep.reference.role
    goblinDB.set({ role: "senior developah" }, "admin/deep/reference/role");

    // try to do an invalid set.
    goblinDB.set("senior developah", "admin/deep/reference/role");
        
    console.info('------------------');
    console.info('Set Demo. Result:');
    console.info(goblinDB.get());
    console.info('------------------');
});

goblinDB.on('set', function(changed) {
    console.info('------------------');
    console.info('On Set');
    console.info('Old Value: ', changed.oldValue);
    console.info('New Value: ', changed.value);
});

goblinDB.on('error', function(error) {
    console.info('Error: ', error.msg);
});