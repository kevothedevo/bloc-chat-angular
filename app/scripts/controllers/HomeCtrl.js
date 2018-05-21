(function() {
    function HomeCtrl(Room, $uibModal) {
      this.open = function () {
        var modalInstance = $uibModal.open({
          animation: false,
          ariaLabelledBy: 'modal-title',
          ariaDescribedBy: 'modal-body',
          templateUrl: '/templates/modal.html',
          controller: 'ModalInstanceCtrl',
          controllerAs: 'modal'
        });
        console.log("test");

         modalInstance.result.then(function (newRoomName) {
           //$ctrl.selected = selectedItem;
           Room.add(newRoomName);
         }, function () {
           console.log('Modal dismissed at: ' + new Date());
         });
      }



       this.rooms = Room.all;
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ["Room", "$uibModal", HomeCtrl]);
})();
