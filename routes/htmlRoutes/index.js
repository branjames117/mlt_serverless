const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('index');
});

router.get('/now-showing', (req, res) => {
  res.render('now-showing');
});

router.get('/membership', (req, res) => {
  res.render('membership');
});

router.get('/history', (req, res) => {
  res.render('history');
});

router.get('/about-us', (req, res) => {
  res.render('about-us');
});

router.get('/ticket-policy', (req, res) => {
  res.render('ticket-policy');
});

router.get('/individual-membership', (req, res) => {
  const PayerID = req.query.PayerID;
  res.render('individual-membership', { PayerID });
});

router.get('/couple-membership', (req, res) => {
  const PayerID = req.query.PayerID;
  res.render('couple-membership', { PayerID });
});

router.get('/family-membership', (req, res) => {
  const PayerID = req.query.PayerID;
  res.render('family-membership', { PayerID });
});

router.get('/business-membership', (req, res) => {
  const PayerID = req.query.PayerID;
  res.render('business-membership', { PayerID });
});

router.get('/thank-you', (req, res) => {
  res.render('thank-you');
});

module.exports = router;
