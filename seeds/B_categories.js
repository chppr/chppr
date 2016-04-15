
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('categories').del(), 

    // Inserts seed entries
    knex('categories').insert({type:'Mexican'}),
    knex('categories').insert({type:'American'}),
    knex('categories').insert({type:'Asian'}),
    knex('categories').insert({type:'Italian'}),
    knex('categories').insert({type:'Brunch'}),
    knex('categories').insert({type:'Greek'}),
    knex('categories').insert({type:'German'}),
    knex('categories').insert({type:'Brazilian'}),
    knex('categories').insert({type:'BBQ'}),
    knex('categories').insert({type:'Cuban'}),
    knex('categories').insert({type:'Cajun'}),
    knex('categories').insert({type:'Southern'}),
    knex('categories').insert({type:'Non-Alcoholic'}),
    knex('categories').insert({type:'Alcoholic'}),
    knex('categories').insert({type:'Desserts'})
  );
};