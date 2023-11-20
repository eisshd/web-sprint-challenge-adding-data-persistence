// build your `/api/tasks` router here
const express = require('express')
const Tasks = require('./model')
const Projects = require('./../project/model')

const router = express.Router()

router.get('/', async (req, res, next) => {
  try {
    const tasks = await Tasks.getAll()
    tasks.map((el)=> {
        if(el.task_completed === 0 || !el.task_completed){
          el.task_completed = false
        } else {
          el.task_completed = true
        }
      })
    res.json(tasks)
}
catch(err){
    next(err)
}
})

router.post('/', async (req, res, next) => {
  try{
    const arr = []
    const task = await Tasks.add(req.body)
    arr.push(task)
    arr.map((el)=> {
      if(el.task_completed === 0 || !el.task_completed){
        el.task_completed = false
      } else {
        el.task_completed = true
      }
    })
    res.json(arr[0])
  }
  catch(err){
    next(err)
  }
})

module.exports = router