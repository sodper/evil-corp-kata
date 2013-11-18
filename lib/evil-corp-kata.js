/*
 * evil-corp-kata
 * https://github.com/Per/evil-corp-kata
 *
 * Copyright (c) 2013 Per Flitig
 * Licensed under the MIT license.
 */

'use strict';

exports.censorString = function(text) {
  var blacklist = ['nice', 'pony', 'sun', 'light', 'fun', 'happy', 'funny', 'joy'];
  
  if (!text) {
    return '';
  }

  var inputWords = text.split(' ');

  blacklist.forEach(function (blacklistedWord) {
    var regex = new RegExp(blacklistedWord, 'gi');
    inputWords.forEach(function(inputWord) {
      if (regex.match(element)) {
        inputWords[index] = Array(inputWord.length + 1).join('X');
      }
    });
  });

  return inputWord.join(' ');
};
