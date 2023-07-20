
class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    set diameter(diameter) {
        this.radius = diameter / 2;
    }

    get diameter() {
        return this.radius * 2;
    }

    get area(){
        return Math.PI * this.radius * this.radius;
    }

}

const circle = new Circle(5);

console.log(circle);
console.log(circle.diameter);

circle.diameter = 20;
console.log(circle);

console.log(circle.area)

