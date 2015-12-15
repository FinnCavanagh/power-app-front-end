angular.module('power')
.controller('RecipientsController', RecipientsController);

RecipientsController.$inject = ['$http'];

function RecipientsController($http){
  var self = this;
  self.all = [];
  self.addRecipient = addRecipient;
  self.newRecipient = {};
  self.getRecipients = getRecipients;
  self.deleteRecipient = deleteRecipient;

  getRecipients();
  
  function getRecipients(){
    $http
      .get('http://localhost:3000/recipients')
      .then(function(response){
        self.all = response.data.recipients;
    });
  }

  function addRecipient(){
    $http
      .post('http://localhost:3000/recipients', self.newRecipient)
      .then(function(response){
        getRecipients();
    });
    self.newRecipient = {};
  }

  }
