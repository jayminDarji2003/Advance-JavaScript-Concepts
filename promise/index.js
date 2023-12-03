/*

console.log("started.");
console.log("--------------------------------");


// first way of creating Promise.
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
    console.log("--------------------------------");
})


// second way of creating Promise.
new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Async task 2 done.");
        resolve()
    }, 2000);
}).then(() => {
    console.log("Promise 2 consumed.");
    console.log("--------------------------------");
})


// third way of creating promise.
const promiseThree = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Fething all the images.");
        resolve({
            name: "jaydeep vaghela",
            email: "jaydeep@gmail.com",
            mobile_no: "99999999"
        });
    }, 2000);
});

promiseThree.then((data) => {
    console.log(data);
    console.log("--------------------------------");

})

// promise 4
const promiseFour = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false;
        if (!error) {
            resolve({ username: "jaymin", password: "211344" })
        } else {
            reject("ERROR OCCURED WHILE FETCHING THE USER DATA.")
        }
    }, 3000);
})

promiseFour.then((user) => {
    console.log(user);
    return user.username;
}).then((username) => {
    console.log(username);
}).catch((error) => {
    console.log(error);
}).finally(() => console.log("The promise either succeeded or failed"))



// promise five
const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(() => {
        let error = false;
        if (!error) {
            resolve({ username: "jaymin", password: "211344" })
        } else {
            reject("ERROR OCCURED WHILE FETCHING THE USER DATA.")
        }
    }, 3000);
});

async function consumePromiseFive() {
    try{
        const resData = await PromiseFive;
        console.log(resData);
    }catch(error){
        console.log(error);
    }

}

consumePromiseFive()



*/

// fetching json data and handling using async function

// async function fetchingData() {
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/users")
//         const data = await response.json();
//         console.log(data);
//         console.log(typeof data);

//     }
//     catch (err) {
//         console.log(err);
//     }
// }

// fetchingData()


// using try catch
fetch("https://jsonplaceholder.typicode.com/users").then(function (response) {
    return response.json();
})
    .then((data) => {
        console.log(data);
    })
    .catch(function (err) {
        console.log(err);
    })