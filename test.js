function scaryClown() {
    return new Promise(resolve => {
        var prompt = require('prompt');
        prompt.start();
        prompt.get(['age'], function (err, result) {
            resolve(result.age)
        });
    });
  }
async function msg() {
    const age = await scaryClown();
    return age
}