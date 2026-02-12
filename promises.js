/* Promises: better way to async calls instead nesting. */
// It will not work, setTimeout uses older callback style
/* console.log("3");

setTimeout(1000)
  .then(() => {
    console.log("2");

    return setTimeout(1000);
  })
  .then(() => {
    console.log("1");

    return setTimeout(1000);
  })
  .then(() => {
    console.log("Happy New Year!!");
  }); */

// fecthing = will return promises
const fetchValue = fetch("/api/get-data");

console.log(fetchValue);
// -> Promise {<pending>}

/* promise states:
pending: WIP
fulfilled: completed
rejected: error
*/

fetch('/api/get-data')
  .then((response) => {
    console.log(response);
    // Response { type: 'basic', status: 200, ...}
  });