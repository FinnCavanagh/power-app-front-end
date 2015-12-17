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

     $('html, body').animate({
         scrollTop: $(".power").offset().top
     }, 1000);

    };

  }


function scrollDown() {
  console.log('im in');
  $('#txtSearchProdAssign').keypress(function (e) {
   var key = e.which;
   if(key == 13)  // the enter key code
    {
      $('input[name = butAssignProd]').click();
      return false;  
    }
  });   
}

  

  