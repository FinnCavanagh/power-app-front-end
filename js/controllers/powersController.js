angular
    .module('power')
    .controller('PowersController', PowersController);

    console.log("this is the 1st powers controller")


PowersController.$inject = ['$resource', 'Power', 'Category']
function PowersController($resource, Power, Category){
  var self = this;
  


Category.query(function(response) {
  console.log("response.categories", response.categories)
  var categories = response.categories;
  //grabbing categories and pushing them into an array
  self.categories = _.shuffle(response.categories)
  self.categories = _.sample(self.categories, [9])
  console.log("self.categories", self.categories)

  //next, i need to set up 9 categories and pull random data into them
  

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

