var express = require("express");
var router = express.Router();
var Promise = require("bluebird");

router.get('/', (req, res) => {
  var address = req.user.address.split(/[\,.]+[ \t\r\n]+/);
  // get user contact info (already in locals)
  // render page with user's contact info
  res.render('user_contact', {
    line_1 : address[0],
    line_2 : address[1],
    postcode : address[2],
    city : address[3],
    state : address[4],
    tel_no : req.user.tel_no
  });
});

module.exports = router;