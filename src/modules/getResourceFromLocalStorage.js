const getResourceFromLocalStorage = (key) => JSON.parse(window.localStorage.getItem(key));

export default getResourceFromLocalStorage;