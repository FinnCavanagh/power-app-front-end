angular
.module('power')
.controller('RecipientsController', RecipientsController);

RecipientsController.$inject = ['Recipient']
function RecipientsController(Recipient){
  // var Recipient = $resource('http://localhost:3000/api/recipients/:id', {id: '@_id'});

     this.all = [];
     this.recipient = {};

    this.save = function(){
     Recipient.save(this.recipient, function(res){
      console.log(res);
     })

    };

  }

  

  