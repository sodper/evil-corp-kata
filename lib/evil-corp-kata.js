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
}

exports.censorString = function(text) {
  var blacklist = ['nice', 'pony', 'sun', 'light', 'fun', 'happy', 'funny', 'joy', 'friend'];
  
  if (!text) {
    return '';
  }

  var inputWords = text.split(' ');

  blacklist.forEach(function (blacklistedWord) {
    var regex = new RegExp(blacklistedWord, 'gi');
    inputWords.forEach(function(inputWord, index) {
      if (regex.test(inputWord)) {
        if (lengthIsNotEqual(inputWord, blacklistedWord)) {
          var strippedFullWord = inputWord.replace(/[,]/g, '');
          inputWords[index] = replaceWithXs(inputWord, strippedFullWord, strippedFullWord);
          //console.log([inputWord, strippedFullWord, blacklistedWord]);
        } else {
          inputWords[index] = replaceWithXs(inputWord, regex, blacklistedWord);
          //console.log([inputWord, blacklistedWord]);
        }
      }
    });
  });

  return inputWords.join(' ');
};
