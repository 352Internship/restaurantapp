'use strict';

import {
  UtilService
} from './util.service';

export default angular.module('servedApp.util', [])
  .factory('Util', UtilService)
  .name;
