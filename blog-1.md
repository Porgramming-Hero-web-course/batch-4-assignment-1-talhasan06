
# 1. The significance of union and intersection types in Typescript.
#### Union
Union type allows to hold multiple types.Value can be one or multiple type in between allowed union type. It make code more reusable.Developer can handle multiple types while maintaining type safety.

## Union Usage/Examples

```javascript
type NumberOrString = number | string;

function print(value: NumberOrString) {
  if (typeof value === "string") {
    console.log("It's a string");
  } else {
    console.log("It's a number");
  }
}
```
#### Intersection
Intersection combine multiple types into one. Useful when you want to create types that merge multiple types or interfaces.

```javascript
interface Person={
    name:string;
}
interface Employee={
    id:number;
}
const employee : Person && Employee={
    name:"Tamim",
    id:1123
}
```