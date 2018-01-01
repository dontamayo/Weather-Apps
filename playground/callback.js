console.log('callback functions');

let getUser = (id, callback) => {
  let user = {
    id: id,
    name: 'Vicmon'
  };
  setTimeout(() =>{
    callback(user);
  },3000); // callback in 3 seconds
};

getUser(31, (userObject) => {
  console.log(userObject);
});
