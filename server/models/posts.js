var db = require('../db');

var Post = module.exports;

Post.create = function (incomingAttrs) {

	var attrs = Object.assign({}, incomingAttrs);

	console.log('create attrs:', attrs);
  return db('posts').insert(attrs)
    .then(function (result) {
      // Prepare new user for outside world
      return result[0];
    });
};

Post.loader = function () {
  return db('posts').join('users', 'user_id', '=', 'users.uid')
  .select('*').orderBy('timestamp')
    .then(function (result) {
      var obj = {}
      console.log("your data", result)
      //filter out password and things
      // Prepare new user for outside world
      return result;
    });
};
