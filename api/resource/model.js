// build your `Resource` model here
const db = require('../../data/dbConfig')

const getAll = () => {
  // DO YOUR MAGIC
  const resources = db('resources as r')
  return resources
} 

const getById = (id) => {
  return db('resources').where('resource_id', id).first()
}

const add = (resources) => {
  return db('resources').insert(resources)
  .then(([id]) => {
    return getById(id)
  })
}

module.exports = {
    getAll,
    getById,
    add,
}