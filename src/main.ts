let firstName: string = "Dylan";
console.log(firstName);

const json = JSON.parse("55");
console.log(typeof json);

const names: string[] = [];
names.push("Brian");
names.push("power");

console.log(names);

const titles: readonly string[] = ["Mr", "Miss", "Mrs"];

const readonlyTuple: readonly [number, string, boolean] = [1, "Two", false];
console.log(readonlyTuple);

const namedTuple: readonly [x: number, y: number, z: number] = [2, 3, 4];
console.log(typeof namedTuple);
const [x, y, z] = namedTuple;

const car: { type: string; model: string; year: number } = {
  type: "Toyota",
  model: "Prius",
  year: 2016,
};
const car2: { type: string; millage?: number } = {
  type: "Toyota",
};
car2.millage = 5000;

// index signatures

const nameAgeMap: { [index: string]: number } = {};
nameAgeMap.brian = 45;
// nameAgeMap.brian = "forty" //throws an error string not asignable to number

//enums

//numeric

enum Cardinaldirections {
  North,
  East,
  South,
  West,
}

enum StatusCodes {
  NotFound = 404,
  Success = 200,
  Accepted = 202,
  BadRequest = 400,
}

//String Enums

enum CardinalDirections {
  North = "North",
  East = "East",
  South = "South",
  West = "West",
}

//Type aliases
type CarYear = number;
type CarType = string;
type CarModel = string;

type Car = {
  type: CarType;
  year: CarYear;
  model: CarModel;
};
const carYear: CarYear = 2001;
const carType: CarType = "Toyota";
const carModel: CarModel = "Corolla";
const car3: Car = {
  year: carYear,
  type: carType,
  model: carModel,
};

// Interfaces (objects only)

interface Rectangle_ {
  height: number;
  width: number;
}
const rectc: Rectangle_ = {
  height: 78,
  width: 200,
};

//extending interfaces
interface ColoredRectangle extends Rectangle_ {
  color: string;
}

const redRect: ColoredRectangle = {
  height: 67,
  width: 90,
  color: "red",
};

// union types
type StatusCode = string | number;

const printStatusCode = (code: StatusCode) => {
  console.log(code);
};
printStatusCode("Not Found ");
printStatusCode(404);

// functions

function multiply(a: number, b: number, c?: number, d: number = 2): number {
  return a * b * (c || 1) * d;
}

function logger(num: number): void {
  console.log(num);
}
logger(multiply(56, 89));

//function type aliases

type Negate = (value: number) => number;
const negate: Negate = (value) => value * -1;
console.log(negate(90));

//casting

let g: unknown = "hello";
console.log((<string>g).length);

console.log((8 as unknown as string).length);

//classes inheritance

interface Shape {
  getArea: () => number;
}

class Rectangle implements Shape {
  public constructor(protected readonly w: number, protected readonly h: number) {}

  public getArea(): number {
    return this.w * this.h;
  }
}

// Partial, Record, Required, Omit, Pick, Exclude, ReturnType, Parameters

interface Person {
  name: string;
  age: number;
  location?: string;
}

const bob: Omit<Person, "age" | "location"> = {
  name: "Bob",
  // `Omit` has removed age and location from the type and they can't be defined here
};

const boby: Pick<Person, "name"> = {
  name: "Bob",
  // `Pick` has only kept name, so age and location were removed from the type and they can't be defined here
};

interface Person {
  name: string;
  age: number;
  location?: string;
}

type Primitive = string | number | boolean;
const value: Exclude<Primitive, string> = true; // a string cannot be used here since Exclude removed it from the type.
