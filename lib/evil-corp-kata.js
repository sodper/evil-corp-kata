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

var replace = function(source, toReplace, replacement) {
  var regex = new RegExp(toReplace, 'i');
  return source.replace(regex, replacement);
}; 

var replaceWithXs = function(source, toReplace, replacement) {
  return replace(source, toReplace, getXstring(replacement));
};

var lengthIsNotEqual = function(stringA, stringB) {
  var ignoreChars = /,/g;
  return stringA.replace(ignoreChars, '').length !== stringB.replace(ignoreChars, '').length;
};

var contains = function(source, compareTo) {
  var regex = new RegExp(compareTo, 'gi');
  return regex.test(source);
};

var matches = function(source, compareTo) {
  var regex = new RegExp(compareTo, 'i');
  return regex.test(source); 
};

var isUpper = function(ch) {
  return ch.toUpperCase() === ch;
};

var matchCase = function(source, compareTo) {
  if (isUpper(source[0])) {
    compareTo = compareTo[0].toUpperCase() + compareTo.substring(1);
  }
  return compareTo;
};

var censorBlacklistedWords = function(inputWord, blacklistWord) {
  if (contains(inputWord, blacklistWord)) {
    if (lengthIsNotEqual(inputWord, blacklistWord)) {
      var strippedWord = inputWord.replace(/[,]/g, '');
      return replaceWithXs(inputWord, strippedWord, strippedWord);
    } else {
      return replaceWithXs(inputWord, blacklistWord, blacklistWord);
    }
  }
};

var replaceUnwantedWords = function(inputWord, replacements) {
  for(var unwanted in replacements) {
    if (matches(inputWord, unwanted)) {
      var replacement = matchCase(inputWord, replacements[unwanted]);
      return replace(inputWord, unwanted, replacement);
    }
  }
};

var log = function(message) {
  console.log(message);
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
      var censoredWord = censorBlacklistedWords(inputWord, blacklistWord);
      if (censoredWord) {
        input[index] = censoredWord;
      }
    });
    var replacedWord = replaceUnwantedWords(inputWord, replacements);
    if (replacedWord) {
      input[index] = replacedWord;
    }
  });

  return input.join(' ');
};
