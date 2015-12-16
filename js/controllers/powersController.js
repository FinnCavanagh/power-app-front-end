angular
    .module('power')
    .controller('PowersController', PowersController);

    console.log("this is the 1st powers controller")


PowersController.$inject = ['$resource', 'Power', 'Category']
function PowersController($resource, Power, Category){
  var self = this;
  
  self.selectedPower = {};

  Category.query(function(response) {
    console.log("response.categories", response.categories)
    self.categories = _.sample(_.shuffle(response.categories), [9]);
  });


  console.log("this is the categories check")

  // Fetch the clicked category
  //when the category is clicked, it returns the powers with those tags




  this.selectPower = function(category) {
    self.selectedPower = Power.random({ tag: category });
  }

  // _.contains(list, value, [fromIndex]) 

  this.editPower = function(power){
    self.power = power;
  }

}

