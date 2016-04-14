
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('users').del(), 

    // Inserts seed entries
    knex('users').insert({ user: 'Rich', password: 'rich'}),
    knex('users').insert({ user: 'Pat L', password: 'PatL'}),
    knex('users').insert({ user: 'Hugh', password: 'Hugh'}),
    knex('users').insert({ user: 'Christina', password: 'Tina'}),
    knex('users').insert({ user: 'PatD', password: 'PatD'}),
    knex('users').insert({ user: 'Will', password: 'ferrel'})
  );
};
