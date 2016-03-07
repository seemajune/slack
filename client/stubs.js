Meteor.methods({
  newMessage: function(message){
    message.timestamp = Date.now();
    message.user = Meteor.userId();
    Messages.insert(message); // save message to db collection
  }
});