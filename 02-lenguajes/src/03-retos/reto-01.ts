// CONSOLE TRACES

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const showMessage = async ([time, message]: [number, string]) => {
  await delay(time);
  console.log(message);
};

const triggers = [
  async () => await showMessage([200, "third"]),
  async () => await showMessage([100, "second"]),
];

const run = async triggers => {
  for (const trigger of triggers) {
    await trigger();
  }
  console.log("first");
};

run(triggers);