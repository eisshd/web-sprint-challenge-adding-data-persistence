const projects = [
  { project_name: 'Web API', project_description: 'Build APIs' },
  { project_name: 'Databases', project_description: 'Learn SQL', project_completed: 1 },
  { project_name: 'Authentication' },
]

const resources = [
  { resource_name: 'keyboard' },
  { resource_name: 'computer', resource_description: 'Windows PC' }
]

const project_resources = [

]

const tasks = [
  { task_description: 'Do foo', project_id: 1 },
  { task_description: 'Do bar', task_notes: 'Use Postman!', project_id: 1 },
  { task_description: 'Do baz', task_notes: 'Have fun!', task_completed: 1, project_id: 2 }
]

exports.seed = async function (knex) {
  await knex('projects').insert(projects)
  await knex('resource').insert(resource)
  await knex('project_resources').insert(project_resources)
  await knex('tasks').insert(task)
};
