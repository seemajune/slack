Accounts.ui.config({
  passwordSignupFields: 'USERNAME_AND_EMAIL'
});

Template.messages.helpers({
  messages: Messages.find({})
});