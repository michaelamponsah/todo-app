const getResourceFromLocalStorage = () => {
  const todos = [
    {
      description: 'test 1',
      index: 1,
      isCompleted: false,
    },
    {
      description: 'test 2',
      index: 2,
      isCompleted: true,
    },
    {
      description: 'test 3',
      index: 3,
      isCompleted: false,
    },
  ];
  return todos;
};

export default getResourceFromLocalStorage;
