// function sum (a : number, b : number) {
//   return a + b
// }

// const answer = sum(7, 10)

// console.log(answer)

// boolean
let isCool: boolean = true

// number
let age: number = 56 

// string
let eyeColor: string = 'brown'
let favouriteQuote: string = `I'm not old. I'm only ${age}`

// array
const pets: string[] = ['cat', 'dog', 'pig']
let pets2: Array<string> = ['lion', 'dragon', 'lizard']

// object
let wizard: object = {
  a: 'John'
}

// undefined and null
let meeh: undefined = undefined;
let noo: null = null

// Tuple 
let basket: [string, number] = ['basketball', 5]

// enum
enum Size {Small=1, Medium=2, Large=3}
let sizeLength: number = Size.Small

console.log(sizeLength)

// any type
let whatever: any = "Graceeeeeeeeeeeeeeeeeeeeee Graceeeeeeeeeeeeee"
whatever = Size.Medium

// void
const sing = (): void => {
  console.log('lalallalalaalalalla')
}

// never
let error = (): never => {
  throw Error('oops')
}

// interface
interface RobotArmy {
  count: number,
  type: string,
  magic: string
}

let fightRobotArmy = (robots: RobotArmy) => {
  console.log('FIGHT')
}

let fightRobotArmy2 = (robots: { count: number, type: string, magic: string}) => {
  console.log('FIGHT')
}

interface CatArmy {
  count: number,
  type: string,
  magic: string
}

let dog = {} as CatArmy
dog.count

// classes

class Animal {
  sing: string = 'lslslslspslaa;'

  constructor(sound: string) {
    this.sing = sound
  }

  greet(): string {
    return `Hello ${this.sing}`
  }
}

let lion = new Animal('RAWRRRR')
console.log(lion.sing)

// union
let confused: string|number|boolean = 'ksks'