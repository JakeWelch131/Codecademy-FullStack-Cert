const meetingsRouter = require('express').Router();

module.exports = meetingsRouter;

const { 
  addToDatabase,
  getAllFromDatabase,
  getFromDatabaseById,
  updateInstanceInDatabase,
  deleteFromDatabasebyId,
  deleteAllFromDatabase,
  createMeeting
} = require('./db');

meetingsRouter.use('meetingId', (req, res, next, id) => {
  let meeting = getFromDatabaseById('meetings', id);
  if (meeting) {
    req.meeting = meeting;
    next();
  } else {
    res.status(404).send();
  }
});


meetingsRouter.get('/', (req, res, next) => {
    res.send(getAllFromDatabase('meetings'))
})

meetingsRouter.post('/', (req, res, next) => {
    let newMeeting = addToDatabase('meetings', createMeeting());
    res.status(201).send(newMeeting);
})

meetingsRouter.delete('/', (req, res, next) => {
    let deletedMeeting = deleteAllFromDatabase('meetings');
    if (deletedMeeting) {
        res.status(204);
    } else {
        res.status(404);
    }
    res.send();
})