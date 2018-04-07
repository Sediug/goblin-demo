const GDB = require("goblindb");
const config = null; // Use default config

const goblinDB = GDB(config, function(err) {
    if (err) {
        throw err;
    }

    console.info('Goblin DB Working properly.');
    console.info('---------------------------');
    console.info('Database:');
    console.info('---------------------------');
    console.info('Save Data:');
    console.info('Run node demo/set.js for an example of how the method set works.');
    console.info('Run node demo/update.js for an example of how the method update works.');
    console.info('Run node demo/push.js for an example of how the method push works.');
    console.info('---------------------------');
});