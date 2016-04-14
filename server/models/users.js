var db = require('./../../app/db');
var Promise = require('bluebird');

var Users = module.exports;

//Users.byType = function (type) {
//  return db('categories').where({ type: type }).limit(1)
//    .then(function (rows) {
//      return rows[0]
//    })
//}

Users.create = function(incomingAttrs) {
  var attrs = Object.assign({}, incomingAttrs);

  return db('users').insert(attrs)
    .then(function(result) {
      // Prepare new user for outside world
      return result[0];
    });
};


Users.verify = function(username, password) {
  return db('users').where({
      username: username,
      password: password,
    }).limit(1)
    .then(function(rows) {
      return rows[0];
    });
};

Users.verifyId = function(id) {
  return db('users').where({
    gitid: id
  }).limit(1);
};

Users.verifyInsert = function(name, gitid) {
  // console.log('name.user == ', name)
  return db('users').where({
    gitid: gitid
  }).then(function(data) {
    console.log('found ! = ', data);
    if (data.length === 0) {
      console.log('inserting new data!');
      return db('users').insert({
        username: name,
        gitid: gitid
      }).limit(1);
    } else {
      console.log('data found! not inserting!');
      return Promise.reject({ username: name, gitid: gitid });
    }
  });
};

//only did categories here because we only use it once! not an actual relation to the users
Users.categories = function(incomingAttrs) {

  var attrs = Object.assign({}, incomingAttrs);

  return db('categories').insert(attrs)
    .then(function(result) {
      // Prepare new user for outside world
      return result[0];
    });
};
