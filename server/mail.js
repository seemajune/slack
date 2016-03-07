Meteor.startup(function () {
  smtp = {
    username: 'sochaapp@gmail.com',
    password: 'oJaOYCRApBAoDBo8OkCx5g',
    server:   'smtp.mandrillapp.com',
    port: 587
 };
    
  process.env.MAIL_URL = 'smtp://' + encodeURIComponent(smtp.username) + ':' + encodeURIComponent(smtp.password) + '@' + encodeURIComponent(smtp.server) + ':' + smtp.port;
});

// Meteor.startup(function(){
//   process.env.MAIL_URL = "smtp://sochaaapp@gmail.com:oJaOYCRApBAoDBo8OkCx5g@smtp.mandrillapp.com:587/";
// });
