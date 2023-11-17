// build your `/api/projects` router here
const express = require('express')
const Projects = require('./model')
const mDW = require('./middleware')

const router = express.Router()

router.get('/', (req, res, next) => {
    Projects.getAll()
    .then( projects => {
      res.json(projects)
    }
      
    )  
    .catch(next)
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
      const project = await Projects.add(req.body)
      res.json(project)
    }
    catch(err){
      next(err)
    }
})

module.exports = router