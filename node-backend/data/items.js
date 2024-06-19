const { DEAFULT_ITEMS } = require('./defaultItems'); // Adjust the path as necessary

let items = [...DEAFULT_ITEMS];

const getStoredItems = async () => {
  return items;
};

const storeItems = async (newItems) => {
  items = [...newItems];
};

module.exports = {
  getStoredItems,
  storeItems
};
