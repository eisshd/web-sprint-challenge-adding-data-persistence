// build your `Project` model here
const db = require('../../data/dbConfig')

const getAll = async () => {
    // DO YOUR MAGIC
    return db('projects')
  }

const getById = () => {
  return db('projects').where('id', id).first()
}

const add = () => {
  return db('projects').insert(projects).then(([id]) => {
    return getById(id)
  })
}

module.exports = {
    getAll,
    getById,
    add,
}