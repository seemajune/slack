Meteor.startup(function() {

  Factory.define('message', Messages, {
    text: function() {
      return Fake.sentence();
    }
  });

  Messages.remove({}); //remove old data before seeding on startu;

  if (Messages.find({}).count() === 0) {
    _(10).times(function(n) {
      Factory.create('message');
    });
  } 

  Channels.remove({});

  Channels.insert({
    name: "general"
  });

  Channels.insert({
    name: "cancer"
  });

  Factory.define('message', Messages, {
    text: function(){
      return Fake.sentence();
    },
    user: Meteor.users.findOne()._id, 
    timestamp: Date.now(),
    channel: "general"
  });
});
