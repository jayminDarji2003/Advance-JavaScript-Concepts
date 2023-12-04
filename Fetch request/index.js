console.log("connected.");

fetch("https://api.github.com/users/jayminDarji2003")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
    }).catch((error) => {
        console.log("Error occurred while fetching data.");
        console.log(error);
        console.log(error.message);
    })