# Typescript

## 1. Basics

### 1.1. Type

```typescript
// basic data types
let age: number = 25;
let name: string = 'John Doe';
let greeting: string = `Hello, ${name}`;
let isAvailable: boolean = true;
let u: undefined = undefined;
let n: null = null;

// any
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean

// array
let list: number[] = [1, 2, 3];
let fruits: Array<string> = ['Apple', 'Banana', 'Cherry'];

// tuple: array with fixed length
let person: [string, number] = ['John', 35]; // A tuple of string and number

// object
let user: { name: string; age: number } = {
  name: 'John',
  age: 30
};

// Enum: a set of named **CONSTANTS**
enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}
console.log(Direction.Up); // Outputs: "UP"

// never: represents types of values that never occur. For example, a function that throws an exception or never returns.
function error(message: string): never {
  throw new Error(message);
}

// union
let multiType: number | boolean;
multiType = 20; // OK
multiType = true; // OK

// intersection
type Employee = { employeeID: number; name: string };
type Manager = Employee & { group: string };
let manager: Manager = { employeeID: 1, name: 'John', group: 'Sales' };
```

### 1.2. Function

```typescript
// optional function
function buildName(firstName: string, lastName?: string): string {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}

// rest parameters
function buildName(firstName: string, ...restOfName: string[]): string {
    return firstName + " " + restOfName.join(" ");
}

// arrow functions
const add: (x: number, y: number) => number = (x, y) => x + y;
```

### 1.3. Type Alias

create new type based on old types

```typescript
// primitive
type UserID = number;

// union
type StringOrNumber = string | number;

// tuple
type ResponseTuple = [string, number];

// function
type GreeterFunction = (name: string) => string;

// generic type alias
type Container<T> = { value: T };

// extending type alias
type NamedThing = {
  name: string;
};
type Person = NamedThing & {
  age: number;
};

```

### 1.4. Interface

#### 1.4.1. Comparison between interface and type alias:

##### 1.4.1.1. Declaration and Extension

-  **Interfaces** are extendable and support hierarchical structures via the `extends` keyword. Ideal for object-oriented patterns and extending types. 

  ```typescript
  interface Animal {
    name: string;
  }
  
  interface Dog extends Animal {
    bark(): void;
  }
  ```

-  **Type Aliases** can represent a broader range of types (e.g., unions, primitives) but cannot be extended like interfaces. New types are composed via intersections or unions. 

  ```typescript
  type Animal = {
    name: string;
  };
  
  type Dog = Animal & {
    bark(): void;
  };
  ```

##### 1.4.1.2. Merging

- **Interfaces** allow declaration merging, enabling augmentation of existing types by redeclaring the same interface.

  ```typescript
  interface Box {
    height: number;
  }
  interface Box {
    width: number;
  }
  
  let box: Box = { height: 5, width: 6 };
  ```

- **Type Aliases** do not support declaration merging, ensuring fixed and consistent type definitions.

##### 1.4.1.3. Implementation

- **Interfaces** are implemented by classes to enforce contracts.

- **Type Aliases** are used for type checking but are not tied to the class instantiation process.

##### 1.4.1.4. Use Cases

- **Interfaces** are preferred for defining object shapes and contracts, especially when implementation by classes is needed.
- **Type Aliases** offer versatility for defining a wide array of types, including complex unions and intersections, making them suitable for more varied scenarios.

#### 1.4.2. Examples

```typescript
// Basic Interface
interface User {
  name: string;
  age: number;
}
function greet(user: User) {
  console.log("Hello, " + user.name);
}
greet({ name: "John", age: 30 }); // Correct usage

// Optional Properties
interface Config {
  title?: string;
  debug?: boolean;
}
function setup(config: Config) {
  // Setup function
}

// Readonly Properties
interface Point {
  readonly x: number;
  readonly y: number;
}
let point: Point = { x: 10, y: 20 };
point.x = 5; // Error: Cannot assign to 'x' because it is a read-only property.

// Function Types
interface SearchFunc {
  (source: string, subString: string): boolean;
}
let mySearch: SearchFunc;
mySearch = function(source: string, subString: string) {
  let result = source.search(subString);
  return result > -1;
}

// Extending Interfaces
interface Shape {
  color: string;
}
interface Square extends Shape {
  sideLength: number;
}
let square = <Square>{};
square.color = "blue";
square.sideLength = 10;

// Implementing an Interface
// 'implements'is used in class declarations or expressions to ensure that the class adheres to a certain contract. 
interface Movable {
  move(): void;
}
interface Eatable {
  eat(): void;
}
class Cat implements Animal, Movable, Eatable {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  makeSound() {
    console.log('Meow');
  }
  move() {
    console.log('The cat moves silently.');
  }
  eat() {
    console.log('The cat eats a mouse.');
  }
}
```

