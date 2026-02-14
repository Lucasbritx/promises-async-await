// are handled with the .catch() method:
fetch("/api/get-data")
  .then((response) => {
    // ...
  })
  .catch((error) => {
    console.error(error);
  });

// rejecting hand crafted promises:
new Promise((resolve, reject) => {
  someAsynchronousWork((result, error) => {
    if (error) {
      reject(error);
      return;
    }

    resolve(result);
  });
});
