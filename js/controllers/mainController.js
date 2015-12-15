angular
    .module('power')
    .controller('MainController', MainController);


MainController.$inject = ['$resource']
function MainController($resource){
  var self = this;


  var Power = $resource('http://localhost:3000/api/powers', { id: '@_id'}, { 
    'random': { method:'GET', url: 'http://localhost:3000/api/powers/random/:tag' }
  });

  this.power = Power.random({ tag: 'happy' });

  console.log("this is the powers controller")

  // Fetch all powers
  this.powers = Power.query();

  // Fetch the clicked todo
  this.selectPower = function(power) {
    self.selectedPower = Power.get({ id: power._id });
  }

  this.editCharacter = function(power){
      self.power = power;
  }

}

