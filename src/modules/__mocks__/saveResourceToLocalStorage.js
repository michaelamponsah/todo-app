const saveResourceToLocalStorage = (key, resource) => {
  const mockLocalStorage = {
    todos: [],
  };

  mockLocalStorage[key] = resource;
};

export default saveResourceToLocalStorage;