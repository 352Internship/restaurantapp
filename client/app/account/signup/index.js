'use strict';

import SignupController from './signup.controller';

export default angular.module('servedApp.signup', [])
  .controller('SignupController', SignupController)
  .name;
