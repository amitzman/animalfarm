/* eslint-disable new-cap */
import express from 'express';
const router = module.exports = express.Router();
// Home Page
router.get('/', (req, res) => {
  res.render('home/index');
});
//  About Page
router.get('/about', (req, res) => {
  res.render('home/about');
});
//  FAQ Page
router.get('/faq', (req, res) => {
  res.render('home/faq');
});
