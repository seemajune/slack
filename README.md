# slack
building slack clone w/ meteor

mongo:
to start mongodb, navigate to root directory in terminal and type command:
$ meteor mongo

to view database, type command:
$ show dbs

to delete the entire db, quit app & type command:
$ meteor reset

note: from terminal, start mongo w env var set: 
$ MONGO_URL=mongodb://localhost:27017 meteor

TO DO:
note: The accounts-ui package provides the login form, as well as calling methods to register/login our users. But for production applications, you might want to create your own UI and set your own account management logic
For example, you’d manually call Accounts.createUser() to create the user, and customize the creation logic with Accounts.onCreateUser() - see: http://docs.meteor.com/#/full/accounts_api  && http://docs.meteor.com/#/full/accounts_passwords

note: oauth- need to add accounts-google, accounts-facebook, accounts-twitter for easy sign up

modify default email template w/ Accounts.emailTemplates()

note: Template.registerHelper() function to define a helper function which can be used from all templates.

note: set persistent sessions for refresh on same channel: use Session.setPersistent(key, value) instead of Session.set(key, value). 
"This can be great of user experience. If your website has an age gate feature, where users under the legal age cannot access, you’d want the age-verification page to appear only on the first visit. If it shows up every time someone visits, the bounce rate will be terrible.
In this case, you should utilize persistent session to store a variable that says “This visitor has verified their age before”, so your application knows not to display the age-verification page again."