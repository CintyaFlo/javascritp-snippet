class Thermostat {
  constructor(farenheit) {
    this._farenheit = farenheit;
  }

  get temperature() {
    return (5 / 9) * (this._farenheit - 32);
  }
  set temperature(celsius) {
    this._farenheit = (celsius * 9) / 5 + 32;
  }
}
// Only change code above this line

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
//thermos.temperature = 26;
//temp = thermos.temperature; // 26 in Celsius

console.log(new Thermostat(76));
console.log(temp);
