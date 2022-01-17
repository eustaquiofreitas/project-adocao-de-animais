type MenuOptions = "" | "all" | "dog" | "cat" | "fish";

export const createMenuObject = (activeMenu: MenuOptions) => {
  let retrunObject = {
    all: false,
    dog: false,
    cat: false,
    fish: false,
  };
  if (activeMenu !== "") {
    retrunObject[activeMenu] = true;
  }
  return retrunObject;
};
