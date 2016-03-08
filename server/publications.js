Meteor.publish('messages', function() {
  return Messages.find();
});

Meteor.publish("allUserNames", function() {
  return Meteor.users.find({}, {fields: {
    "username": 1,
    "services.github.username": 1
  }});
});

Meteor.publish("channels", function() {
  return Channels.find();
});