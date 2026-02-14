function getUser(userId) {
  return new Promise((resolve) => {
    // The asynchronous work, in this case, is
    // looking up a user from their ID
    db.get({ id: userId }, (user) => {
      // resolving passing all user object
      resolve(user);
    });
  });
}

getUser("123").then((user) => {
  console.log(user);
  // { name: 'Lucas', ... }
});
