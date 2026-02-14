function wait(duration) {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
}

async function countdown() {
  console.log("5…");
  await wait(1000);

  console.log("4…");
  await wait(1000);

  console.log("3…");
  await wait(1000);

  console.log("2…");
  await wait(1000);

  console.log("1…");
  await wait(1000);

  console.log("Happy New Year!");
}

//countdown();

// ex 2 - promise not resolved, async keyword
async function addNums(a, b) {
  return a + b;
}
// adding await it will return 2
const result = addNums(1, 1);
console.log(result);
// output: Promise { 2 }

// ex 3 then x async/await
async function pingEndpoint(endpoint) {
  const response = await fetch(endpoint);
  return response.status;
}

// equivalent with then:
function pingEndpointThen(endpoint) {
  return fetch(endpoint).then((response) => {
    return response.status;
  });
}
