const GDB = require("@goblindb/goblindb");
const config = {
    fileName: './db_files/update'
};

const goblinDB = GDB(config, function(err) {
    if (err) {
        throw err;
    }

    // clean db before start
    goblinDB.truncate();
    goblinDB.set({name: 'Goblin', leaders: []});

    // Update admin key
    goblinDB.update({
        "name": "Goblin",
        "leaders": ["Carlos", "Ulises", "Sebas"]
    });
        
    console.info('------------------');
    console.info('Update Demo. Result:');
    console.info(goblinDB.get());
    console.info('------------------');
});

goblinDB.on('update', function(changed) {
    console.info('------------------');
    console.info('On Update');
    console.info('Old Value: ', changed.oldValue);
    console.info('Value: ', changed.value);
});