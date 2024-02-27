var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('members', { members: [{ name: 'Bogdan', id: 1, link: 'https://github.com/el1ght' }, { name: 'Yaroslav', id: 2, link: 'https://github.com/Guest057' }] });
});

module.exports = router;
