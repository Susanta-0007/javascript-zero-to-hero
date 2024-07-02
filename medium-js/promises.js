// ! Synchronous Task :

let a = 10;
let b = 20;
let ans = a + b;
console.log(ans);

// ! Asynchronous Task :


async function getData() {
    let fetchResults = await fetch("https://jsonplaceholder.typicode.com/todos");
    console.log(await fetchResults.json());
}

getData();

fetch("https://jsonplaceholder.typicode.com/todos").then((data) => console.log("Response :" + data)).
    catch((err) => console.log("ERROR: " + err)).finally(() => { })

