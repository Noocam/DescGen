var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/cool', function(req, res, next) {
  res.send('ur so cool');
});

router.get('/boitier', function(req, res, next) {
  res.render('boitier', { title: 'Boitier' });
});

router.get('/tapis', function(req, res, next) {
  res.render('tapis', { title: 'Tapis' });
});

router.get('/casque', function(req, res, next) {
  res.render('casque', { title: 'casque' });
});

router.get('/souris', function(req, res, next) {
  res.render('souris', { title: 'souris' });
});

router.get('/clavier', function(req, res, next) {
  res.render('clavier', { title: 'clavier' });
});

router.get('/alimentation', function(req, res, next) {
  res.render('alimentation', { title: 'alimentation' });
});

router.get('/processeur', function(req, res, next) {
  res.render('processeur', { title: 'processeur' });
});

router.get('/ram', function(req, res, next) {
  res.render('ram', { title: 'ram' });
});

router.get('/ssd', function(req, res, next) {
  res.render('ssd', { title: 'ssd' });
});

router.get('/refroidissement', function(req, res, next) {
  res.render('refroidissement', { title: 'refroidissement' });
});

router.get('/cartemere', function(req, res, next) {
  res.render('cartemere', { title: 'cartemere' });
});

router.get('/cartegraphique', function(req, res, next) {
  res.render('cartegraphique', { title: 'cartegraphique' });
});

router.get('/ecran', function(req, res, next) {
  res.render('ecran', { title: 'ecran' });
});


router.get('/undone', function(req, res, next) {
  res.render('undone', { title: 'undone' });
});


module.exports = router;
