exports.seed = function(knex){
    return knex('ingredients').del()
        .then(() =>{
            return knex('ingredients').insert([
                {id: 1, ingredient_name: 'Shin ramen noodles', amount: 1}
            ])
        })
}