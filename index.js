import createModule from "./test.js";

console.log("It works!");

async function load() {
  const Module = await createModule();
  console.log(Module._add(2, 3));
}

load();
