Meteor.publish('messages', function(channel) {
  return Messages.find({channel: channel});
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