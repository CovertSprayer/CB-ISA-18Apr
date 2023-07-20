class Rectangle{
    constructor(l, b){
        this.length = l;
        this.breadth = b;
    }

    getArea(){
        return this.length * this.breadth;
    }

    getPerimeter(){
        return 2* (this.length + this.breadth);
    }

}

const rectangle1 = new Rectangle(4, 8);

console.log(rectangle1);
console.log(rectangle1.getArea());
console.log(rectangle1.getPerimeter());