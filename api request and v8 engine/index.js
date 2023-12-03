console.log("starting");
const request_url = "https://api.github.com/users/jaymindarji2003";

const xhr = new XMLHttpRequest();
xhr.open('GET', request_url);
xhr.onreadystatechange = () => {
    console.log(xhr.readyState);
    if (xhr.readyState === 4) {
        //const data = xhr.responseText;  // here we are getting response in string.
        const data = JSON.parse(xhr.responseText);
        console.log(data.bio);
    }
}
xhr.send();