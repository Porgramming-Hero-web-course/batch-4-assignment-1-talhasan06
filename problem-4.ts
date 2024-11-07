type Circle = {
  shape: "circle";
  radius: number;
};

type Rectangle = {
  shape: "rectangle";
  width: number;
  height: number;
};

const calculateShapeArea = (prt: Circle | Rectangle): number => {
  if (prt.shape === "circle") {
    return Number((Math.PI * prt.radius ** 2).toFixed(2));
  } else {
    return Number((prt.width * prt.height).toFixed(2));
  }
};
const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
console.log(circleArea); //sample output 1
const rectangleArea = calculateShapeArea({
  shape: "rectangle",
  width: 4,
  height: 6,
});
console.log(rectangleArea); //sample output 2
