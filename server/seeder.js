Meteor.startup(function() {
  console.log(Messages.find().count());
  if (Messages.find().count() < 40000){
    console.log("it's less than 40");
    for(var i = 0; i < 10; i++){
      console.log("i = ", i);
      Messages.insert({greeting: "A dummy message."})
    }
    console.log(Messages.find({}).fetch());
  }
});