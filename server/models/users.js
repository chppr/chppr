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
  console.log('verifyId id == ', id)
  return db('users').where({
    passid: id
  }).limit(1);
};

Users.verifyInsert = function(obj) {

  var session = {};
  session.passid = obj.id;

  if(obj.provider === 'google') {
    session.user = obj.displayName;
  } else {
    session.user = obj.username;
  }

  return db('users').where({
    passid: session.id
  }).then(function(data) {
    if (data.length === 0) {
      return db('users').insert({
        user: session.user,
        passid: session.id
      }).limit(1).then(function(array) {
        console.log('returning sessions!', session);
        return session;
      })
    } else {
      console.log('datas = ', data);
      if(Array.isArray(data)) {
        return data[0];
      } else {
        return data;
      }
    }
  })

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
