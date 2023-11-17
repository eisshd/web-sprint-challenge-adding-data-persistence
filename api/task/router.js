// build your `/api/tasks` router here
const express = require('express')
const Tasks = require('./model')

const router = express.Router()

router.get('/', (req, res, next) => {
  Tasks.getAll()
  .then( tasks => {
    res.json(tasks)
  }
    
  )  
  .catch(next)
})

router.post('/', async (req, res, next) => {
  try{
    const task = await Tasks.add(req.body)
    res.json(task)
  }
  catch(err){
    next(err)
  }
})

module.exports = router