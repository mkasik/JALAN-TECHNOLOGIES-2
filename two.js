
class Price {
    constructor(BS01, EF01, CF01, BF01, GF01) {
        this.BasicServicing = BS01;
        this.EngineFixing = EF01;
        this.ClutchFixing = CF01;
        this.BrakeFixing = BF01;
        this.GearFixing = GF01;
    }

    getTotal(one, two = 0, three = 0, four = 0, five = 0) {
        const total = ` ${(one + two + three + four + five)}`;

        if (total > 10000) {
            const result = ('Total Bill: ' + total + ' ' + 'And you will get free cleaning')
            return result;
        }
        else {
            const result = ('Total Bill: ' + total)
            return result;
        }





    }
}
let Hatchback = new Price(2000, 5000, 2000, 1000, 3000);
let Sedan = new Price(4000, 8000, 4000, 1500, 6000);
let SUV = new Price(5000, 10000, 6000, 2500, 8000);



// Input your car name
let carType = SUV;

let BS01 = carType.BasicServicing;
let EF01 = carType.EngineFixing;
let CF01 = carType.ClutchFixing;
let BF01 = carType.BrakeFixing;
let GF01 = carType.GearFixing;




// Input your Code here
console.log(carType.getTotal(GF01));


