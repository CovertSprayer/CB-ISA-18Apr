
class Vehicle{
    constructor(name, year){
        this.name = name;
        this.year = year;
    }
}


class Car extends Vehicle{
    constructor(name, year, seater){
        super(name, year);
        this.seater = seater;
    }

    printCar(){
        console.log('Name: ', this.name);
        console.log('Year: ', this.year);
        console.log('Seater: ', this.seater);
    }

}

class ElectricVehicle extends Car{
    constructor(name, year, seater, battery){
        super(name, year, seater);
        this.battery = battery;
    }

    printCar(){
        console.log('Name: ', this.name);
        console.log('Year: ', this.year);
        console.log('Seater: ', this.seater);
        console.log('Battery: ', this.battery);
    }
}


let Maruti = new Car('Swift', 2020, 4);
// console.log(Maruti);
// Maruti.printCar();

let EV = new ElectricVehicle('nexon', 2022, 2, '30kwh');

console.log(EV);
EV.printCar();

