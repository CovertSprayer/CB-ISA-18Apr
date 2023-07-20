class Shape{
    constructor(color){
        this.color = color;
    }

    getColor(){
        return this.color;
    }

    static sayHello(){
        console.log('Hello!! HRU??')
    }

}

class Square extends Shape{
    constructor(color, side){
        super(color);
        this.side = side;
    }

    getArea(){
        return this.side * this.side;
    }
}

// const circle = new Shape('darkgreen');
// console.log(circle);

const sq = new Square('darkgreen', 4);
console.log(sq);
console.log(sq.getArea());
console.log(sq.getColor());
Shape.sayHello();


