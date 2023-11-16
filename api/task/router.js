// build your `/api/tasks` router here
const express = require('express')
const Tasks = require('./model')

const router = express.Router()

router.get('/', (req, res, next) => {
  Tasks.getAll()
  .then(
    tasks => {
      res.json(tasks)
  })
  .catch(next)
})

router.post('/', (req, res, next) => {

})

module.exports = router