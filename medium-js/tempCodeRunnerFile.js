fetch("https://jsonplaceholder.typicode.com/todos").then((data) => console.log("Response :" + data)).
    catch((err) => console.log("ERROR: " + err)).finally(() => { })
