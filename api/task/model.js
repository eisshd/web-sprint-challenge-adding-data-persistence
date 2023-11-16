// build your `Task` model here
const db = require('../../data/dbConfig')

const getAll = () => {
    // DO YOUR MAGIC
    return db('tasks')
  }

const getById = () => {

}

const insert = () => {

}

module.exports = {
    getAll,
    getById,
    insert,
}