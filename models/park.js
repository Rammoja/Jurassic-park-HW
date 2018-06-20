const Park = function (name, ticketPrice, dinosaur) {
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.dinosaur = [];

};


Park.prototype.dinosaur = function (dinosaur) {
  this.dinosaur.push(dinosaur);
};



module.exports = Park;
