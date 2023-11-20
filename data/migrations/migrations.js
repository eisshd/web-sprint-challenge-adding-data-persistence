// DO NOT CHANGE THIS FILE
exports.up = function (knex) {
    return knex.schema
      .createTable('projects', table => {
        table.increments('project_id')
        table.string('project_name', 200).notNullable().unique()
        table.integer('project_completed').defaultTo(0)
        table.string('project_description', 200)
      })

      .createTable('resources', table => {
        table.increments('resource_id')
        table.string('resource_name', 200).notNullable().unique()
        table.string('resource_description', 200)
      })

      .createTable('tasks', table => {
      table.increments('task_id')
      table.string('task_description', 200).notNullable()
      table.string('task_notes', 200)
      table.boolean('task_completed').defaultTo(false)
      table.integer('project_id')
        .unsigned()
        .notNullable()
        .references('project_id')
        .inTable('projects')
        .onDelete('RESTRICT')
        .onUpdate('RESTRICT')
      })

  };
  
  exports.down = function (knex) {
    return knex.schema
      .dropTableIfExists('tasks')
      .dropTableIfExists('resources')
      .dropTableIfExists('projects')
  };
  