export const filterData = (searchText, restaurants) => {
  const filteredData = restaurants.filter((res) => {
    return res?.info?.name.toLowerCase().includes(searchText.toLowerCase());
  });

  return filteredData;
};
