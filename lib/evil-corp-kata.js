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
  
  if (!text) return '';

  blacklist.forEach(function (element, index, array) {
    var regex = new RegExp(element, 'gi');
    var replacement = Array(element.length + 1).join('X');
    text = text.replace(regex, replacement);
  });

  return text;
};
