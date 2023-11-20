// build your `/api/tasks` router here
const express = require('express')
const Tasks = require('./model')
const Projects = require('./../project/model')

const router = express.Router()

router.get('/', async (req, res, next) => {
  try {
    const arr = [
      {
        project_name: "",
        project_description: ""
      }
    ]
    const tasks = await Tasks.getAll()
    tasks.map((el)=> {
        if(el.task_completed === 0 || !el.task_completed){
          el.task_completed = false
        } else {
          el.task_completed = true
        }
      })
    tasks.forEach((tasks) => {
      if(tasks.project_id){
        const project = Projects.getById(tasks.project_id)
        arr.push({
          project_name: project.project_name,
          project_description: project.project_description
        })
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