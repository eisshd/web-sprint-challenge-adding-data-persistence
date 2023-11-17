const Projects = require('./model')

const updateBoolean = async (req, res, next) => {
    try {
        const projects = await Projects.getAll()
        projects.forEach(project => {
        if(project.project_completed === 0){
            project.update()
        } else {project.splice(0, 1, {project_completed: true})}
    });
    }
    catch(err){
        next(err)
    }
    
}

module.exports = {
    updateBoolean,
}