var express = require("express");
var router = express.Router();
var Promise = require("bluebird");

router.get('/', (req, res) => {
  var address = req.user.address.split(/[\,.]+[ \t\r\n]+/);
  res.render('user_contact', {
    line_1 : address[0],
    line_2 : address[1],
    postcode : address[2],
    city : address[3],
    state : address[4].replace(/\.$/,''),
    tel_no : req.user.tel_no
  });
});

router.post('/edit/', (req, res) => {
  var tel_no = req.param("tel_no");
  var address = req.param("address");
  var user_id = req.user.id;
  var employee;
  Promise.try(function() {
    return req.user.get_company_for_user_details({user_id:user_id});
  })
  .then((company) => {
    employee = company.users[0];
    return Promise.resolve();
  })
  .then(function() {
    employee.updateAttributes({
      tel_no:tel_no,
      address:address
    })
    .then(function() {
      req.session.flash_message("Your contact details have been updated.");
      res.redirect_with_session("../");
    })
    return Promise.resolve();
  })
  .catch((error) => {
    console.error(
      'An error occurred when trying to save chnages to user account by user '+user_id
      + ' : ' + error
    );
    req.session.flash_error(
      'Failed to save changes.'
    );
    return res.redirect_with_session('../');
  })
});

module.exports = router;