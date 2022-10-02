function example(obj, someprop) {
  return obj[someprop];
}

console.log(
  example(
    {
      prop1: "value1",
      prop2: 2,
      prop3: true,
    },
    "prop3"
  )
);
