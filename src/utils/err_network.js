export const handleErrNetwork = async (trySomething, catchSomething) => {
  try {
    return await trySomething();
  } catch (err) {
    return await catchSomething(err);
  }
};
