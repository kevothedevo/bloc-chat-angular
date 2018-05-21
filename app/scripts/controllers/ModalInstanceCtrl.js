(function() {
    function ModalInstanceCtrl ($uibModalInstance) {

      this.cancel = function() {
        console.log("cancel");
        $uibModalInstance.dismiss('cancel');

      }
      this.submit = function() {
        console.log("submit");
        $uibModalInstance.close(this.roomName);
      }
    }


    angular
        .module('blocChat')
        .controller('ModalInstanceCtrl', ["$uibModalInstance", ModalInstanceCtrl]);
})();
