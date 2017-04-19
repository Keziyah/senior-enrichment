'use strict'
const api = require('express').Router()
const db = require('../db')

const Campus = db.model('campus')
//the string is what it's called in db.define

const Student = db.model('student')

// If you aren't getting to this object, but rather the index.html (something with a joke) your path is wrong.
	// I know this because we automatically send index.html for all requests that don't make sense in our backend.
	// Ideally you would have something to handle this, so if you have time try that out!
api.get('/hello', (req, res, next) => res.send({hello: 'world'}))

module.exports = api

//In start.js, it's set up so that all get requests to / will go to index.html. 
//Index is linked to our bundle, so React Router will handle most of the 
//views routing. 

//In this file, we want to handle api routing, so, things that request information
//from the database, for example.


api.post('/campuses', (req, res, next) => {
	Campus.create(req.body)
	.then(campus => {
		res.send(campus)
	})
	.catch(next)

})

api.get('/campuses/:id', (req, res, next) => {
	console.log(req.params.id)
	Campus.findOne({where: {id: req.params.id}})
	.then(campus => {
		res.send(campus)
	})
	.catch(next)
})

api.get('/campuses', (req, res, next) => {
	Campus.findAll()
	.then(campuses => {
		res.send(campuses)
	})
	.catch(next)
})

api.delete('/campuses', (req, res, next) => {
	Campus.destroy({
		where: {id: req.body.id}
	})
	.catch(next)
})

api.post('/students', (req, res, next) => {
	Student.create(req.body)
	.then(student => {
		res.send(student)
	})
	.catch(next)

})