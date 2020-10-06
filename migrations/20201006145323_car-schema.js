
exports.up = function(knex) {
    return knex.schema.createTable("car_info", tbl =>{
        tbl.increments();
        tbl.string("Make", 512).notNullable();
        tbl.string("Model").notNullable();
        tbl.integer("Mileage").notNullable();
        tbl.string("Transmission");
        tbl.string("Status");

    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("car_info")
};
