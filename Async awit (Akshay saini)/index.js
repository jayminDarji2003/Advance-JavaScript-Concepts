/*
    Async await :-
        1. what is async?
            -> Async is a keyword that is used before a function name to create async function.
*/

// promise
// const p = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Promise resolved!!")
//     }, 3000);
// });

// const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Promise resolved!!")
//     }, 5000);
// });

// // async function
// async function handlePromise() {
//     console.log("Function called.");

//     const data = await p;
//     console.log(data);
//     console.log("Data fetched successfully!!");

//     const data2 = await p2;
//     console.log(data2);
//     console.log("Data fetched successfully!!");
// }

// handlePromise();


// normal function
// function getData() {
//     p.then(data => console.log(data))
//     console.log("Data fetched successfully!");
// }

// getData()





// Real world example of async await
// using fetch function

async function getData() {
    console.log("Fetching data!!!");

    try {
        const data = await fetch("https://api.github.com/users/jaymindarji2003");
        const dataJson = await data.json();
        console.log("Data fetched successfully");
        console.log(data);
        console.log(dataJson);
    }
    catch (error) {
        console.log("error while fetching data!!!");
        console.log(error.message);
    }
}

getData()