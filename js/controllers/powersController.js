angular
    .module('power')
    .controller('PowersController', PowersController);

    console.log("this is the 1st powers controller")


PowersController.$inject = ['$resource', 'Power', 'Category', '$http']
function PowersController($resource, Power, Category, $http){
  var self = this;
  
  self.selectedPower = {};


  self.power = {};

  Category.query(function(response) {
    // console.log("response.categories", response.categories)
    self.categories = _.sample(_.shuffle(response.categories), [9]);
  });


  console.log("this is the categories check")

  // Fetch the clicked category
  //when the category is clicked, it returns the powers with those tags
  this.selectPower = function(category) {
    var selectedPower = Power.random({ tag: category });
    selectedPower.$promise.then(function(data) {
      self.power = {
        text: data.text,
        citation: data.citation
      }
   });
  }


  this.editPower = function(power){
    self.power = power;
  }


  // this.savePowers = function(response) {
  //   console.log("hi")
  //   self.selectedPower = Power.save({ power: text })
  //     console.log("stick"); 
  //   }
      
 

   this.savePowers = function(){
    var data = this.freshPower
    debugger
     $http
       .post('http://localhost:3000/api/powers/send-sms', data)
       .then(function(response){
         this.all = response.text.powers;
     });
   }
 

//   this.getPowers = function(response) {
//     console.log(power)
//     var response = Power.query();
//     console.log(response);
//     response.$promise.then(function(res){
//         self.power = res.powers;
//       });
// }

   // Power.save(self.power, function(power) {
   //        self.powers.push(power);
   //        self.power = {}
   //      });
   //    }
  // var Powerbox = ('../models/powerbox');

  // this.addPower = function() {
  //   if (self.power._id) {
  //     Power.update({ id: self.power._id }, self.power, function(){
  //       self.power = {};
  //     });
  //   } else {
  //    
  // }
  //   var response = Power.query();
  //   console.log(response);
  //   response.$promise.then(function(res){
  //     self.all = res.powers;
  //   });
  // }


  // submit()
  // .save 
  // on ng click the text will be saved 
  // sent to mode mailer

  // reset()
  // // on click it will go to the next power

}

