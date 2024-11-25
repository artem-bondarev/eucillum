function myAsyncFunction() {
    return new Promise((resolve, reject) => {
        let success = false; // Simulating some condition
        if (success) {
            resolve("Operation was successful!");
        } else {
            reject("Operation failed.");
        }
    });
}

myAsyncFunction()
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.error(error);
    });
