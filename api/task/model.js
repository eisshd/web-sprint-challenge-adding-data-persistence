// build your `Task` model here
const db = require('../../data/dbConfig')

const getAll = () => {
  // DO YOUR MAGIC
  const tasks = db('tasks as t')
  return tasks
} 

const getById = (id) => {
  return db('tasks').where('task_id', id).first()
}

const add = (tasks) => {
  return db('tasks').insert(tasks)
  .then(([id]) => {
    return getById(id)
  })
}

module.exports = {
    getAll,
    getById,
    add,
}