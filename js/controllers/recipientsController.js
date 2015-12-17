angular
.module('power')
.controller('RecipientsController', RecipientsController);

console.log("this is the 1st recipients controller")

RecipientsController.$inject = ['Recipient']
function RecipientsController(Recipient){
  // var Recipient = $resource('http://send-power.herokuapp.com/api/recipients/:id', {id: '@_id'});


  console.log("this is the recipient controller");

     this.all = [];
     this.recipient = {};

    this.save = function(){
      console.log(Recipient);
     Recipient.save(this.recipient, function(res){
      console.log(res);
     })

    };

  }

  

  