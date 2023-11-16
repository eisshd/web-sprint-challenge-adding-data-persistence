// DO NOT CHANGE THIS FILE
exports.up = function (knex) {
    return knex.schema
      .createTable('projects', table => {
        table.increments('project_id')
        table.string('project_name', 200).notNullable().unique()
        table.boolean('project_completed').notNullable().defaultTo(false)
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
        table.boolean('task_completed').notNullable().defaultTo(false)
        table.integer('project_id')
        .unsigned()
        .notNullable()
        .references('project_id')
        .inTable('projects')
        .onDelete('RESTRICT')
        .onUpdate('RESTRICT')
      })

      .createTable('project_resources', table => {
        table.increments('project_resources_id')
        table.float('quantity').notNullable()
        table.integer('task_id')
        .unsigned()
        .notNullable()
        .references('task_id')
        .inTable('task')
        .onDelete('RESTRICT')
        .onUpdate('RESTRICT')
        table.integer('resource_id')
        .unsigned()
        .notNullable()
        .references('resource_id')
        .inTable('resource')
        .onDelete('RESTRICT')
        .onUpdate('RESTRICT')
      })
  };
  
  exports.down = function (knex) {
    return knex.schema
      .dropTableIfExists('project_resources')
      .dropTableIfExists('tasks')
      .dropTableIfExists('resources')
      .dropTableIfExists('projects')
  };
  