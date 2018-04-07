const GDB = require("@goblindb/goblindb");
const config = {
    fileName: './db_files/push'
};

const goblinDB = GDB(config, function(err) {
    if (err) {
        throw err;
    }

    // clean db before start
    goblinDB.truncate();
    
    goblinDB.push({"name": "Sebas", "role": "developer"});
    goblinDB.push(["other-data", 'run while you can'], 'deep');
        
    console.info('------------------');
    console.info('Push Demo. Result:');
    console.info(goblinDB.get());
    console.info('------------------');
});

goblinDB.on('set', function(changed) {
    console.info('------------------');
    console.info('On Push');
    console.info('Value: ', changed.value);
});

goblinDB.on('error', function(error) {
    console.info('Error: ', error.msg);
});