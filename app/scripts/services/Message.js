(function() {
  function Message($firebaseArray) {
    var Message = {};
    var ref = firebase.database().ref().child("Messages");
    var messages = $firebaseArray(ref);

    Message.all = messages;

    Message.getByRoomId = function(roomId) {
        // Filter the messages by their room ID.
        return messages.filter(function(message) {
            return message.roomId == roomId;
        });
    };

    return Message;
    };

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message]);
})();
