const express = require('express');
const sql = require('../config/userCrudOperation');

const app = express.Router();
// app.get('/table/', async (req, res) => {
//   const result = await sql.readCourse(req.params.courseId);
//   res.json(result);
// })
app.get('/:userEmail', async (req, res) => {
  const result = await sql.readRelation(req.params.userEmail);
  res.json(result);
})
app.post('/', async (req, res) => {
  const result = await sql.createRelation(req.body);
  res.json(result);
})
// app.put('/:userEmail', async (req, res) => {
//   const result = await sql.updateRelation();
//   res.json(result);
// })
app.delete('/', async (req, res) => {
  const result = await sql.deleteRelation(req.body)
  res.json(result);
})
module.exports = app;