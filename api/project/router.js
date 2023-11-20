// build your `/api/projects` router here
const express = require('express')
const Projects = require('./model')

const router = express.Router()

router.get('/', async (req, res, next) => {
  try {
    const projects = await Projects.getAll()
    projects.map((el, idx, arr)=> {
        if(el.project_completed === 0 || !el.project_completed){
          el.project_completed = false
        } else {
          el.project_completed = true
        }
      })
    res.json(projects) 
}
catch(err){
    next(err)
}
})

router.get('/:id', async (req, res, next) => {
  try{
    const project = await Projects.getById(req.params.id)
    res.json(project)
  }
  catch(err){
    next(err)
  }
})


router.post('/', async (req, res, next) => {
    try{
      const arr = []
      const project = await Projects.add(req.body)
      arr.push(project)
      arr.map((el)=> {
        if(el.project_completed === 0 || !el.project_completed){
          el.project_completed = false
        } else {
          el.project_completed = true
        }
      })
      res.json(arr[0])
    }
    catch(err){
      next(err)
    }
})

module.exports = router