type EmscriptenModule = {
  _add: (a: number, b: number) => number;
};
const createModule: () => Promise<EmscriptenModule>;
export default createModule;
