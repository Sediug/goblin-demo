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

    // set data in the db after 5 seconds
    console.log('Will set data to shared-db every second.');
    let counter = 0;

    setInterval(() => {
        counter++;
        goblinDB.set({
            comment: 'Storing data from demo watch updater.',
            counter
        });

        console.log(`Calling goblin SET method for ${ counter } time.`);
    }, 1000);
    
});

goblinDB.on('error', function(error) {
    console.error('Error in Updater: ', error.msg);
});