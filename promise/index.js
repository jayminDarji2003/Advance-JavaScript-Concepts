console.log("started.");

const promiseOne = new Promise((resolve, reject) => {
    // Do async task
    // database calls
    // network calls

    setTimeout(() => {
        console.log("Async task done.");
        resolve();
    }, 2000);

});

promiseOne.then(() => {
    console.log("Promise consumed.");
})