let firstName: string = "Dylan";
console.log(firstName);

const json = JSON.parse("55")
console.log(typeof json);

const names: string[] = []
names.push("Brian")
names.push("power")

console.log(names);

const titles: readonly string[] = ["Mr", "Miss", "Mrs"]

const readonlyTuple: readonly [number, string, boolean] = [1, "Two", false]
console.log(readonlyTuple);

const namedTuple: readonly [x: number, y:number, z:number] = [2,3,4]
console.log(typeof namedTuple);
const [x, y, z] = namedTuple


const car: {type: string, model: string, year:number} = {
    type: "Toyota",
    model: "Prius",
    year: 2016,
}
const car2: {type: string, millage?: number}= {
    type: "Toyota"
}
car2.millage = 5000

// index signatures

const nameAgeMap: {[index: string]: number} ={}
nameAgeMap.brian = 45
// nameAgeMap.brian = "forty" //throws an error string not asignable to number


//enums

//numeric

enum Cardinaldirections  {
    North ,
    East,
    South,
    West
}

enum StatusCodes {
    NotFound = 404,
    Success = 200,
    Accepted =202,
    BadRequest =400
}

//String Enums

enum CardinalDirections {
  North = 'North',
  East = "East",
  South = "South",
  West = "West"
};

//Type aliases
type CarYear = number
type CarType = string
type CarModel= string

type Car = {
    type: CarType,
    year: CarYear,
    model: CarModel
}
const carYear: CarYear = 2001
const carType: CarType = "Toyota"
const carModel: CarModel = "Corolla"
const car3: Car = {
  year: carYear,
  type: carType,
  model: carModel
};

// Interfaces (objects only)


interface Rectangle{
    height: number,
    width: number
}
const rect: Rectangle = {
    height: 78,
    width: 200
}

//extending interfaces
interface ColoredRectangle extends Rectangle{
    color: string
}

const redRect: ColoredRectangle = {
    height: 67,
    width: 90,
    color: "red"
}