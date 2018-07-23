(function() {
    function config($locationProvider, $stateProvider) {
        $locationProvider
            .html5Mode({
                enabled: true,
                requireBase: false
            });

        $stateProvider
            .state('home', {
                url: '/',
                controller: 'HomeCtrl as home',
                templateUrl: '/templates/home.html'
            });
    }

    function BlocChatCookies($cookies, $uibModal) {
      // $cookies.remove('blocChatCurrentUser')
      var currentUser = $cookies.get('blocChatCurrentUser');
      if (!currentUser || currentUser === '') {
        $uibModal.open({
          animation: false,
          ariaLabelledBy: 'modal-title',
          ariaDescribedBy: 'modal-body',
          templateUrl: '/templates/user-modal.html',
          controller: 'UserModalInstanceCtrl',
          controllerAs: 'modal'
        })
        .result.then(function (username) {
          //$ctrl.selected = selectedItem;
          $cookies.put('blocChatCurrentUser', username);
        }, function () {
          console.log('Modal dismissed at: ' + new Date());
        });;
      }
    }


    angular
        .module('blocChat', ['ui.router', 'firebase', 'ui.bootstrap', 'ngCookies'])
        .config(config)
        .run(['$cookies', '$uibModal', BlocChatCookies]);
})();
