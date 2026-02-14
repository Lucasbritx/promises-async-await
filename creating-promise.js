//Ex 1 - syntax
const demoPromise = new Promise((resolve) => {
  // Do some sort of asynchronous work, and then
  // call `resolve()` to fulfill the Promise.
});
demoPromise.then(() => {
  // This callback will be called when
  // the Promise is fulfilled!
});

// ex 2 - original challenge, countdown timer using promise wrapping setTimeout
function wait(duration) {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
}

const timeoutPromise = wait(1000);

timeoutPromise.then(() => {
  console.log("1 second later!");
});
