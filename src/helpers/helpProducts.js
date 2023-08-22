
export const getMenuByCategory = menu => menu.reduce((menuSorted, menuItem) => {
  const categoria = menuItem.categoria;
  !menuSorted[categoria] ? menuSorted[categoria] = [] : null
  menuSorted[categoria].push(menuItem);
  return menuSorted;
}, {});
