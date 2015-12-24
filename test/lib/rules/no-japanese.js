'use strict';

var rule = require('../../../lib/rules/no-japanese');

var RuleTester = require('eslint').RuleTester;
var ruleTester = new RuleTester();

ruleTester.run('no-japanese', rule, {

  valid : [
    'console.log("hello")',
  ],

  invalid : [{
    code   : 'console.log("ハロー")',
    errors : [{ message : 'Non-ascii character "ハロー" found' }],
  }],

});
