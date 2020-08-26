const router = require('express').Router();

// Route to send user object to client
router.get('/user', (req, res) => {
  res.send({ user: req.user });
});

module.exports = router;
