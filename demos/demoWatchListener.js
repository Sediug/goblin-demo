const GDB = require("@goblindb/goblindb");
const config = {
    fileName: './db_files/shared-db',
    pointerSymbol: '/',
    mode: 'development'
};

const goblinDB = GDB(config, function(err) {
    if (err) {
        throw err;
    }
});

console.log('Listening for changes in the db file...')
goblinDB.on('change', data => {
    console.log('--------------------------------------------------');
    console.log('Recived changes in shared-db by demoWatchListener.');
    console.log('Old Value: ', data.oldValue);
    console.log('Current Value', data.value);
    console.log('--------------------------------------------------');
});

goblinDB.on('error', function(error) {
    console.error('Error in Listener: ', error.msg);
});