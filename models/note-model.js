"use strict";

var Note = (function () {
  var text;

  return {
    getText: function () {
      return text;
    },

    setText: function (message) {
      text = message;
    }
  };
});
