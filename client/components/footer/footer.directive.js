'use strict';

angular.module('served2App')
  .directive('footer', function() {
    return {
      templateUrl: 'components/footer/footer.html',
      restrict: 'E',
      controller: footerController,
      controllerAs: 'FooterCtrl',
      link: function(scope, element) {
        element.addClass('footer');
      }
    };
  });


function footerController(Auth) {
  this.isAdmin = Auth.isAdmin;
}
footerController.$inject = ['Auth'];
