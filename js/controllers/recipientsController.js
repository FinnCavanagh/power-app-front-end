angular.module('power')
.controller('RecipientsController', RecipientsController);



RecipientsController.$inject = ['$resource'];
function RecipientsController($resource){
  var Recipient = $resource('http://localhost:3000/recipients/:id', {id: '@_id'});
  
  console.log("this is the recipient controller")

  var self = this;
  this.selectRecipient = function(Recipient) {
    self.selectedRecipient = Recipient.get({id: recipient._id});
  };

  

  // self.all = [];
  // self.addRecipient = addRecipient;
  // self.newRecipient = {};
  // self.getRecipients = getRecipients;
  // self.deleteRecipient = deleteRecipient;

  // getRecipients();
  
  // function getRecipients(){
  //   $http
  //     .get('http://localhost:3000')
  //     .then(function(response){
  //       self.all = response.data.recipients;
  //   });
  // }

  // function addRecipient(){
  //   $http
  //     .post('http://localhost:3000/recipients', self.newRecipient)
  //     .then(function(response){
  //       getRecipients();
  //   });
  //   self.newRecipient = {};
  // }

  }

  