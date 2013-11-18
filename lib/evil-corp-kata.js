/*
 * evil-corp-kata
 * https://github.com/Per/evil-corp-kata
 *
 * Copyright (c) 2013 Per Flitig
 * Licensed under the MIT license.
 */

'use strict';

var getXstring = function(text) {
  return Array(text.length + 1).join('X');
};

var replaceWithXs = function(source, toReplace, replacement) {
  return source.replace(toReplace, getXstring(replacement));
};

var lengthIsNotEqual = function(stringA, stringB) {
  var ignoreChars = /,/g;
  return stringA.replace(ignoreChars, '').length !== stringB.replace(ignoreChars, '').length;
};

exports.censorString = function(text) {
  if (!text) {
    return '';
  }

  var blacklist = ['nice', 'pony', 'sun', 'light', 'fun', 'happy', 'funny', 'joy', 'friend'];
  var replacements = {
    bad: 'ungood',    
    better: 'gooder', 
    objection: 'thoughtcrime',
    agree: 'crimestop'
  };
  var input = text.split(' ');
  var regex, strippedWord;

  input.forEach(function (inputWord, index) {
    blacklist.forEach(function(blacklistWord) {
      regex = new RegExp(blacklistWord, 'gi');
      if (regex.test(inputWord)) {
        if (lengthIsNotEqual(inputWord, blacklistWord)) {
          strippedWord = inputWord.replace(/[,]/g, '');
          input[index] = replaceWithXs(inputWord, strippedWord, strippedWord);
          //console.log([inputWord, strippedFullWord, blacklistedWord]);
        } else {
          input[index] = replaceWithXs(inputWord, regex, blacklistWord);
          //console.log([inputWord, blacklistedWord]);
        }
      }
    });
  });

  return input.join(' ');
};
