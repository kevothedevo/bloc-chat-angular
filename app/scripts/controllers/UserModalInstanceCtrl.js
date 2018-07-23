(function() {
    function UserModalInstanceCtrl ($uibModalInstance) {

      this.cancel = function() {
        console.log("cancel");
        $uibModalInstance.dismiss('cancel');

      }
      this.submit = function() {
        console.log("submit");
        $uibModalInstance.close(this.username);
      }
    }


    angular
        .module('blocChat')
        .controller('UserModalInstanceCtrl', ["$uibModalInstance", UserModalInstanceCtrl]);
})();
