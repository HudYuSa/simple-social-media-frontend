// this function is used when i want to check if the request really failed or it's just because my backend url is changed
export const handleErrNetwork = async (trySomething, catchSomething) => {
  try {
    return await trySomething();
  } catch (err) {
    return await catchSomething(err);
  }
};
