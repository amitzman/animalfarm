/* eslint-disable new-cap */
/* eslint-disable no-console */
import express from 'express';
import Alien from '../models/alien';
const router = module.exports = express.Router();

router.get('/', (req, res) => {
  const aliens = Alien.find();
  console.log('aliens:', aliens);
  res.render('aliens/index', { aliens });
});

router.get('/new', (req, res) => {
  res.render('aliens/new');
});

router.get('/:id', (req, res) => {
  const currentAlien = Alien.find(req.params.id);
  res.render('aliens/show', { currentAlien });
});

router.post('/', (req, res) => {
  const alien = new Alien(req.body);
  alien.save();
  res.redirect('/aliens');
});

router.get('/delete/:id', (req, res) => {
  // console.log('Deleting', req.params.id);
  Alien.delete(req.params.id);
  res.redirect('/aliens');
});
