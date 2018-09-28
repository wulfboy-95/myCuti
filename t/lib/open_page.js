'use strict';

var webdriver = require('selenium-webdriver'),
    Promise   = require("bluebird"),
    until     = webdriver.until,
    By        = webdriver.By;

module.exports = Promise.promisify( function(args, callback){

  var url             = args.url,
      driver          = args.driver || new webdriver.Builder()
      .withCapabilities(webdriver.Capabilities.phantomjs())
      .build(), // Because driver doesn't always get passed on.
      result_callback = callback;
  
  driver.manage().window().setSize(1024, 768);

 // Open front page
 driver
  .get( url )
  .then(function(){
    driver.wait(until.elementLocated(By.css('h1')), 5000);
    // "export" current driver
    result_callback(
      null,
      {
        driver : driver,
      }
    );
  }); 

});

