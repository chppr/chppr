var db = require('./../../app/db');

var Post = module.exports

Post.create = function (incomingAttrs) {
	
	var attrs = Object.assign({}, incomingAttrs)
	
	// console.log('create attrs:', attrs)
  return db('posts').insert(attrs)
    .then(function (result) {
      return result[0];
    });
};

Post.loader = function () {	
	return db.select('*').from('posts').orderBy('timestamp', 'desc')
    .then(function (result) {
      return result;
    });
};

Post.delete = function(cardID) {
  return db.delete('*').from('posts').where(cardID)
    .then(function(){
      console.log('dish deleted');
      return;
    })
};
