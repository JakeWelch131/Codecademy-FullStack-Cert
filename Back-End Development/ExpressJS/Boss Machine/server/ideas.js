const ideasRouter = require('express').Router();

module.exports = ideasRouter;

const checkMillionDollarIdea = require('./checkMillionDollarIdea');
const { 
  addToDatabase,
  getAllFromDatabase,
  getFromDatabaseById,
  updateInstanceInDatabase,
  deleteFromDatabasebyId,
} = require('./db');

ideasRouter.param('ideaId', (req, res, next, id) => {
    let idea = getFromDatabaseById('ideas', id);
    if (idea) {
        req.idea = idea;
        next();
    } else {
        res.status(404).send();
    }

})

ideasRouter.get('/', (req, res, next) => {
    res.send(getAllFromDatabase('ideas'));
})

ideasRouter.get('/:ideaId', (req, res, next) => {
    res.send(req.idea);
})

ideasRouter.post('/', checkMillionDollarIdea, (req, res, next) => {
    const newIdea = addToDatabase('ideas', req.body);
    res.status(201).send(newIdea);
})

ideasRouter.put('/:ideaId', (req, res, next) => {
    let updatedIdea = updateInstanceInDatabase('ideas', req.body);
    res.send(updatedIdea);
})

ideasRouter.delete('/:ideaId', (req, res, next) => {
    let id = req.params.ideaId;
    let deletedIdea = deleteFromDatabasebyId('ideas', id);
    if (deletedIdea) {
        res.status(204);
    } else {
        res.status(500);
    }
    res.send();
})

