(function() {
    function HomeCtrl(Room, Message, $uibModal) {
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

      this.setRoom = function(room) {
        this.activeRoom = room;
        this.messages = Message.all.filter((message) => message.roomId == room.$id );
      }



       this.rooms = Room.all;
       this.messages = Message.all;
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ["Room", 'Message', "$uibModal", HomeCtrl]);
})();
