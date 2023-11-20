// build your `Project` model here
const db = require('../../data/dbConfig')

const getAll = () => {
    // DO YOUR MAGIC
    const projects = db('projects as p')
    return projects
  }

const getById = (id) => {
  return db('projects').where('project_id', id).first()
}

const add = (projects) => {
  return db('projects').insert(projects)
  .then(([id]) => {
    return getById(id)
  })
}

module.exports = {
    getAll,
    getById,
    add,
}