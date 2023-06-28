function Car(fuel) {
    this.fuel = fuel;
  }
  Car.prototype.weather = 0;
  Car.prototype.getDistanceCarCanTravel = function() {
    if (this.weather == 0) {
      return this.fuel * 10;
    }
    if (this.weather == 1) {
      return this.fuel * 5;
    }
    if (this.weather == 2) {
      return this.fuel * 2;
    }
  };
const car1 = new Car(100)
const car2 = new Car(50)
car1.getDistanceCarCanTravel() // should be 1000
car2.getDistanceCarCanTravel() // should be 500

// write your code here
let mybutton = document.querySelector('#my-button');

mybutton.addEventListener("click",() => {
    let output = document.querySelector('#output');
    output.innerText = mybutton.innerText;
},{once : true})