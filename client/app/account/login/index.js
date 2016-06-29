'use strict';

import LoginController from './login.controller';

export default angular.module('servedApp.login', [])
  .controller('LoginController', LoginController)
  .name;
