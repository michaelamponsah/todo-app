const saveResourceToLocalStorage = (key, resource) => {
  window.localStorage.setItem(key, JSON.stringify(resource));
};

export default saveResourceToLocalStorage;