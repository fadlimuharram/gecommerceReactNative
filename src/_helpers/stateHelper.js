export const addQuantity = (state, matchTo) => {
  let findIndexData = state.data.findIndex((val, index) => {
    return val.id === matchTo;
  });
  let newData2 = {};
  if (findIndexData != -1) {
    newData2 = {
      ...state
    };
    newData2.data[findIndexData].quantity =
      newData2.data[findIndexData].quantity + 1;

    return newData2;
  } else {
    return {};
  }
};
