
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('users').del(), 

    // Inserts seed entries
    knex('users').insert({ user: 'Rich', password: 'rich', profile_picture: 'https://avatars3.githubusercontent.com/u/16308972?v=3&s=400'}),
    knex('users').insert({ user: 'Pat L', password: 'PatL', profile_picture: 'https://avatars1.githubusercontent.com/u/512480?v=3&s=400'}),
    knex('users').insert({ user: 'Hugh', password: 'Hugh', profile_picture: 'https://avatars1.githubusercontent.com/u/7887116?v=3&s=400'}),
    knex('users').insert({ user: 'Christina', password: 'Tina', profile_picture: 'https://avatars1.githubusercontent.com/u/6787825?v=3&s=400'}),
    knex('users').insert({ user: 'PatD', password: 'PatD', profile_picture: 'https://avatars0.githubusercontent.com/u/15750911?v=3&s=400'}),
    knex('users').insert({ user: 'Will', password: 'Ferrell', profile_picture: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQTDrOm65JQyGnjuUS-HxMyerVGQJfU5d3sSB18_hJFFtHLCEXr'})
  );
};
