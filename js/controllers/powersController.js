angular
    .module('power')
    .controller('PowersController', PowersController);

    console.log("this is the 1st powers controller")


PowersController.$inject = ['$resource', 'Power', 'Category']
function PowersController($resource, Power, Category){
  var self = this;
  


Category.query(function(res) {
  console.log(categories)
  //grabbing categories and pushing them into an array
  self.categories = []; 
  
  //next, i need to set up 9 categories and pull random data into them
  self.selectPower = {res} 

  //i need to them store these into something i can use in ng-repeat


  });


  console.log("this is the 2nd check powers controller")

  // Fetch the clicked power
  this.selectPower = function(category) {
    self.selectedPower = Power.random({ tag: category });
  }

  this.editPower = function(power){
    self.power = power;
  }

}

