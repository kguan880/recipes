exports.seed = function(knex, Promise){
    return knex('recipes').del()
        .then(() =>{
            return knex('recipes').insert([
                {id: 1, recipe_name: "Placeholder"}
            ])
        })
}