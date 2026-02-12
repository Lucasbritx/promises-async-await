/* SetTimeout solve single thread issue, the work passed in through a function is a callback
setTimeout is a async function, it doesn't block the thread.
window.prompt is sync, so JS can't work while it's waiting
*/
console.log("Start");
setTimeout(() => {
  console.log("After one second");
}, 1000);
